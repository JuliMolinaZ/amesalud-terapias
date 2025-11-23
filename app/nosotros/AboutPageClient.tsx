'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Award, Target, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CONTACT_INFO } from '@/lib/constants';
import { formatWhatsAppLink } from '@/lib/utils';
import Image from 'next/image';

/**
 * About page - Team, values, mission, and vision
 */
export default function AboutPageClient() {
  const values = [
    {
      icon: Heart,
      title: 'Empatía',
      description:
        'Nos conectamos genuinamente con cada paciente, comprendiendo sus necesidades únicas y creando un espacio de confianza y comprensión.',
    },
    {
      icon: Award,
      title: 'Profesionalismo',
      description:
        'Nuestro equipo está compuesto por terapeutas certificados con amplia experiencia y formación continua en sus especialidades.',
    },
    {
      icon: Users,
      title: 'Calidez Humana',
      description:
        'Más allá de los tratamientos, ofrecemos un ambiente cálido y acogedor donde te sientas como en casa.',
    },
    {
      icon: Target,
      title: 'Resultados',
      description:
        'Nos enfocamos en lograr mejoras tangibles y duraderas en tu bienestar físico, mental y emocional.',
    },
  ];

  const benefits = [
    'Terapeutas certificados con años de experiencia',
    'Tratamientos personalizados según tus necesidades',
    'Ambiente tranquilo y acogedor',
    'Seguimiento continuo de tu progreso',
    'Técnicas modernas y tradicionales',
    'Atención flexible y horarios convenientes',
  ];

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
              Sobre Nosotros
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Transformando vidas a través del{' '}
              <span className="text-gradient-primary">cuidado integral</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En amesalud creemos que el verdadero bienestar nace de la
              armonía entre cuerpo, mente y espíritu. Nuestra misión es
              acompañarte en tu camino hacia una vida más plena y saludable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nuestra <span className="text-gradient-primary">Historia</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                amesalud nació del sueño de crear un espacio donde las
                personas pudieran encontrar sanación integral. Con más de 10
                años de experiencia, hemos acompañado a cientos de pacientes en
                su proceso de transformación personal.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro equipo multidisciplinario combina lo mejor de las
                terapias tradicionales con técnicas modernas, ofreciendo un
                enfoque holístico que aborda no solo los síntomas, sino las
                causas profundas del malestar.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada miembro de nuestro equipo está comprometido con la
                excelencia, la ética profesional y, sobre todo, con el bienestar
                de nuestros pacientes. Creemos en el poder transformador de la
                terapia y en la capacidad inherente de cada persona para sanar
                y crecer.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              className="glass rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-square">
                <Image
                  src="/images/general/general2.jpg"
                  alt="Equipo profesional de amesalud"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Nuestros <span className="text-gradient-primary">Valores</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Estos principios guían cada una de nuestras acciones y
              decisiones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass border-2 border-white/50 hover:border-primary/50 transition-all shadow-lg hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg flex-shrink-0">
                        <value.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                ¿Por qué elegir{' '}
                <span className="text-gradient-primary">amesalud</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estos son solo algunos de los beneficios de trabajar con
                nosotros.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg glass border border-white/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
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
              ¿Listo para conocernos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Agenda tu primera cita y descubre cómo podemos ayudarte a
              alcanzar tus objetivos de bienestar.
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
                  Agendar Cita
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/servicios">Ver Servicios</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

