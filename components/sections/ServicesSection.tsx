'use client';

import { motion } from 'framer-motion';
import { Droplet, Syringe, Wind, Heart, Activity, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';

/**
 * Icon mapping for medical services
 */
const iconMap: Record<string, React.ElementType> = {
  Droplet,
  Syringe,
  Wind,
  Heart,
  Activity,
};

/**
 * Image mapping for services
 */
const serviceImages: Record<string, string> = {
  'suero-terapia': '/images/services/suero.jpg',
  'inyectologia': '/images/services/inyectologia.jpg',
  'terapia-respiratoria': '/images/services/respiratoria.jpg',
  'rehabilitacion-fisica': '/images/general/general1.jpg',
  'masajes-terapeuticos': '/images/services/masajes1.jpg',
};

/**
 * Premium Services Section - Clinical style with modern cards
 */
export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-white to-orange-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Servicios médicos{' '}
            <span className="text-gradient-primary">profesionales</span>
            <br />a domicilio
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ofrecemos atención médica especializada con personal capacitado y
            protocolos certificados de bioseguridad.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            const serviceImage = serviceImages[service.slug];

            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="block h-full group"
                >
                  <div className="medical-card-hover h-full overflow-hidden">
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={serviceImage}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Icon Floating on Image */}
                      <div className="absolute bottom-4 left-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.shortDescription}
                      </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        <span>Ver detalles</span>
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-4">
            ¿Necesitas más información sobre nuestros servicios?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2"
            asChild
          >
            <Link href="/servicios">
              Ver todos los servicios
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
