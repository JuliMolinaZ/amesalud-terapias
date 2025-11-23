'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Phone, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CONTACT_INFO, SERVICES } from '@/lib/constants';
import { formatWhatsAppLink, formatEmailLink } from '@/lib/utils';

/**
 * Contact form validation schema
 */
const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Correo electrónico inválido'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Por favor selecciona un servicio'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Contact section with form and contact methods
 */
export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form data:', data);

    // In production, you would send this to an API endpoint
    // For now, we'll show a success message
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);

    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: CONTACT_INFO.whatsapp1,
      href: formatWhatsAppLink(
        CONTACT_INFO.whatsapp1,
        'Hola! Me gustaría obtener más información'
      ),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      description: CONTACT_INFO.whatsapp2,
      href: `tel:${CONTACT_INFO.whatsapp2}`,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Mail,
      title: 'Correo',
      description: CONTACT_INFO.email,
      href: formatEmailLink(CONTACT_INFO.email, 'Consulta desde la web'),
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ¿Listo para{' '}
            <span className="text-gradient-primary">cuidar tu salud</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Elige tu método preferido de contacto o
            envíanos un mensaje directamente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Canales de contacto</h3>
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    method.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <Card className="glass border-2 hover:border-primary/50 transition-all cursor-pointer">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <method.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground mb-1">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground truncate">
                          {method.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">Horarios de atención</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground whitespace-pre-line">
                {CONTACT_INFO.schedule}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass border-2">
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y te responderemos lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-8 space-y-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-center">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Gracias por contactarnos. Te responderemos pronto.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        {...register('name')}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        {...register('email')}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono (opcional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+57 123 456 7890"
                        {...register('phone')}
                      />
                    </div>

                    {/* Service Selector */}
                    <div className="space-y-2">
                      <Label htmlFor="service">Servicio de interés *</Label>
                      <Controller
                        name="service"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger
                              className={errors.service ? 'border-red-500' : ''}
                            >
                              <SelectValue placeholder="Selecciona un servicio" />
                            </SelectTrigger>
                            <SelectContent>
                              {SERVICES.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.service && (
                        <p className="text-sm text-red-500">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        rows={5}
                        {...register('message')}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="default"
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
