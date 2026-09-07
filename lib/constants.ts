/**
 * Contact information for amesalud
 */
export const CONTACT_INFO = {
  whatsapp1: '+57 310 337 3913',
  whatsapp1Clean: '573103373913',
  email: 'amesaludterapias@gmail.com',
  address: 'Bogotá, Colombia',
  schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM\nSábados: 9:00 AM - 2:00 PM',
} as const;

/**
 * Navigation links
 */
export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
] as const;

/**
 * Medical services offered - Complete list
 */
export const SERVICES = [
  {
    id: 'suero-terapia',
    slug: 'suero-terapia',
    title: 'Suero Terapia',
    shortDescription:
      'Hidratación intravenosa y suplementación vitamínica administrada por personal capacitado.',
    description:
      'Terapia de hidratación intravenosa con sueros vitamínicos personalizados. Ideal para rehidratación, recuperación post-ejercicio, apoyo inmunológico y bienestar general.',
    icon: 'Droplet',
    color: 'from-red-500 to-red-600',
    features: [
      'Rehidratación intravenosa efectiva',
      'Sueros vitamínicos personalizados',
      'Administración por personal capacitado',
      'Atención a domicilio o en consultorio',
      'Protocolos de bioseguridad certificados',
    ],
    benefits: [
      'Hidratación rápida y efectiva',
      'Absorción directa de nutrientes',
      'Recuperación acelerada',
      'Fortalecimiento del sistema inmune',
    ],
    indications: [
      'Deshidratación',
      'Recuperación post-ejercicio',
      'Fatiga y agotamiento',
      'Apoyo nutricional',
    ],
  },
  {
    id: 'inyectologia',
    slug: 'inyectologia',
    title: 'Inyectología',
    shortDescription:
      'Aplicación segura de medicamentos inyectables formulados por su médico tratante.',
    description:
      'Servicio profesional de aplicación de medicamentos inyectables prescritos por su médico. Administración segura con técnicas estériles y personal entrenado.',
    icon: 'Syringe',
    color: 'from-red-600 to-orange-500',
    features: [
      'Aplicación de medicamentos formulados',
      'Técnicas de inyección seguras',
      'Personal entrenado y certificado',
      'Protocolos estrictos de bioseguridad',
      'Servicio a domicilio disponible',
    ],
    benefits: [
      'Aplicación profesional y segura',
      'Comodidad en su hogar',
      'Técnicas indoloras',
      'Seguimiento del tratamiento',
    ],
    indications: [
      'Medicamentos prescritos por médico',
      'Tratamientos prolongados',
      'Terapias regulares',
      'Aplicación especializada',
    ],
  },
  {
    id: 'terapia-respiratoria',
    slug: 'terapia-respiratoria',
    title: 'Terapia Respiratoria',
    shortDescription:
      'Rehabilitación respiratoria para adultos y niños con afecciones pulmonares.',
    description:
      'Tratamiento especializado para mejorar la función pulmonar y facilitar la respiración. Recomendada para estados gripales, bronquitis, bronquiolitis, EPOC, faringitis, neumonía, laringitis y pacientes con traqueostomía.',
    icon: 'Wind',
    color: 'from-orange-500 to-red-500',
    features: [
      'Nebulizaciones terapéuticas',
      'Ejercicios de expansión pulmonar',
      'Educación de la tos efectiva',
      'Manejo de secreciones bronquiales',
      'Atención a niños y adultos',
    ],
    benefits: [
      'Mejora en patrones ventilatorios',
      'Despeje de vía aérea',
      'Optimización de la oxigenación',
      'Rehabilitación cardiorrespiratoria',
    ],
    indications: [
      'Estados gripales',
      'Bronquitis y bronquiolitis',
      'EPOC (Enfermedad Pulmonar Obstructiva Crónica)',
      'Faringitis y laringitis',
      'Neumonía en recuperación',
      'Post-COVID',
      'Pacientes con traqueostomía',
    ],
  },
  {
    id: 'rehabilitacion-fisica',
    slug: 'rehabilitacion-fisica',
    title: 'Rehabilitación Física',
    shortDescription:
      'Fisioterapia profesional adaptada a tu diagnóstico y necesidades específicas.',
    description:
      'Nuestros fisioterapeutas realizan una valoración completa y definen un plan de manejo personalizado. Atención especializada en fisioterapia pediátrica, deportiva, para embarazadas, adultos mayores y rehabilitación post-quirúrgica.',
    icon: 'Activity',
    color: 'from-amber-600 to-orange-500',
    features: [
      'Valoración fisioterapéutica completa',
      'Plan de tratamiento personalizado',
      'Fisioterapia pediátrica',
      'Fisioterapia deportiva',
      'Terapia para embarazadas',
      'Rehabilitación para adultos mayores',
      'Rehabilitación post-quirúrgica',
    ],
    benefits: [
      'Recuperación funcional efectiva',
      'Reducción del dolor',
      'Mejora de movilidad y flexibilidad',
      'Prevención de lesiones futuras',
    ],
    indications: [
      'Lesiones deportivas',
      'Post-operatorios',
      'Dolor muscular crónico',
      'Limitación de movimiento',
      'Rehabilitación geriátrica',
      'Terapia prenatal y postnatal',
    ],
  },
  {
    id: 'masajes-terapeuticos',
    slug: 'masajes-terapeuticos',
    title: 'Masajes Terapéuticos',
    shortDescription:
      'Terapia manual especializada para dolor muscular y recuperación física.',
    description:
      'Técnicas profesionales de masoterapia orientadas al alivio del dolor, recuperación muscular y reducción de tensión. Especialidades en masaje deportivo, descontracturante y de tejido profundo.',
    icon: 'Heart',
    color: 'from-red-500 to-amber-500',
    features: [
      'Masaje terapéutico para dolor muscular',
      'Masaje deportivo y recuperación',
      'Masaje de tejido profundo',
      'Masaje descontracturante',
      'Técnicas de relajación terapéutica',
    ],
    benefits: [
      'Alivio del dolor muscular',
      'Reducción de contracturas',
      'Mejora de la circulación',
      'Recuperación post-entrenamiento',
    ],
    indications: [
      'Dolor muscular crónico o agudo',
      'Contracturas y tensión',
      'Lesiones deportivas',
      'Estrés físico',
      'Rehabilitación muscular',
    ],
  },
] as const;

