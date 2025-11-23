'use client';

import { motion } from 'framer-motion';
import { UserCheck, Award, Home, Shield, Stethoscope } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/constants';

/**
 * Icon mapping for reasons
 */
const iconMap: Record<string, React.ElementType> = {
  UserCheck,
  Award,
  Home,
  Shield,
  Stethoscope,
};

/**
 * Why Choose Us Section - Professional and trustworthy
 */
export function WhyChooseUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4 border border-secondary/20">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Compromiso con tu{' '}
            <span className="text-gradient-secondary">bienestar</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nos diferenciamos por nuestra calidad profesional, atención
            personalizada y cumplimiento estricto de protocolos de salud.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {WHY_CHOOSE_US.map((reason, index) => {
            const Icon = iconMap[reason.icon];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Card */}
                <div className="medical-card p-8 h-full relative overflow-hidden">
                  {/* Subtle gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: 'Profesional', label: 'Atención Certificada' },
            { value: '24/7', label: 'Disponibilidad' },
            { value: '100%', label: 'Bioseguridad' },
            { value: 'Bogotá', label: 'Cobertura' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-gray-100"
            >
              <p className="text-3xl font-bold text-gradient-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
