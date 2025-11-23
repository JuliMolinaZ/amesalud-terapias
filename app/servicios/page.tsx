import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Servicios - amesalud',
  description:
    'Descubre nuestra amplia gama de servicios: masajes terapéuticos, terapias alternativas, atención psicológica y técnicas de bienestar personalizadas.',
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
