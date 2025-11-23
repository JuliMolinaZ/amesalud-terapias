'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants';
import { formatWhatsAppLink } from '@/lib/utils';

/**
 * Header component with responsive navigation and CTA
 * Features: sticky header, mobile menu, glassmorphism effect
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll for header background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="amesalud Logo"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gradient-primary">
                  amesalud
                </h1>
                <p className="text-xs text-muted-foreground">Servicios Médicos</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="gap-2"
            >
              <a href={`tel:${CONTACT_INFO.whatsapp1}`}>
                <Phone className="h-4 w-4" />
                Llamar
              </a>
            </Button>
            <Button
              variant="default"
              size="sm"
              asChild
              className="gap-2"
            >
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden glass border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  asChild
                >
                  <a href={`tel:${CONTACT_INFO.whatsapp1}`}>
                    <Phone className="h-4 w-4" />
                    Llamar
                  </a>
                </Button>
                <Button
                  variant="default"
                  className="w-full gap-2"
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
                    Agendar Cita
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
