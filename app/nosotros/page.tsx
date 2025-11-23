import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'Nosotros - amesalud',
  description:
    'Conoce a amesalud: nuestro equipo profesional, valores, misión y compromiso con tu bienestar integral.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
