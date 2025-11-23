'use client';

import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate';
import { SERVICES } from '@/lib/constants';
import { Syringe } from 'lucide-react';

/**
 * Inyectología - Individual service page
 */
export default function InyectologiaPage() {
  const service = SERVICES.find((s) => s.slug === 'inyectologia')!;

  return (
    <ServiceDetailTemplate
      service={{
        title: service.title,
        description: service.description,
        icon: Syringe,
        color: service.color,
        features: [...service.features],
        benefits: [...service.benefits],
        indications: [...service.indications],
        slug: service.slug,
      }}
    />
  );
}
