# 🚀 Guía de Despliegue SSH - AME Salud

Esta guía te ayudará a desplegar tu aplicación Next.js en tu servidor SSH.

## 📋 Prerrequisitos en el Servidor

Antes de comenzar, asegúrate de tener instalado en tu servidor:

- Node.js 18+ 
- npm 9+
- PM2 (gestor de procesos)
- Nginx (opcional, para reverse proxy)

### Instalación de Prerrequisitos

Conéctate a tu servidor SSH:
```bash
ssh amesalud
```

Luego ejecuta:

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verificar instalación
node --version
npm --version

# Instalar PM2 globalmente
sudo npm install -g pm2

# Instalar Nginx (opcional pero recomendado)
sudo apt install -y nginx
```

## 📤 Paso 1: Preparar el Proyecto Localmente

En tu máquina local, ejecuta:

```bash
# Asegúrate de estar en el directorio del proyecto
cd /Users/julianmolina/Documents/Personal/amesalud

# Dar permisos de ejecución al script
chmod +x deploy.sh

# Ejecutar el script de preparación (opcional, solo verifica build)
./deploy.sh
```

## 📦 Paso 2: Subir Archivos al Servidor

Tienes varias opciones para subir los archivos:

### Opción A: Usando rsync (Recomendado - más eficiente)

```bash
# Desde tu máquina local
rsync -avz \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  --exclude '.DS_Store' \
  --exclude '*.log' \
  ./ amesalud:~/amesalud/
```

### Opción B: Usando SCP

```bash
# Desde tu máquina local
scp -r \
  --exclude node_modules \
  --exclude .next \
  --exclude .git \
  . amesalud:~/amesalud/
```

### Opción C: Usando Git (Recomendado si tienes repositorio)

```bash
# En el servidor SSH
ssh amesalud
cd ~
git clone https://github.com/tu-usuario/amesalud.git
cd amesalud
```

## 🔧 Paso 3: Configurar en el Servidor

Conéctate a tu servidor:

```bash
ssh amesalud
cd ~/amesalud
```

### Instalar dependencias y construir

```bash
# Instalar dependencias de producción
npm install --production

# Construir la aplicación
npm run build
```

### Crear directorio de logs para PM2

```bash
mkdir -p logs
```

## 🚀 Paso 4: Iniciar la Aplicación con PM2

```bash
# Iniciar la aplicación
pm2 start ecosystem.config.js

# Verificar que está corriendo
pm2 status

# Ver logs en tiempo real
pm2 logs amesalud

# Configurar PM2 para iniciar automáticamente al reiniciar el servidor
pm2 startup
pm2 save
```

### Comandos útiles de PM2

```bash
pm2 restart amesalud    # Reiniciar la app
pm2 stop amesalud      # Detener la app
pm2 delete amesalud    # Eliminar la app de PM2
pm2 logs amesalud      # Ver logs
pm2 monit              # Monitor en tiempo real
```

## 🌐 Paso 5: Configurar Nginx (Opcional pero Recomendado)

Si quieres usar Nginx como reverse proxy:

### Crear configuración de Nginx

```bash
sudo nano /etc/nginx/sites-available/amesalud
```

Pega esta configuración:

```nginx
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Activar el sitio

```bash
# Crear enlace simbólico
sudo ln -s /etc/nginx/sites-available/amesalud /etc/nginx/sites-enabled/

# Verificar configuración
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

## 🔒 Paso 6: Configurar SSL con Let's Encrypt (Opcional)

Para habilitar HTTPS:

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Obtener certificado SSL
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com

# El certificado se renovará automáticamente
```

## ✅ Verificar que Todo Funciona

1. **Verificar que la app está corriendo:**
   ```bash
   pm2 status
   curl http://localhost:3000
   ```

2. **Verificar logs:**
   ```bash
   pm2 logs amesalud
   ```

3. **Abrir en el navegador:**
   - Si usas Nginx: `http://tu-dominio.com`
   - Si no: `http://tu-servidor-ip:3000`

## 🔄 Actualizar la Aplicación

Para actualizar la aplicación después de hacer cambios:

### Método 1: Con rsync (desde local)

```bash
# Desde tu máquina local
rsync -avz \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  ./ amesalud:~/amesalud/

# Luego en el servidor
ssh amesalud
cd ~/amesalud
npm install --production
npm run build
pm2 restart amesalud
```

### Método 2: Con Git (desde servidor)

```bash
ssh amesalud
cd ~/amesalud
git pull origin main
npm install --production
npm run build
pm2 restart amesalud
```

## 🐛 Solución de Problemas

### La aplicación no inicia

```bash
# Ver logs detallados
pm2 logs amesalud --lines 50

# Verificar que el puerto 3000 está disponible
sudo netstat -tulpn | grep 3000

# Verificar Node.js
node --version
```

### Error de permisos

```bash
# Dar permisos al usuario actual
sudo chown -R $USER:$USER ~/amesalud
```

### Puerto ya en uso

```bash
# Cambiar puerto en ecosystem.config.js
# O matar el proceso que usa el puerto
sudo lsof -ti:3000 | xargs kill -9
```

### Build falla

```bash
# Limpiar y reconstruir
rm -rf .next node_modules
npm install
npm run build
```

## 📊 Monitoreo

### Ver estadísticas de PM2

```bash
pm2 monit
```

### Ver uso de recursos

```bash
pm2 status
```

## 🔐 Seguridad

- ✅ No exponer el puerto 3000 directamente (usar Nginx)
- ✅ Mantener Node.js y npm actualizados
- ✅ Usar SSL/HTTPS en producción
- ✅ Configurar firewall (ufw)
- ✅ Mantener backups regulares

## 📝 Notas Importantes

- El puerto por defecto es **3000**
- PM2 mantendrá la app corriendo incluso si cierras la sesión SSH
- Los logs se guardan en `~/amesalud/logs/`
- Para producción, considera usar un dominio y SSL

## 🆘 Soporte

Si tienes problemas:
1. Revisa los logs: `pm2 logs amesalud`
2. Verifica que Node.js está instalado: `node --version`
3. Verifica que el build funciona: `npm run build`
4. Revisa la configuración de Nginx: `sudo nginx -t`

---

**¡Éxito con tu despliegue!** 🚀

