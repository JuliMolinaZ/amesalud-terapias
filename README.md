# 🌿 AME Salud Terapias - Website Oficial

Página web profesional y moderna para **Terapias AME Salud**, centro especializado en bienestar integral en Bogotá, Colombia.

## ✨ Características

### 🎨 Diseño y UX
- **Diseño moderno y profesional** con estética terapéutica
- **Glassmorphism** y gradientes suaves para transmitir serenidad
- **100% responsive** - optimizado para móviles, tablets y desktop
- **Animaciones fluidas** con Framer Motion
- **Dark mode ready** - preparado para tema oscuro

### 🚀 Stack Tecnológico
- **Next.js 15** con App Router
- **React 19** con Server Components
- **TypeScript** para type safety
- **Tailwind CSS 4** para estilos
- **Shadcn/UI** para componentes base
- **Framer Motion** para animaciones
- **Lucide Icons** para iconografía
- **React Hook Form + Zod** para validación de formularios

### 📱 Funcionalidades
- ✅ Header responsive con navegación suave
- ✅ Hero section con animaciones y CTAs
- ✅ Sección de servicios con tarjetas animadas
- ✅ Sección "Nosotros" con valores y misión
- ✅ Testimonios con carrusel animado
- ✅ Formulario de contacto validado
- ✅ **ChatBot inteligente** con respuestas automáticas
- ✅ Integración directa con WhatsApp y Email
- ✅ Footer completo con información de contacto
- ✅ SEO optimizado con metadata completa
- ✅ Sitemap y robots.txt automáticos

### 🤖 ChatBot Inteligente
- Widget flotante con animaciones suaves
- Respuestas automatizadas basadas en keywords
- FAQ integrado con las preguntas más comunes
- Funciona completamente sin backend
- UI moderna con typing indicators

## 📁 Estructura del Proyecto

```
amesalud/
├── app/
│   ├── layout.tsx           # Root layout con Header, Footer, ChatBot
│   ├── page.tsx             # Página principal (Home)
│   ├── globals.css          # Estilos globales
│   ├── manifest.ts          # PWA manifest
│   ├── robots.ts            # Robots.txt
│   ├── sitemap.ts           # Sitemap XML
│   ├── servicios/
│   │   └── page.tsx         # Página de servicios
│   ├── nosotros/
│   │   └── page.tsx         # Página sobre nosotros
│   └── contacto/
│       └── page.tsx         # Página de contacto
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Header con navegación
│   │   └── Footer.tsx       # Footer con info de contacto
│   ├── sections/
│   │   ├── HeroSection.tsx          # Hero principal
│   │   ├── ServicesSection.tsx      # Servicios
│   │   ├── AboutSection.tsx         # Nosotros
│   │   ├── TestimonialsSection.tsx  # Testimonios
│   │   └── ContactSection.tsx       # Contacto
│   ├── ui/                  # Componentes base Shadcn
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── label.tsx
│   └── ChatBot.tsx          # ChatBot flotante
├── lib/
│   ├── utils.ts             # Utilidades (cn, formatWhatsApp, etc.)
│   └── constants.ts         # Constantes (contacto, servicios, FAQ)
├── public/
│   └── favicon.ico          # Favicon (placeholder)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── components.json          # Configuración Shadcn
└── README.md
```

## 🚀 Instalación y Setup

### Prerrequisitos
- Node.js 18+ y npm 9+
- Git (opcional)

### 1. Instalar dependencias

```bash
npm install
```

### 2. Variables de entorno (opcional)

Copia el archivo `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Edita `.env.local` si necesitas personalizar alguna configuración.

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 4. Build para producción

```bash
npm run build
npm start
```

## 📞 Información de Contacto

Los datos de contacto están centralizados en `lib/constants.ts`:

```typescript
export const CONTACT_INFO = {
  whatsapp1: '+57 321 948 5783',
  whatsapp2: '+57 314 287 0120',
  email: 'amesaludterapias@gmail.com',
  address: 'Bogotá, Colombia',
  schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM\nSábados: 9:00 AM - 2:00 PM',
};
```

Para cambiar esta información, edita este archivo.

## 🎨 Personalización

### Colores
Los colores del tema están en `tailwind.config.ts` y `app/globals.css`:

- **Primary (Turquesa)**: `#14b8a6`
- **Secondary (Verde)**: `#22c55e`
- **Accent**: Variaciones de turquesa y wellness

