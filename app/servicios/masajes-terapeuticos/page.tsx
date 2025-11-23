'use client';

import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate';
import { SERVICES } from '@/lib/constants';
import { Heart } from 'lucide-react';

/**
 * Masajes Terapéuticos - Individual service page
 */
export default function MasajesTerapeuticosPage() {
  const service = SERVICES.find((s) => s.slug === 'masajes-terapeuticos')!;

  return (
    <ServiceDetailTemplate
      service={{
        title: service.title,
        description: service.description,
        icon: Heart,
        color: service.color,
        features: [...service.features],
        benefits: [...service.benefits],
        indications: [...service.indications],
        slug: service.slug,
      }}
    />
  );
}
