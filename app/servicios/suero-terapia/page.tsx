'use client';

import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate';
import { SERVICES } from '@/lib/constants';
import { Droplet } from 'lucide-react';

/**
 * Suero Terapia - Individual service page
 */
export default function SueroTerapiaPage() {
  const service = SERVICES.find((s) => s.slug === 'suero-terapia')!;

  return (
    <ServiceDetailTemplate
      service={{
        title: service.title,
        description: service.description,
        icon: Droplet,
        color: service.color,
        features: [...service.features],
        benefits: [...service.benefits],
        indications: [...service.indications],
        slug: service.slug,
      }}
    />
  );
}
