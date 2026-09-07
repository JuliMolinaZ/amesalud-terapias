import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Exportación estática para alojamiento gratuito en Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    // Configuración más segura: solo permitir imágenes locales por defecto
    // Si necesitas imágenes remotas, especifica dominios específicos
    // Restricción de seguridad: solo permitir imágenes locales por defecto
    // Si necesitas imágenes remotas, especifica dominios específicos aquí
    // Ejemplo: { protocol: 'https', hostname: 'ejemplo.com' }
    remotePatterns: [
      // Agregar dominios específicos aquí si es necesario
      // Por ahora, solo imágenes locales están permitidas
    ],
    // Deshabilitar optimización de imágenes remotas no confiables en producción
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
