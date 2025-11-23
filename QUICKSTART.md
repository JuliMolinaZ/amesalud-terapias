# ⚡ Quick Start - AME Salud

Guía rápida para tener el sitio corriendo en **5 minutos**.

## 🚀 Setup Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:3000
```

## ✅ Eso es todo!

El sitio debería estar corriendo con:
- ✅ Todas las secciones funcionales
- ✅ ChatBot operativo
- ✅ Formularios validados
- ✅ Animaciones suaves
- ✅ Responsive design

## 🎯 Próximos Pasos

### 1. Personalizar Contacto
Edita `lib/constants.ts`:
```typescript
export const CONTACT_INFO = {
  whatsapp1: '+57 321 948 5783',  // Cambiar por tus números
  whatsapp2: '+57 314 287 0120',
  email: 'amesaludterapias@gmail.com',
  // ...
};
```

### 2. Agregar Imágenes
Coloca tus imágenes en `/public/images/`

```typescript
// En cualquier componente:
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
/>
```

### 3. Personalizar Servicios
Edita `lib/constants.ts`:
```typescript
export const SERVICES = [
  {
    id: 'masajes',
    title: 'Masajes Terapéuticos',
    // Editar descripción y features
  },
  // ...
];
```

### 4. Agregar Testimonios
Edita `lib/constants.ts`:
```typescript
export const TESTIMONIALS = [
  {
    name: 'Nuevo Cliente',
    role: 'Cliente',
    content: 'Mi experiencia...',
    // ...
  },
];
```

### 5. Personalizar ChatBot
Edita `lib/constants.ts`:
```typescript
export const CHATBOT_FAQ = [
  {
    question: 'Nueva pregunta',
    answer: 'Nueva respuesta',
    keywords: ['keyword1', 'keyword2'],
  },
];
```

## 🚢 Deploy

### Vercel (Más fácil)
```bash
npm i -g vercel
vercel login
vercel
```

Tu sitio estará en `https://tu-proyecto.vercel.app`

## 📱 Testing Responsive

```bash
# Desktop
http://localhost:3000

# Mobile
http://localhost:3000
# Abre DevTools (F12) > Toggle device toolbar
```

## 🔧 Comandos Útiles

```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run start        # Servidor producción
npm run lint         # Linter
npm run type-check   # Check TypeScript
```

## 🆘 Problemas Comunes

### Error: Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 ocupado
```bash
npm run dev -- -p 3001
```

### Build lento
Es normal en la primera vez. Builds subsecuentes son más rápidos.

## 📚 Docs Completas

Ver `README.md` para documentación completa.

## ✨ Features Destacadas

- 🎨 **Diseño profesional** con glassmorphism
- 🤖 **ChatBot inteligente** con respuestas automáticas
- 📱 **100% responsive** mobile-first
- ⚡ **Súper rápido** con Next.js 15
- 🎭 **Animaciones suaves** con Framer Motion
- 📝 **Formularios validados** con React Hook Form + Zod
- 🔍 **SEO optimizado** con metadata completa
- 📞 **Integración directa** con WhatsApp y Email

---

**¡A trabajar!** 💪

Para más ayuda: `README.md` o `DEPLOYMENT.md`
