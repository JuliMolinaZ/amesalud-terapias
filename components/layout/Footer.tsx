'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Heart } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '@/lib/constants';
import { formatWhatsAppLink, formatEmailLink } from '@/lib/utils';

/**
 * Footer component with contact info, links, and social media
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-accent/20 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">AS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gradient">amesalud</h3>
                <p className="text-xs text-muted-foreground">Terapias</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Tu bienestar es nuestra prioridad. Ofrecemos terapias integrales
              para el cuidado de tu salud física, mental y emocional.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base font-semibold">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={formatWhatsAppLink(CONTACT_INFO.whatsapp1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  {CONTACT_INFO.whatsapp1}
                </a>
              </li>
              <li>
                <a
                  href={formatEmailLink(CONTACT_INFO.email)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </motion.div>

          {/* Schedule */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-base font-semibold">Horarios</h4>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <div className="whitespace-pre-line">{CONTACT_INFO.schedule}</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {currentYear} amesalud. Todos los derechos reservados.
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Hecho con <Heart className="h-4 w-4 text-red-500 fill-red-500" /> para tu bienestar
              </p>
            </div>
            <div className="flex justify-center pt-2">
              <p className="text-xs text-muted-foreground/70 text-center">
                Página creada por{' '}
                <a
                  href="https://julianmolinaz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors underline decoration-dotted underline-offset-2"
                >
                  julianmolinaz.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