### Tipografía
La fuente principal es **Inter**, configurada en `app/layout.tsx`. Para cambiarla:

```typescript
import { TuFuente } from 'next/font/google';

const tuFuente = TuFuente({
  subsets: ['latin'],
  variable: '--font-sans',
});
```

### Contenido
El contenido principal está en `lib/constants.ts`:
- Servicios
- Testimonios
- Preguntas frecuentes del chatbot
- Enlaces de navegación

## 🤖 Personalizar el ChatBot

El chatbot está en `components/ChatBot.tsx` y usa el FAQ de `lib/constants.ts`:

```typescript
export const CHATBOT_FAQ = [
  {
    question: '¿Qué servicios ofrecen?',
    answer: 'Ofrecemos masajes terapéuticos...',
    keywords: ['servicios', 'ofrecer', 'tratamiento'],
  },
  // Agregar más preguntas aquí
];
```

Para agregar nuevas respuestas:
1. Añade un nuevo objeto al array `CHATBOT_FAQ`
2. Define `question`, `answer` y `keywords`
3. El bot coincidirá keywords automáticamente

## 📦 Deploy en Vercel

### Opción 1: Desde GitHub

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Configura las variables de entorno si es necesario
5. Deploy automático

### Opción 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Variables de entorno en Vercel

Si usas variables de entorno, agrégalas en:
`Project Settings > Environment Variables`

## 🔍 SEO y Optimización

### Metadata
Cada página tiene metadata optimizada:
- Title, description, keywords
- Open Graph para redes sociales
- Twitter Cards
- Canonical URLs

### Performance
- Imágenes optimizadas con Next.js `<Image />`
- Code splitting automático
- Server Components para mejor performance
- CSS modular con Tailwind

### Lighthouse Score Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🖼️ Imágenes

El proyecto usa placeholders para las imágenes. Para agregar imágenes reales:

1. Coloca tus imágenes en `/public/images/`
2. Usa el componente `Image` de Next.js:

```tsx
import Image from 'next/image';

<Image
  src="/images/tu-imagen.jpg"
  alt="Descripción"
  width={800}
  height={600}
  priority
/>
```

### Imágenes recomendadas:
- Hero: 1920x1080px
- Servicios: 800x800px (cuadradas)
- Testimonios: 400x400px (fotos de perfil)
- Logo: 200x200px (PNG con transparencia)
- OG Image: 1200x630px

## 🧪 Testing

Para agregar tests:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

Crea tests en `__tests__/` o archivos `.test.tsx`

## 📝 Scripts Disponibles

```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run start        # Servidor producción
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

## 🐛 Troubleshooting

### Error: Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de TypeScript
```bash
npm run type-check
```

### Problemas con Tailwind
Verifica que `tailwind.config.ts` incluya todos los paths:
```typescript
content: [
  './app/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
],
```

## 🔐 Seguridad

- ✅ Formularios validados con Zod
- ✅ No hay secrets en el código
- ✅ WhatsApp y email usan URLs oficiales
- ✅ Sin vulnerabilidades conocidas

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/UI](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com)

## 🤝 Contribuir

Para contribuir:
1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-feature`)
3. Commit tus cambios (`git commit -m 'Add nueva feature'`)
4. Push a la rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de **AME Salud Terapias**. Todos los derechos reservados.

## 📧 Soporte

Para soporte o consultas:
- 📱 WhatsApp: +57 321 948 5783
- 📧 Email: amesaludterapias@gmail.com

---

**Hecho con ❤️ para tu bienestar**

*AME Salud Terapias © 2025*
# amesalud-terapias
