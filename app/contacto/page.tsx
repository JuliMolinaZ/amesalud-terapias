import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contacto - amesalud',
  description:
    'Contáctanos por WhatsApp, teléfono o correo. Agenda tu cita o resuelve tus dudas. Estamos aquí para ayudarte.',
};

/**
 * Contact page - Dedicated contact page
 */
export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Estamos aquí para{' '}
              <span className="text-gradient">ayudarte</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Contáctanos por tu canal preferido. Responderemos todas tus
              consultas lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
