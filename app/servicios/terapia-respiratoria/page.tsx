'use client';

import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate';
import { SERVICES } from '@/lib/constants';
import { Wind } from 'lucide-react';

/**
 * Terapia Respiratoria - Individual service page
 */
export default function TerapiaRespiratoriaPage() {
  const service = SERVICES.find((s) => s.slug === 'terapia-respiratoria')!;

  return (
    <ServiceDetailTemplate
      service={{
        title: service.title,
        description: service.description,
        icon: Wind,
        color: service.color,
        features: [...service.features],
        benefits: [...service.benefits],
        indications: [...service.indications],
        slug: service.slug,
      }}
    />
  );
}
