'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TESTIMONIALS } from '@/lib/constants';

/**
 * Map testimonial IDs to their images
 */
const testimonialImages: Record<number, string> = {
  1: '/images/testimonials/testimonio-mujer-1.jpg',
  2: '/images/testimonials/testimonio-2-hombre.jpg',
  3: '/images/testimonials/testimonio-3-hombre.jpg',
};

/**
 * Testimonials section with animated carousel
 */
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return TESTIMONIALS.length - 1;
      if (nextIndex >= TESTIMONIALS.length) return 0;
      return nextIndex;
    });
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section
      id="testimonios"
      className="py-20 bg-gradient-to-b from-accent/10 to-background"
    >
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
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Lo que dicen nuestros{' '}
            <span className="text-gradient-primary">pacientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros pacientes es nuestro mayor logro.
            Conoce sus experiencias con nuestros servicios médicos.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <Card className="glass border-2">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Quote Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <Quote className="h-8 w-8 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl">
                      "{TESTIMONIALS[currentIndex].content}"
                    </p>

                    {/* Author */}
                    <div className="space-y-4">
                      <div className="relative w-24 h-24 mx-auto">
                        {/* Outer glow effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />
                        {/* Image container with enhanced styling */}
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-primary/10">
                          <Image
                            src={testimonialImages[TESTIMONIALS[currentIndex].id]}
                            alt={TESTIMONIALS[currentIndex].name}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-foreground">
                          {TESTIMONIALS[currentIndex].name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {TESTIMONIALS[currentIndex].service}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Spacer for absolute positioning */}
          <div className="h-[500px] md:h-[450px]"></div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full glass shadow-lg pointer-events-auto"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full glass shadow-lg pointer-events-auto"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