/**
 * Company stats - Real numbers
 */
export const COMPANY_STATS = [
  {
    value: '7+',
    label: 'Años de Experiencia',
    description: 'Brindando servicios de salud a domicilio',
  },
  {
    value: '1,700+',
    label: 'Clientes Felices',
    description: 'Pacientes satisfechos con nuestros servicios',
  },
  {
    value: '100%',
    label: 'Bioseguridad',
    description: 'Protocolos certificados de higiene',
  },
  {
    value: '24/7',
    label: 'Disponibilidad',
    description: 'Atención cuando lo necesites',
  },
] as const;

/**
 * Patient testimonials
 */
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'María González',
    service: 'Terapia Respiratoria',
    content:
      'Después de mi neumonía, la terapia respiratoria me ayudó significativamente en mi recuperación. El terapeuta fue muy profesional y explicó cada procedimiento claramente.',
    rating: 5,
    avatar: 'MG',
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    service: 'Masajes Terapéuticos',
    content:
      'Excelente servicio de masajes. Como deportista, necesito recuperación constante y amesalud me ha brindado atención de calidad con resultados notables.',
    rating: 5,
    avatar: 'CR',
  },
  {
    id: 3,
    name: 'Andrés Martínez',
    service: 'Suero Terapia',
    content:
      'La hidratación intravenosa me ayudó mucho durante mi recuperación. Personal capacitado y atención impecable en la comodidad de mi hogar.',
    rating: 5,
    avatar: 'AM',
  },
] as const;

