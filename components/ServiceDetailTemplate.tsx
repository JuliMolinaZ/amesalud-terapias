'use client';

import { motion } from 'framer-motion';
import { Check, Calendar, MessageCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CONTACT_INFO } from '@/lib/constants';
import { formatWhatsAppLink } from '@/lib/utils';

interface ServiceDetail {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: string[];
  benefits: string[];
  indications: string[];
  slug?: string;
}

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
}

/**
 * Map service slugs to their corresponding images
 */
const serviceImages: Record<string, string> = {
  'suero-terapia': '/images/services/suero.jpg',
  'inyectologia': '/images/services/inyectologia.jpg',
  'terapia-respiratoria': '/images/services/respiratoria.jpg',
  'rehabilitacion-fisica': '/images/general/general1.jpg', // No specific image, use general
  'masajes-terapeuticos': '/images/services/masajes1.jpg',
};

/**
 * Reusable template for individual service pages
 */
export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const Icon = service.icon;
  const heroImage = service.slug ? serviceImages[service.slug] : null;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Link */}
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a servicios
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Icon */}
                <div
                  className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl`}
                >
                  <Icon className="h-12 w-12 text-white" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {service.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href={formatWhatsAppLink(
                        CONTACT_INFO.whatsapp1Clean,
                        `Hola, me interesa el servicio de ${service.title}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Contactar por WhatsApp
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#agendar">
                      <Calendar className="h-5 w-5 mr-2" />
                      Agendar Cita
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Right Column - Image */}
              {heroImage && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="glass rounded-3xl overflow-hidden shadow-premium border-2 border-white">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={heroImage}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 shadow-premium border border-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Profesional</p>
                        <p className="text-xs text-muted-foreground">Certificado</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Features */}
            <Card className="medical-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                ¿Qué Incluye?
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Benefits */}
            <Card className="medical-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Beneficios
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Indications */}
            <Card className="medical-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Indicado Para
              </h2>
              <ul className="space-y-3">
                {service.indications.map((indication, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">{indication}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="agendar"
        className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para agendar tu cita?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contáctanos por WhatsApp o teléfono para programar tu sesión de{' '}
              {service.title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild>
                <a
                  href={formatWhatsAppLink(
                    CONTACT_INFO.whatsapp1Clean,
                    `Hola, quiero agendar ${service.title}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {CONTACT_INFO.whatsapp1}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
