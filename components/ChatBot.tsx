'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  X,
  Bot,
  User,
  Send,
  Droplet,
  Syringe,
  Wind,
  Heart,
  Calendar,
  RotateCcw,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CHATBOT_FAQ, CONTACT_INFO } from '@/lib/constants';
import { formatWhatsAppLink } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

/**
 * Enhanced ChatBot widget with quick action buttons
 */
export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          '¡Hola! 👋 Soy el asistente de amesalud.\n\n¿En qué servicio estás interesado? Selecciona una opción o escríbeme tu consulta:'
        );
      }, 500);
    }
  }, [isOpen, messages.length]);

  const addBotMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'bot',
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const findResponse = (userInput: string): string => {
    const normalizedInput = userInput
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Remove accents for better matching

    // Find FAQ entry that matches keywords (with priority scoring)
    let bestMatch: { id: string; question: string; answer: string; keywords: readonly string[] } | null = null;
    let maxScore = 0;

    for (const faq of CHATBOT_FAQ) {
      const score = faq.keywords.reduce((acc, keyword) => {
        const keywordNormalized = keyword
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
        if (normalizedInput.includes(keywordNormalized)) {
          // Give higher score for exact matches or longer keywords
          return acc + (normalizedInput === keywordNormalized ? 10 : keywordNormalized.length);
        }
        return acc;
      }, 0);

      if (score > maxScore) {
        maxScore = score;
        bestMatch = faq as { id: string; question: string; answer: string; keywords: readonly string[] };
      }
    }

    if (bestMatch && maxScore > 0) {
      return bestMatch.answer;
    }

    // Greetings and salutations
    if (
      /^(hola|hi|hello|buenos|buenas|hey|saludos|buen dia|buen día|buenas tardes|buenas noches)/i.test(
        normalizedInput
      )
    ) {
      return '¡Hola! 👋 Soy el asistente de amesalud.\n\n¿En qué puedo ayudarte hoy? Puedo darte información sobre nuestros servicios médicos a domicilio:\n\n• Suero Terapia\n• Inyectología\n• Terapia Respiratoria\n• Rehabilitación Física\n• Masajes Terapéuticos\n\nSelecciona una opción o escríbeme tu consulta.';
    }

    // Thanks and gratitude
    if (/gracias|thanks|thank|agradecido|agradecida/i.test(normalizedInput)) {
      return '¡De nada! 😊 Estoy aquí para ayudarte. ¿Hay algo más que quieras saber sobre nuestros servicios? Si necesitas agendar una cita, puedes contactarnos por WhatsApp al +57 321 948 5783.';
    }

    // Goodbyes and farewells
    if (
      /(adios|adiós|chao|bye|hasta luego|nos vemos|hasta pronto|me voy)/i.test(
        normalizedInput
      )
    ) {
      return '¡Hasta luego! 👋 Fue un placer ayudarte. Si tienes más preguntas, no dudes en escribirme. Para agendar una cita, contáctanos por WhatsApp al +57 321 948 5783. ¡Que tengas un excelente día!';
    }

    // Questions about what services are offered
    if (
      /(que servicios|qué servicios|que ofrecen|qué ofrecen|servicios disponibles|que tienen|qué tienen|que hacen|qué hacen)/i.test(
        normalizedInput
      )
    ) {
      return '🏥 **Nuestros Servicios:**\n\n✅ **Suero Terapia** - Hidratación intravenosa con vitaminas\n✅ **Inyectología** - Aplicación de medicamentos inyectables\n✅ **Terapia Respiratoria** - Para bronquitis, EPOC, neumonía, etc.\n✅ **Rehabilitación Física** - Fisioterapia personalizada\n✅ **Masajes Terapéuticos** - Para dolor muscular y contracturas\n\nTodos nuestros servicios están disponibles a domicilio en Bogotá. ¿Cuál te interesa?';
    }

    // Questions about who they are / company info
    if (
      /(quienes son|quiénes son|que es|qué es|quien es|quién es|empresa|compania|compañía)/i.test(
        normalizedInput
      )
    ) {
      return '🏥 **amesalud** es una empresa especializada en servicios de salud a domicilio en Bogotá.\n\n✅ 7+ años de experiencia\n✅ 1,700+ clientes satisfechos\n✅ Profesionales capacitados y certificados\n✅ Protocolos de bioseguridad certificados\n✅ Servicio a domicilio disponible\n\nEstamos comprometidos con brindar atención médica de calidad en la comodidad de tu hogar. ¿En qué servicio estás interesado?';
    }

    // Questions about availability / if they're available
    if (
      /(disponible|disponibilidad|pueden|puedo|se puede|atienden|atencion|atención)/i.test(
        normalizedInput
      ) &&
      !normalizedInput.includes('domicilio')
    ) {
      return '✅ Sí, estamos disponibles para ayudarte.\n\n**Horarios:**\n• Lunes a Viernes: 8:00 AM - 6:00 PM\n• Sábados: 9:00 AM - 2:00 PM\n\nPara urgencias, contáctanos por WhatsApp. Todos nuestros servicios están disponibles a domicilio en Bogotá.\n\n¿Qué servicio necesitas?';
    }

    // Questions about payment methods
    if (/(pago|pagos|efectivo|tarjeta|transferencia|como pagar|cómo pagar|metodo de pago|método de pago)/i.test(normalizedInput)) {
      return '💳 **Métodos de Pago:**\n\nAceptamos:\n✅ Efectivo\n✅ Transferencias bancarias\n\nPara información sobre seguros médicos o convenios, contáctanos directamente.\n\n📱 WhatsApp: +57 321 948 5783\n📧 Email: amesaludterapias@gmail.com\n\n¿Necesitas información sobre precios de algún servicio específico?';
    }

    // Questions that seem to be asking for help but don't match specific keywords
    if (
      /(ayuda|help|necesito|quiero|deseo|busco|informacion|información|saber|pregunta)/i.test(
        normalizedInput
      )
    ) {
      return `Gracias por tu consulta. 😊\n\nPuedo ayudarte con información sobre nuestros servicios:\n\n• Suero Terapia\n• Inyectología\n• Terapia Respiratoria\n• Rehabilitación Física\n• Masajes Terapéuticos\n\nTambién puedo ayudarte con:\n• Cómo agendar una cita\n• Horarios de atención\n• Servicio a domicilio\n• Protocolos de bioseguridad\n\n¿Sobre qué te gustaría saber más? O si prefieres, puedes contactarnos directamente:\n\n📱 WhatsApp: ${CONTACT_INFO.whatsapp1}\n📧 Email: ${CONTACT_INFO.email}`;
    }

    // Default response - friendly and helpful
    return `Gracias por tu mensaje. 😊\n\nPara darte la mejor atención y responder todas tus preguntas, te recomiendo contactarnos directamente:\n\n📱 **WhatsApp:**\n• ${CONTACT_INFO.whatsapp1}\n• ${CONTACT_INFO.whatsapp2}\n\n📧 **Email:**\n${CONTACT_INFO.email}\n\nNuestro equipo estará encantado de ayudarte con información detallada sobre nuestros servicios, precios, disponibilidad y cualquier otra consulta.\n\nTambién puedes preguntarme sobre nuestros servicios usando los botones de arriba o escribiendo palabras clave como "suero terapia", "inyectología", "masajes", etc.`;
  };

  const handleQuickAction = async (faqId: string) => {
    setShowQuickActions(false);

    const faq = CHATBOT_FAQ.find((f) => f.id === faqId);
    if (!faq) return;

    addUserMessage(faq.question);
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    addBotMessage(faq.answer);
    setIsTyping(false);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setShowQuickActions(false);
    addUserMessage(userMessage);
    setInputValue('');
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const response = findResponse(userMessage);
    addBotMessage(response);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setShowQuickActions(true);
    setTimeout(() => {
      addBotMessage(
        '¡Hola! 👋 Soy el asistente de amesalud.\n\n¿En qué servicio estás interesado? Selecciona una opción o escríbeme tu consulta:'
      );
    }, 300);
  };

  const quickActions = [
    {
      id: 'suero-terapia',
      label: 'Suero Terapia',
      icon: Droplet,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 'inyectologia',
      label: 'Inyectología',
      icon: Syringe,
      color: 'from-teal-500 to-emerald-500',
    },
    {
      id: 'terapia-respiratoria',
      label: 'Terapia Respiratoria',
      icon: Wind,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 'rehabilitacion-fisica',
      label: 'Rehabilitación Física',
      icon: Heart,
      color: 'from-emerald-500 to-green-500',
    },
    {
      id: 'masajes',
      label: 'Masajes Terapéuticos',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'agendar',
      label: '¿Cómo agendar?',
      icon: Calendar,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring' }}
          >
            <Button
              size="icon"
              className="h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 p-0 overflow-hidden"
              onClick={() => setIsOpen(true)}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/ia-doctora.png"
                  alt="Asistente IA amesalud"
                  fill
                  className="object-cover rounded-full"
                  sizes="64px"
                />
              </motion.div>
            </Button>

            {/* Notification Badge */}
            <motion.div
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xs text-white font-bold">!</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="shadow-2xl border-2">
              {/* Header */}
              <CardHeader className="bg-gradient-to-r from-primary to-secondary p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base">
                        Asistente amesalud
                      </h3>
                      <p className="text-xs text-white/80">
                        Respuestas inmediatas
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-white hover:bg-white/20"
                      onClick={resetChat}
                      title="Nueva conversación"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-white hover:bg-white/20"
                      onClick={() => setIsOpen(false)}
                      title="Cerrar"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="p-4 h-[450px] overflow-y-auto bg-slate-50">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex gap-2 ${
                          message.role === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        {message.role === 'bot' && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            message.role === 'user'
                              ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-md'
                              : 'bg-white border border-gray-200 text-foreground shadow-sm'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line leading-relaxed">
                            {message.content}
                          </p>
                        </div>
                        {message.role === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                            <User className="h-4 w-4 text-muted-foreground" />
                          </div>
                        )}
                      </motion.div>
                      {/* WhatsApp Button after bot messages */}
                      {message.role === 'bot' && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="flex justify-start pl-10"
                        >
                          <a
                            href={formatWhatsAppLink(
                              CONTACT_INFO.whatsapp1Clean,
                              'Hola! Me gustaría obtener más información sobre sus servicios'
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            <span>Contactar por WhatsApp</span>
                          </a>
                        </motion.div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-primary rounded-full"
                              animate={{ y: [0, -8, 0] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                {showQuickActions && messages.length === 1 && !isTyping && (
                  <motion.div
                    className="mt-6 space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {quickActions.map((action) => (
                      <motion.button
                        key={action.id}
                        className="w-full text-left px-4 py-3 rounded-xl bg-white border-2 border-gray-200 hover:border-primary/50 transition-all text-sm flex items-center gap-3 group shadow-sm hover:shadow-md"
                        onClick={() => handleQuickAction(action.id)}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <action.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium text-foreground">
                          {action.label}
                        </span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </CardContent>

              {/* Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex gap-2">
                  <Input
                    placeholder="Escribe tu consulta..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 border-2 focus:border-primary"
                  />
                  <Button
                    size="icon"
                    className="bg-primary hover:bg-primary/90 flex-shrink-0"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Atención personalizada:{' '}
                  <a
                    href={formatWhatsAppLink(CONTACT_INFO.whatsapp1Clean)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
