import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'amesalud',
    short_name: 'amesalud',
    description:
      'Centro profesional de terapias holísticas en Bogotá. Masajes terapéuticos, atención psicológica, terapias alternativas y técnicas de bienestar.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#dc2626',
    icons: [
      {
        src: '/logo.png',
        sizes: '800x800',
        type: 'image/png',
      },
    ],
  };
}