/**
 * Chatbot FAQ data for medical services
 */
export const CHATBOT_FAQ = [
  {
    id: 'suero-terapia',
    question: 'Información sobre Suero Terapia',
    answer:
      '💧 **Suero Terapia**\n\nLa Suero Terapia es la administración de hidratación intravenosa con sueros vitamínicos personalizados. Este servicio es ideal para:\n\n✅ Rehidratación rápida y efectiva\n✅ Recuperación post-ejercicio\n✅ Apoyo inmunológico\n✅ Absorción directa de nutrientes\n✅ Fortalecimiento del sistema inmune\n\nEl procedimiento es realizado por personal capacitado con protocolos de bioseguridad certificados. Disponible a domicilio o en consultorio.\n\n¿Te gustaría agendar una cita o necesitas más información?',
    keywords: [
      'suero',
      'hidratacion',
      'intravenoso',
      'vitamina',
      'iv',
      'suero terapia',
      'hidratación',
      'vitaminas',
      'nutrientes',
    ],
  },
  {
    id: 'inyectologia',
    question: 'Información sobre Inyectología',
    answer:
      '💉 **Inyectología**\n\nNuestro servicio de Inyectología ofrece la aplicación profesional y segura de medicamentos inyectables prescritos por su médico tratante.\n\n✅ Aplicación de medicamentos formulados\n✅ Técnicas de inyección seguras e indoloras\n✅ Personal entrenado y certificado\n✅ Protocolos estrictos de bioseguridad\n✅ Servicio a domicilio disponible\n\nContamos con personal entrenado que aplica técnicas estériles siguiendo todos los protocolos de seguridad. Ideal para tratamientos prolongados o terapias regulares.\n\n¿Necesitas aplicar algún medicamento específico?',
    keywords: [
      'inyeccion',
      'inyectable',
      'medicamento',
      'aplicar',
      'inyectología',
      'inyección',
      'inyectables',
      'aplicación',
      'vacuna',
    ],
  },
  {
    id: 'terapia-respiratoria',
    question: 'Información sobre Terapia Respiratoria',
    answer:
      '🌬️ **Terapia Respiratoria**\n\nLa Terapia Respiratoria está indicada para mejorar la función pulmonar y facilitar la respiración. Atendemos casos de:\n\n✅ Estados gripales\n✅ Bronquitis y bronquiolitis\n✅ EPOC (Enfermedad Pulmonar Obstructiva Crónica)\n✅ Neumonía en recuperación\n✅ Faringitis y laringitis\n✅ Post-COVID\n✅ Pacientes con traqueostomía\n\n**Incluye:**\n• Nebulizaciones terapéuticas\n• Ejercicios de expansión pulmonar\n• Educación de la tos efectiva\n• Manejo de secreciones bronquiales\n\nAtendemos tanto adultos como niños. ¿Tienes alguna condición respiratoria específica?',
    keywords: [
      'respiratoria',
      'pulmonar',
      'bronquitis',
      'epoc',
      'neumonia',
      'covid',
      'respiracion',
      'nebulizacion',
      'respiración',
      'pulmón',
      'neumonía',
      'bronquiolitis',
      'traqueostomía',
      'faringitis',
      'laringitis',
    ],
  },
  {
    id: 'rehabilitacion-fisica',
    question: 'Información sobre Rehabilitación Física',
    answer:
      '🏃 **Rehabilitación Física**\n\nNuestro servicio de Rehabilitación Física incluye:\n\n✅ Fisioterapia pediátrica\n✅ Fisioterapia deportiva\n✅ Terapia para embarazadas\n✅ Rehabilitación para adultos mayores\n✅ Rehabilitación post-quirúrgica\n\n**Proceso:**\n1. Valoración fisioterapéutica completa\n2. Plan de tratamiento personalizado\n3. Seguimiento y ajustes según evolución\n\n**Beneficios:**\n• Recuperación funcional efectiva\n• Reducción del dolor\n• Mejora de movilidad y flexibilidad\n• Prevención de lesiones futuras\n\nRealizamos una valoración completa y definimos un plan adaptado a tu diagnóstico y necesidades específicas.\n\n¿Qué tipo de rehabilitación necesitas?',
    keywords: [
      'rehabilitacion',
      'fisica',
      'fisioterapia',
      'terapia fisica',
      'recuperacion',
      'rehabilitación',
      'física',
      'fisioterapeuta',
      'recuperación',
      'lesión',
      'lesion',
      'dolor',
      'movilidad',
    ],
  },
  {
    id: 'masajes',
    question: 'Información sobre Masajes Terapéuticos',
    answer:
      '💆 **Masajes Terapéuticos**\n\nOfrecemos masajes terapéuticos especializados para:\n\n✅ Dolor muscular crónico o agudo\n✅ Contracturas y tensión\n✅ Lesiones deportivas\n✅ Recuperación post-entrenamiento\n✅ Estrés físico\n\n**Tipos de masaje:**\n• Masaje terapéutico para dolor muscular\n• Masaje deportivo y recuperación\n• Masaje de tejido profundo\n• Masaje descontracturante\n• Técnicas de relajación terapéutica\n\n**Beneficios:**\n• Alivio del dolor muscular\n• Reducción de contracturas\n• Mejora de la circulación\n• Recuperación acelerada\n\nAplicados por profesionales certificados. ¿Qué tipo de molestia presentas?',
    keywords: [
      'masaje',
      'muscular',
      'dolor',
      'contractura',
      'deportivo',
      'descontracturante',
      'masajes',
      'terapéutico',
      'terapeutico',
      'relajación',
      'relajacion',
      'tensión',
      'tension',
    ],
  },
  {
    id: 'agendar',
    question: '¿Cómo agendar una cita?',
    answer:
      '📅 **Cómo Agendar una Cita**\n\nPuedes agendar de las siguientes formas:\n\n**📱 WhatsApp:**\n• +57 310 337 3913\n\n**📧 Email:**\n• amesaludterapias@gmail.com\n\n**Al agendar, por favor indica:**\n✅ El servicio que necesitas\n✅ Si prefieres atención a domicilio o en consultorio\n✅ Tu disponibilidad de horarios\n✅ Cualquier información relevante sobre tu caso\n\nNuestro equipo te responderá lo antes posible para coordinar tu cita. ¿Qué servicio te interesa?',
    keywords: [
      'agendar',
      'cita',
      'reservar',
      'turno',
      'programar',
      'agendar cita',
      'reservar cita',
      'cómo agendar',
      'como agendar',
      'contacto',
      'llamar',
    ],
  },
  {
    id: 'horarios',
    question: '¿Cuáles son los horarios?',
    answer:
      '🕐 **Horarios de Atención**\n\n**Lunes a Viernes:**\n8:00 AM - 6:00 PM\n\n**Sábados:**\n9:00 AM - 2:00 PM\n\n**Domingos y Festivos:**\nCerrado\n\nPara urgencias o casos especiales fuera de estos horarios, contáctanos por WhatsApp y haremos nuestro mejor esfuerzo para atenderte.\n\n¿En qué horario te gustaría agendar?',
    keywords: [
      'horario',
      'hora',
      'cuando',
      'abierto',
      'cerrado',
      'horarios',
      'disponibilidad',
      'atencion',
      'atención',
      'tiempo',
    ],
  },
  {
    id: 'domicilio',
    question: '¿Atienden a domicilio?',
    answer:
      '🏠 **Servicio a Domicilio**\n\n¡Sí! Todos nuestros servicios están disponibles a domicilio en Bogotá y alrededores.\n\n**Ventajas del servicio a domicilio:**\n✅ Comodidad en tu hogar\n✅ Ahorro de tiempo y desplazamientos\n✅ Ambiente familiar y relajado\n✅ Equipo completo que llevamos contigo\n✅ Mismos protocolos de bioseguridad\n\nLlevamos todo el equipo necesario y seguimos todos los protocolos de bioseguridad certificados. Consulta disponibilidad al agendar.\n\n¿En qué zona de Bogotá te encuentras?',
    keywords: [
      'domicilio',
      'casa',
      'hogar',
      'visita',
      'lugar',
      'a domicilio',
      'domiciliario',
      'en casa',
      'ubicación',
      'ubicacion',
      'zona',
      'barrio',
    ],
  },
  {
    id: 'bioseguridad',
    question: '¿Cumplen con protocolos de bioseguridad?',
    answer:
      '🛡️ **Protocolos de Bioseguridad**\n\nSí, cumplimos estrictamente con todos los protocolos de bioseguridad y normativas del Ministerio de Salud.\n\n**Nuestros estándares incluyen:**\n✅ Material estéril y desechable\n✅ Equipo de protección personal (EPP)\n✅ Desinfección de superficies y equipos\n✅ Lavado de manos y técnicas asépticas\n✅ Manejo adecuado de residuos\n✅ Certificaciones vigentes\n\nTu seguridad y la de nuestros profesionales es nuestra máxima prioridad. Todos nuestros procedimientos siguen las mejores prácticas del sector salud.\n\n¿Tienes alguna preocupación específica sobre bioseguridad?',
    keywords: [
      'bioseguridad',
      'seguridad',
      'higiene',
      'esteril',
      'protocolo',
      'bioseguridad',
      'higiénico',
      'higienico',
      'estéril',
      'limpieza',
      'sanitización',
      'sanitizacion',
    ],
  },
  {
    id: 'precios',
    question: '¿Cuáles son los precios?',
    answer:
      '💰 **Información de Precios**\n\nLos precios varían según el servicio y si es a domicilio o en consultorio. Para obtener información detallada sobre tarifas:\n\n📱 **Contacta por WhatsApp:**\n• +57 310 337 3913\n\n📧 **O por Email:**\n• amesaludterapias@gmail.com\n\nNuestro equipo te proporcionará un presupuesto personalizado según tus necesidades específicas. También podemos ofrecerte paquetes o planes según la frecuencia de tus sesiones.\n\n¿Qué servicio te interesa?',
    keywords: [
      'precio',
      'costo',
      'tarifa',
      'cuanto',
      'cuánto',
      'valor',
      'precios',
      'costos',
      'tarifas',
      'pago',
      'cobro',
      'presupuesto',
    ],
  },
  {
    id: 'experiencia',
    question: '¿Cuánta experiencia tienen?',
    answer:
      '⭐ **Nuestra Experiencia**\n\namesalud cuenta con:\n\n✅ **7+ años** de experiencia brindando servicios de salud a domicilio\n✅ **1,700+ clientes** satisfechos\n✅ **100% bioseguridad** con protocolos certificados\n✅ **Profesionales capacitados** con formación continua\n\nNuestro equipo está compuesto por profesionales certificados y con amplia experiencia en cada área de servicio. Mantenemos actualizaciones constantes en técnicas y protocolos.\n\n¿Te gustaría conocer más sobre nuestros profesionales?',
    keywords: [
      'experiencia',
      'años',
      'anos',
      'tiempo',
      'cuanto tiempo',
      'cuánto tiempo',
      'antigüedad',
      'antiguedad',
      'trayectoria',
      'historia',
      'desde cuando',
      'desde cuándo',
    ],
  },
  {
    id: 'ubicacion',
    question: '¿Dónde están ubicados?',
    answer:
      '📍 **Ubicación**\n\nEstamos ubicados en **Bogotá, Colombia**.\n\n**Servicios disponibles:**\n✅ A domicilio en Bogotá y alrededores\n✅ Consultorio (consulta disponibilidad)\n\nPara conocer la ubicación exacta de nuestro consultorio o verificar si atendemos en tu zona, contáctanos por:\n\n📱 WhatsApp: +57 310 337 3913\n📧 Email: amesaludterapias@gmail.com\n\n¿En qué zona de Bogotá te encuentras?',
    keywords: [
      'ubicacion',
      'ubicación',
      'donde',
      'dónde',
      'direccion',
      'dirección',
      'lugar',
      'zona',
      'barrio',
      'localidad',
      'bogota',
      'bogotá',
    ],
  },
  {
    id: 'urgencias',
    question: '¿Atienden urgencias?',
    answer:
      '🚨 **Atención de Urgencias**\n\nPara casos urgentes, contáctanos inmediatamente por WhatsApp:\n\n📱 +57 310 337 3913\n\nHaremos nuestro mejor esfuerzo para atenderte lo antes posible, incluso fuera de horarios regulares.\n\n**Importante:** Para emergencias médicas críticas, te recomendamos contactar primero a los servicios de emergencia (123) o acudir a un centro de urgencias.\n\n¿Es una urgencia? Contáctanos ahora.',
    keywords: [
      'urgencia',
      'urgente',
      'emergencia',
      'emergente',
      'inmediato',
      'ahora',
      'ya',
      'rápido',
      'rapido',
      'pronto',
    ],
  },
  {
    id: 'seguro',
    question: '¿Aceptan seguros médicos?',
    answer:
      '🏥 **Seguros Médicos**\n\nPara información sobre cobertura de seguros médicos o convenios, contáctanos directamente:\n\n📱 WhatsApp: +57 310 337 3913\n📧 Email: amesaludterapias@gmail.com\n\nNuestro equipo te informará sobre las opciones de pago disponibles y si trabajamos con algún convenio específico.\n\nTambién aceptamos pagos en efectivo y transferencias bancarias.\n\n¿Tienes algún seguro específico?',
    keywords: [
      'seguro',
      'seguros',
      'cobertura',
      'convenio',
      'eps',
      'prepagada',
      'pago',
      'factura',
      'facturación',
      'facturacion',
    ],
  },
] as const;

