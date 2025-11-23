'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Shield, Award, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/lib/constants';
import { formatWhatsAppLink } from '@/lib/utils';
import Image from 'next/image';

/**
 * Premium Hero Section - Full height with 2-column layout
 * Left: Strong copy + CTAs | Right: Professional medical imagery
 */
export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-red-50 via-orange-50/30 to-amber-50/20 pt-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />

      {/* Floating shapes - subtle */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
                <Shield className="h-4 w-4" />
                Servicios de Salud Profesionales
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Atención médica{' '}
                <span className="text-gradient-primary">profesional</span>
                <br />
                en la comodidad de tu hogar
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Suero terapia, inyectología, terapia respiratoria y masajes
              terapéuticos con personal capacitado y protocolos certificados de
              bioseguridad.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              {[
                'Atención a domicilio',
                'Personal certificado',
                'Protocolos de bioseguridad',
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm"
                >
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all text-base h-14 px-8"
                asChild
              >
                <a
                  href={formatWhatsAppLink(
                    CONTACT_INFO.whatsapp1Clean,
                    'Hola, me gustaría agendar un servicio de amesalud'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Agendar por WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-2 hover:bg-accent"
                asChild
              >
                <a href="#servicios">
                  Ver Servicios
                </a>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <p className="font-semibold text-foreground">
                    Profesionales
                  </p>
                  <p className="text-muted-foreground">Certificados</p>
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Bioseguridad</p>
                  <p className="text-muted-foreground">Garantizada</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-12 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl -rotate-12 blur-2xl" />

              {/* Image Grid */}
              <div className="relative grid grid-cols-2 gap-4">
                {/* Large Image - Top */}
                <motion.div
                  className="col-span-2 glass rounded-3xl overflow-hidden shadow-premium border-2 border-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="relative aspect-video">
                    <Image
                      src="/images/general/general1.jpg"
                      alt="Servicios médicos profesionales amesalud"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Small Image - Bottom Left */}
                <motion.div
                  className="glass rounded-2xl overflow-hidden shadow-premium border-2 border-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src="/images/general/general2.jpg"
                      alt="Atención médica a domicilio"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </motion.div>

                {/* Small Image - Bottom Right */}
                <motion.div
                  className="glass rounded-2xl overflow-hidden shadow-premium border-2 border-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src="/images/general/general3.jpg"
                      alt="Personal médico certificado"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-premium border border-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">24/7</p>
                    <p className="text-xs text-muted-foreground">
                      Disponibilidad
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-premium border border-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">100%</p>
                    <p className="text-xs text-muted-foreground">Seguro</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
