'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, Brain, Leaf, Calendar, CheckCircle2, Droplet, Syringe, Wind, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES, CONTACT_INFO } from '@/lib/constants';
import { formatWhatsAppLink } from '@/lib/utils';
import Image from 'next/image';

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Sparkles,
  Brain,
  Leaf,
  Droplet,
  Syringe,
  Wind,
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
 * Services page - Detailed view of all services
 */
export default function ServicesPageClient() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-50 via-orange-50/30 to-amber-50/20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Nuestros Servicios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Terapias profesionales para tu{' '}
              <span className="text-gradient-primary">bienestar integral</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cada servicio está diseñado con el más alto estándar de calidad
              y personalización, enfocándonos en tus necesidades únicas.
            </p>
            <Button
              variant="wellness"
              size="lg"
              className="gap-2"
              asChild
            >
              <a
                href={formatWhatsAppLink(
                  CONTACT_INFO.whatsapp1,
                  'Hola! Me gustaría agendar una cita'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-5 w-5" />
                Agendar Cita
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    className={isEven ? '' : 'lg:order-2'}
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Card className="glass border-2 border-white/50 shadow-xl">
                      <CardHeader>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-3xl">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mb-4">
                          ¿Qué incluye este servicio?
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="wellness"
                          className="w-full mt-6 gap-2"
                          asChild
                        >
                          <a
                            href={formatWhatsAppLink(
                              CONTACT_INFO.whatsapp1,
                              `Hola! Me interesa el servicio de ${service.title}`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Calendar className="h-4 w-4" />
                            Agendar {service.title}
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    className={isEven ? '' : 'lg:order-1'}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="glass rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50">
                      <div className="relative aspect-square">
                        <Image
                          src={serviceImages[service.slug] || '/images/general/general1.jpg'}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Gradient overlay for better text readability if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-50 via-orange-50/30 to-amber-50/20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center glass rounded-3xl p-8 md:p-12 border-2 border-white/50 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              ¿Listo para comenzar tu{' '}
              <span className="text-gradient-primary">transformación</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Agenda tu cita hoy y da el primer paso hacia una vida más
              equilibrada y saludable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="wellness" size="lg" asChild>
                <a
                  href={formatWhatsAppLink(
                    CONTACT_INFO.whatsapp1,
                    'Hola! Me gustaría agendar una cita'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Cita
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contacto">Más información</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

