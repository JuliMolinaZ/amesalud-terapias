'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Award, Target, Sparkles } from 'lucide-react';

/**
 * About section showcasing company values and mission
 */
export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: 'Empatía',
      description:
        'Nos conectamos genuinamente con cada paciente, comprendiendo sus necesidades únicas.',
    },
    {
      icon: Award,
      title: 'Profesionalismo',
      description:
        'Contamos con terapeutas certificados y especializados en cada área de tratamiento.',
    },
    {
      icon: Users,
      title: 'Calidez Humana',
      description:
        'Creamos un ambiente acogedor donde te sientas seguro y acompañado en tu proceso.',
    },
    {
      icon: Target,
      title: 'Resultados',
      description:
        'Nos enfocamos en lograr mejoras reales y duraderas en tu bienestar integral.',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Transformando vidas a través del{' '}
              <span className="text-gradient">cuidado integral</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En <strong>amesalud</strong>, creemos que el verdadero bienestar
              nace de la armonía entre cuerpo, mente y espíritu. Desde nuestros
              inicios, hemos dedicado cada esfuerzo a ofrecer terapias de la
              más alta calidad, respaldadas por profesionales apasionados y
              comprometidos con tu salud.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro equipo multidisciplinario combina técnicas tradicionales
              y modernas para crear planes de tratamiento personalizados que se
              adaptan a tus necesidades específicas. Cada sesión es una
              oportunidad para sanar, crecer y redescubrir tu mejor versión.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg glass hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center">
                      <value.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center p-8">
                  <motion.div
                    className="text-center space-y-6"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center shadow-2xl">
                      <Sparkles className="h-16 w-16 text-white" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-gradient">
                        10+ Años
                      </p>
                      <p className="text-sm text-muted-foreground">
                        de experiencia transformando vidas
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-3xl font-bold text-gradient">500+</p>
                <p className="text-xs text-muted-foreground">
                  Pacientes felices
                </p>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="text-3xl font-bold text-gradient">98%</p>
                <p className="text-xs text-muted-foreground">Satisfacción</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
