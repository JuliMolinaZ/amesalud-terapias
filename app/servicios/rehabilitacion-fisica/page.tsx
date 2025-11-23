'use client';

import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate';
import { SERVICES } from '@/lib/constants';
import { Activity } from 'lucide-react';

/**
 * Rehabilitación Física - Individual service page
 */
export default function RehabilitacionFisicaPage() {
  const service = SERVICES.find((s) => s.slug === 'rehabilitacion-fisica')!;

  return (
    <ServiceDetailTemplate
      service={{
        title: service.title,
        description: service.description,
        icon: Activity,
        color: service.color,
        features: [...service.features],
        benefits: [...service.benefits],
        indications: [...service.indications],
        slug: service.slug,
      }}
    />
  );
}
