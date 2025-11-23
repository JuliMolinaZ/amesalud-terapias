# 🚀 Guía de Deployment - AME Salud

## Deployment en Vercel (Recomendado)

Vercel es la plataforma oficial de Next.js y ofrece deployment gratuito optimizado.

### Método 1: Vercel Dashboard (Más fácil)

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con GitHub, GitLab o Email

2. **Subir código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AME Salud website"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/amesalud.git
   git push -u origin main
   ```

3. **Importar proyecto en Vercel**
   - Click en "Add New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará Next.js automáticamente
   - Click "Deploy"

4. **Listo!** Tu sitio estará en `https://tu-proyecto.vercel.app`

### Método 2: Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Configuración en Vercel

#### Variables de entorno (opcional)
Si necesitas variables de entorno:

1. Ve a Project Settings → Environment Variables
2. Agrega:
   - `NEXT_PUBLIC_SITE_URL`: https://tu-dominio.com
   - Otras variables según `.env.example`

#### Dominio personalizado
1. Ve a Project Settings → Domains
2. Agrega tu dominio: `www.amesalud.com`
3. Configura DNS según instrucciones de Vercel

---

## Deployment en Netlify

### Desde GitHub

1. **Crear cuenta en Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Regístrate con GitHub

2. **Conectar repositorio**
   - Click "Add new site" → "Import an existing project"
   - Selecciona tu repo de GitHub

3. **Configurar build**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Deploy**

### Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## Deployment en Railway

Railway es excelente para proyectos fullstack.

```bash
# Instalar Railway CLI
npm i -g @railway/cli

# Login
railway login

# Crear proyecto
railway init

# Deploy
railway up
```

---

## Deployment Manual (VPS/Servidor propio)

### Requisitos
- Ubuntu 22.04+ o similar
- Node.js 18+
- Nginx
- PM2

### 1. Preparar servidor

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar PM2
sudo npm install -g pm2

# Instalar Nginx
sudo apt install -y nginx
```

### 2. Clonar y configurar proyecto

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/amesalud.git
cd amesalud

# Instalar dependencias
npm install

# Build
npm run build
```

### 3. Configurar PM2

```bash
# Crear ecosystem file
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'amesalud',
    script: 'npm',
    args: 'start',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Iniciar con PM2
pm2 start ecosystem.config.js

# Auto-start on reboot
pm2 startup
pm2 save
```

### 4. Configurar Nginx

```bash
sudo nano /etc/nginx/sites-available/amesalud
```

Contenido:
```nginx
server {
    listen 80;
    server_name amesalud.com www.amesalud.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activar sitio:
```bash
sudo ln -s /etc/nginx/sites-available/amesalud /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 5. SSL con Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d amesalud.com -d www.amesalud.com
```

---

## Deployment en Docker

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  amesalud:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Ejecutar:
```bash
docker-compose up -d
```

---

## Optimizaciones Pre-Deploy

### 1. Optimizar imágenes
```bash
npm install -g sharp
npm install sharp
```

### 2. Verificar build
```bash
npm run build
npm start
```

### 3. Lighthouse audit
- Abre Chrome DevTools
- Tab "Lighthouse"
- Run audit en modo producción

### 4. Verificar links
```bash
npm install -g broken-link-checker
blc http://localhost:3000 -ro
```

---

## Post-Deploy Checklist

- [ ] Sitio accesible en producción
- [ ] Todas las páginas cargan correctamente
- [ ] Formulario de contacto funciona
- [ ] Links de WhatsApp/Email funcionan
- [ ] ChatBot responde correctamente
- [ ] Imágenes se cargan
- [ ] Responsive en móvil
- [ ] SSL certificado activo
- [ ] Analytics configurado (opcional)
- [ ] Google Search Console configurado
- [ ] Sitemap accesible `/sitemap.xml`
- [ ] Robots.txt accesible `/robots.txt`

---

## Monitoreo

### Uptime monitoring
- [UptimeRobot](https://uptimerobot.com) - Gratis
- [Pingdom](https://pingdom.com)

### Analytics
- Google Analytics
- Vercel Analytics (si usas Vercel)
- Plausible Analytics (privacy-first)

### Error tracking
- [Sentry](https://sentry.io)
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

---

## Troubleshooting

### Build falla en Vercel
```bash
# Verificar local primero
npm run build

# Si funciona local pero falla en Vercel:
# - Verifica Node version en Vercel settings
# - Debe ser 18.x o superior
```

### Imágenes no cargan
- Verifica que estén en `/public/`
- Usa rutas absolutas: `/images/foto.jpg`
- Configura `domains` en `next.config.ts` si son externas

### CSS no aplica
```bash
# Rebuild completo
rm -rf .next
npm run build
```

---

## Dominio personalizado

### 1. Comprar dominio
- [Namecheap](https://namecheap.com)
- [GoDaddy](https://godaddy.com)
- [Google Domains](https://domains.google)

### 2. Configurar DNS

Para Vercel:
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

Para Netlify:
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     [tu-sitio].netlify.app
```

### 3. Esperar propagación
DNS puede tomar 24-48 horas en propagar.

---

## Soporte

Si tienes problemas:
1. Revisa logs: `vercel logs` o `pm2 logs`
2. Consulta docs de Next.js
3. Stack Overflow
4. Contacta soporte de tu plataforma

---

**¡Éxito con tu deployment!** 🚀