/**
 * Why choose us - Key differentiators
 */
export const WHY_CHOOSE_US = [
  {
    title: 'Atención Personalizada',
    description:
      'Cada paciente recibe un plan de tratamiento adaptado a sus necesidades específicas.',
    icon: 'UserCheck',
  },
  {
    title: 'Profesionales Capacitados',
    description:
      'Equipo con formación profesional y experiencia en servicios de salud a domicilio.',
    icon: 'Award',
  },
  {
    title: 'Servicio a Domicilio',
    description:
      'Llevamos nuestros servicios a la comodidad de tu hogar en Bogotá y alrededores.',
    icon: 'Home',
  },
  {
    title: 'Bioseguridad Certificada',
    description:
      'Cumplimos estrictamente con protocolos de higiene y bioseguridad del sector salud.',
    icon: 'Shield',
  },
  {
    title: 'Equipos Especializados',
    description:
      'Contamos con el equipo médico y terapéutico necesario para cada procedimiento.',
    icon: 'Stethoscope',
  },
] as const;

/**
 * SEO metadata
 */
export const SEO = {
  title: 'amesalud | Servicios de Salud a Domicilio en Bogotá',
  description:
    'Suero terapia, inyectología, terapia respiratoria y masajes terapéuticos a domicilio en Bogotá. Personal capacitado y protocolos de bioseguridad certificados.',
  keywords:
    'suero terapia, inyectología, terapia respiratoria, masajes terapéuticos, servicios médicos a domicilio, Bogotá, Colombia, hidratación intravenosa, atención domiciliaria',
  ogImage: '/logo.png',
  url: 'https://amesaludplus.com',
} as const;
