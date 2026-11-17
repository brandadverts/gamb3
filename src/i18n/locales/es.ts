import type { Dictionary } from "./tr";

/**
 * Textos en español. Escritos para quien de verdad opera una plataforma — dirección técnica,
 * pagos, trading — y no para un folleto. Cifras en formato español (590.418 · 97,2 %).
 */
const es: Dictionary = {
  site: {
    name: "Gamb Gaming",
    tagline: "B2B / iGAMING",
  },

  meta: {
    home: {
      title: "Gamb Gaming — su socio tecnológico en iGaming",
      description:
        "Sportsbook, casino, pagos, bonos, CRM, riesgo e IA para operadores con licencia. Montaje y operación con un solo equipo.",
    },
    products: {
      title: "Productos y módulos de iGaming — Gamb Gaming",
      description:
        "Sportsbook, agregación de casino, monedero común, pagos, CRM, bonos, afiliación, riesgo e IA: los 32 módulos que necesita una operación de iGaming, en una sola plataforma.",
    },
    technology: {
      title: "Arquitectura de plataforma iGaming y API — Gamb Gaming",
      description:
        "Integración orientada a API, servicios modulares, capa de datos común y seguridad incorporada. Una infraestructura que se comporta igual la noche de más tráfico.",
    },
    cases: {
      title: "Casos: lanzamiento, migración, multimarca — Gamb Gaming",
      description:
        "Un lanzamiento desde cero, una migración sin cortes y una segunda marca: tres escenarios representativos, sus riesgos y las medidas previstas.",
    },
    packages: {
      title: "Paquetes y alcance: Launch, Scale, Enterprise — Gamb Gaming",
      description:
        "Alcances de partida para operaciones nuevas, operadores en crecimiento y grupos multimarca. El precio se cotiza tras el análisis inicial.",
    },
    demo: {
      title: "Reservar una demo — Gamb Gaming",
      description:
        "Recorra la plataforma con el equipo técnico: sus objetivos, los módulos y un plan de arranque en una sola reunión.",
    },
    blog: {
      title: "Blog: notas sobre infraestructura de iGaming — Gamb Gaming",
      description:
        "Elección de plataforma, integración, pagos, riesgo y operación — escrito para equipos que buscan proveedor.",
    },
    notfound: {
      title: "Página no encontrada — Gamb Gaming",
      description: "La página se ha movido o la dirección se escribió mal.",
    },
  },

  nav: {
    home: "Inicio",
    products: "Productos",
    technology: "Tecnología",
    cases: "Casos",
    packages: "Paquetes",
    blog: "Blog",
    demo: "Reservar una demo",
    menu: "Menú",
    close: "Cerrar",
    mainNav: "Menú principal",
    mobileNav: "Menú móvil",
    skip: "Ir al contenido",
    language: "Idioma",
    logoLabel: "Inicio de Gamb Gaming",
    menuNote: ["Tecnología B2B solo para operadores con licencia.", "No se da soporte a jugadores ni a usuarios finales."],
  },

  footer: {
    headline: ["La tecnología", "detrás del juego."],
    copy: "Socio tecnológico y operativo de principio a fin para operadores de iGaming con licencia.",
    explore: "Explorar",
    products: "Productos",
    pagesLabel: "Páginas",
    cardTitle: "Recorramos la plataforma juntos.",
    cardCopy: "Cuéntenos qué está montando; prepararemos el recorrido en torno a su operación.",
    legal:
      "Gamb Gaming presta servicios de tecnología y operación únicamente a operadores con licencia. No ofrece juego, apuestas ni soporte de cuenta a usuarios finales. El alcance de los servicios depende de la normativa del mercado en el que opera el operador.",
    rights: "Todos los derechos reservados.",
    top: "Volver arriba",
  },

  heroes: {
    home: {
      title: ["Su socio tecnológico", "en iGaming."],
      description:
        "Sportsbook, casino, pagos, bonos, CRM, riesgo e IA para operadores con licencia. Montaje y operación con un solo equipo.",
    },
    products: {
      title: ["Toda la operación,", "en una plataforma."],
      description:
        "{modules} módulos en {groups} áreas: del juego al cobro, del bono al riesgo. Empiece por lo que necesita; el resto está listo cuando usted lo esté.",
    },
    technology: {
      title: ["Sube el tráfico.", "El juego continúa."],
      description:
        "Integración orientada a API, servicios modulares y una capa de datos común — pensados para la jornada más cargada de la temporada.",
      bullets: ["Orientada a API", "Modular", "Monedero común", "Acceso por rol"],
    },
    cases: {
      title: ["Montar una operación", "es un problema con solución."],
      description:
        "Lanzamientos nuevos, migraciones controladas y crecimiento multimarca. Tres escenarios representativos.",
    },
    packages: {
      title: ["Construya hoy.", "Deje abierto el mañana."],
      description:
        "Nada de planes de catálogo. Un punto de partida a la medida de su operación y un alcance que crece con usted.",
    },
  },

  home: {
    stats: [
      { value: "100 %", label: "ENFOCADOS EN EL CLIENTE" },
      { value: "14 días", label: "PLAN DE APERTURA OBJETIVO" },
      { value: "{modules} módulos", label: "UNA SOLA PLATAFORMA" },
    ],
    heroPrimary: "Descubrir la plataforma",
    heroSecondary: "Ver nuestros servicios",
    servicesTitle: "Lo que más nos piden",
    servicesCopy: "Del montaje al día a día, la experiencia que su operación necesita.",
    services: [
      { title: "Plataforma e integración", copy: "Unir productos, datos y procesos sobre una misma columna vertebral." },
      { title: "Operación de pagos", copy: "Conexiones de pago, seguimiento de transacciones y conciliación." },
      { title: "CRM y gestión de jugadores", copy: "Segmentación, campañas y ciclo de vida." },
      { title: "Riesgo y seguridad", copy: "Centralizar identidad, accesos, límites y reglas de riesgo." },
      { title: "Gestión de afiliación", copy: "Alianzas, comisiones y seguimiento del rendimiento." },
    ],
    tileSlogan: "Una sola plataforma cubre todo.",
    tileLink: "Ver todos los módulos",
    consoleTitle: "Su equipo empieza el día en una sola pantalla.",
    consoleCopy:
      "Trading, pagos, CRM y riesgo miran los mismos datos. Quién aprobó qué, qué campaña está activa, qué transacción espera: todo en el mismo sitio.",
    consolePoints: [
      "Vistas ordenadas según su rol",
      "Una cola común para todo lo que espera aprobación",
      "Filtros por marca y por mercado",
    ],
    consoleCta: "Ver los productos",
    platformTitle: "Toda la operación habla el mismo idioma.",
    platformCopy:
      "En lugar de herramientas sueltas e informes cosidos a mano, todo —de la primera sesión al cobro— se encuentra en una capa de datos común.",
    platformFeatures: [
      { title: "Una vista del jugador", copy: "Leer cuenta, monedero, juego y campañas uno al lado del otro." },
      { title: "Operación compartida", copy: "Los equipos de producto trabajan con las mismas reglas, permisos y aprobaciones." },
      { title: "Crecimiento medible", copy: "Seguir canal, producto y segmento en un único modelo de informes." },
    ],
    audienceTitle: "Donde esté, ahí empezamos.",
    audienceCopy:
      "Del equipo que abre su primera marca al grupo multimarca: el punto de partida cambia; el destino no.",
    audiences: [
      {
        title: "Abriendo la primera marca",
        copy: "La licencia y el equipo están listos; ahora toca poner en marcha productos, pagos y back office a la vez.",
        points: ["Alcance de producto básico", "Lista de verificación de apertura", "Formación del equipo"],
      },
      {
        title: "Cansados de herramientas sueltas",
        copy: "Equipos que quieren ver al jugador y los ingresos en un sitio, no en cinco paneles y una hoja de cálculo.",
        points: ["Monedero y datos compartidos", "CRM y segmentación", "Migración por fases"],
      },
      {
        title: "Entrando en nuevos mercados",
        copy: "Grupos que llevan varias marcas y mercados en una misma plataforma, cada uno con sus reglas y permisos.",
        points: ["Configuración por marca", "Restricciones de mercado", "Informes centralizados"],
      },
    ],
    bandTitle: "El tráfico sube. El rendimiento se mantiene.",
    bandCta: "Ver la arquitectura",
    bandFacts: [
      { title: "Orientada a API", copy: "Productos y servicios externos hablan mediante contratos definidos." },
      { title: "Modular", copy: "Un producto se actualiza mientras los demás siguen sirviendo." },
      { title: "Observable", copy: "Salud de los servicios y flujo de transacciones desde un solo sitio." },
    ],
    processTitle: "Del análisis al directo, un camino claro.",
    processCopy: "En cada paso acordamos juntos el alcance, los responsables y los criterios de aceptación.",
    processSteps: [
      { title: "Análisis", copy: "Mercado, licencia, producto y necesidades de integración." },
      { title: "Plan", copy: "Alcance técnico, estructura de marcas y calendario de salida." },
      { title: "Montaje", copy: "Entornos, productos, proveedores y roles operativos listos." },
      { title: "Validación", copy: "Pruebas de extremo a extremo, formación y lista de apertura cerrada." },
    ],
    awardsTitle: "Reconocimiento internacional.",
    awardsCopy: "Nuestro proveedor ha ganado en los premios EGR B2B, SBC y SiGMA, ha sido primero en los MiGEA en tres ediciones distintas y ha quedado finalista muchas más veces.",
    awardsLabel: "Premios de nuestro proveedor",
    ctaTitle: "Busquemos el punto de partida correcto para su operación.",
    ctaCopy: "Cuéntenos qué necesita; definiremos juntos el alcance de producto, integración y migración.",
  },

  panel: {
    tabsLabel: "Vistas del panel",
    general: "Resumen",
    last12: "Últimas 12 horas",
    note: "Para ver más,",
    noteLink: "reserve una demo",
    modulesLabel: "Módulos de {group}",
    overview: {
      kpis: [
        { label: "Jugadores activos", value: "590.418", delta: "+6 %" },
        { label: "Boletos abiertos", value: "1.284.730", delta: "+11 %" },
        { label: "Pendientes de aprobación", value: "214", delta: "−37" },
      ],
      chartLabel: "Sesiones por hora",
      rows: [
        { time: "21:04", text: "12 partidos retirados por sospecha de fraude, boletos anulados", tag: "Riesgo" },
        { time: "21:02", text: "Nuevo proveedor de juegos añadido al lobby", tag: "Casino" },
        { time: "20:57", text: "Campaña de fin de semana en marcha", tag: "CRM" },
        { time: "20:49", text: "1.380 solicitudes de retirada en cola de aprobación", tag: "Finanzas" },
      ],
    },
    groups: {
      "oyun-icerik": {
        kpis: [
          { label: "Partidos en directo", value: "1.846", delta: "−12" },
          { label: "Sesiones de casino", value: "212.640", delta: "+9 %" },
          { label: "Juegos publicados", value: "5.120", delta: "+48" },
        ],
        chartLabel: "Boletos y rondas por hora",
        stats: {
          "urun-sportsbook": "1.284.730 boletos abiertos",
          "urun-game-provider": "38 proveedores",
          "urun-canli-casino": "412 mesas abiertas",
          "urun-sanal-espor": "96 eventos",
          "urun-hizli-oyunlar": "18.400 rondas / h",
          "urun-turnuva-jackpot": "7 torneos",
        },
      },
      "oyuncu-hesap": {
        kpis: [
          { label: "Jugadores activos", value: "590.418", delta: "+6 %" },
          { label: "Registros de hoy", value: "8.940", delta: "+4 %" },
          { label: "Verificaciones pendientes", value: "1.126", delta: "−180" },
        ],
        chartLabel: "Accesos por hora",
        stats: {
          "urun-oyuncu-hesap": "590.418 activos",
          "urun-cuzdan": "0 diferencia de saldo",
          "urun-kyc": "1.126 en cola",
          "urun-sorumlu-oyun": "3.480 límites activos",
        },
      },
      "odeme-finans": {
        kpis: [
          { label: "Depósitos aprobados", value: "97,2 %", delta: "+0,4" },
          { label: "Retiradas pendientes", value: "1.380", delta: "−96" },
          { label: "Conciliación", value: "99,98 %", delta: "+0,01" },
        ],
        chartLabel: "Transacciones por hora",
        stats: {
          "urun-gambpay": "842.300 transacciones",
          "urun-finans": "14 liquidaciones abiertas",
          "urun-kripto": "12 % de cuota",
        },
      },
      "buyume-pazarlama": {
        kpis: [
          { label: "Campañas activas", value: "17", delta: "+2" },
          { label: "Bonos entregados", value: "18.930", delta: "+12 %" },
          { label: "Jugadores que vuelven", value: "31.240", delta: "+18 %" },
        ],
        chartLabel: "Respuesta a campañas",
        stats: {
          "urun-gambcrm": "126 segmentos",
          "urun-bonus": "42 bonos activos",
          "urun-pazarlama": "9 envíos programados",
          "urun-gambaffiliate": "1.240 socios",
          "urun-sadakat": "2.310 jugadores VIP",
          "urun-is-gelistirme": "3 estudios de mercado",
        },
      },
      "risk-uyum": {
        kpis: [
          { label: "Alertas abiertas", value: "57", delta: "+12" },
          { label: "Cuentas en revisión", value: "311", delta: "+46" },
          { label: "Boletos anulados", value: "4.218", delta: "hoy" },
        ],
        chartLabel: "Movimientos marcados",
        stats: {
          "urun-risk-fraud": "12 partidos retirados",
          "urun-aml": "23 casos abiertos",
          "urun-uyum": "2 informes listos",
        },
      },
      "veri-yapay-zeka": {
        kpis: [
          { label: "Riesgo alto de abandono", value: "12.480", delta: "jugadores" },
          { label: "Clics en recomendaciones", value: "18,4 %", delta: "+1,1" },
          { label: "Puntuación alta de fraude", value: "64", delta: "transacciones" },
        ],
        chartLabel: "Llamadas a modelos",
        stats: {
          "urun-ai": "4 modelos en producción",
          "urun-bi": "36 cuadros de mando",
          "urun-veri-akisi": "2,1 M eventos / h",
        },
      },
      "operasyon-altyapi": {
        kpis: [
          { label: "Disponibilidad", value: "99,97 %", delta: "30 días" },
          { label: "Tickets abiertos", value: "148", delta: "−21" },
          { label: "Marcas activas", value: "6", delta: "+1" },
        ],
        chartLabel: "Peticiones por hora",
        stats: {
          "urun-arka-ofis": "214 esperando aprobación",
          "urun-cms": "12 publicaciones hoy",
          "urun-destek": "148 tickets abiertos",
          "urun-bayi": "860 agentes",
          "urun-api": "64 ms de respuesta",
          "urun-coklu-marka": "6 marcas",
          "urun-altyapi": "0 alarmas abiertas",
        },
      },
    },
  },

  catalog: {
    groups: {
      "oyun-icerik": {
        name: "Juego y contenido",
        summary: "Todo lo que ve el jugador: apuestas, casino y todos los juegos intermedios.",
      },
      "oyuncu-hesap": {
        name: "Jugador y cuenta",
        summary: "Del registro al cobro, cada paso ligado a la cuenta del jugador.",
      },
      "odeme-finans": {
        name: "Pagos y finanzas",
        summary: "El dinero que entra, el que sale y las cuentas cerradas al final del día.",
      },
      "buyume-pazarlama": {
        name: "Crecimiento y marketing",
        summary: "Las herramientas que traen al jugador, lo retienen y lo hacen volver.",
      },
      "risk-uyum": { name: "Riesgo y cumplimiento", summary: "Las reglas que protegen la caja, la licencia y al jugador." },
      "veri-yapay-zeka": {
        name: "Datos e IA",
        summary: "Decidir con datos y modelos, no con corazonadas.",
      },
      "operasyon-altyapi": {
        name: "Operación e infraestructura",
        summary: "Las herramientas del día a día y el suelo sobre el que se apoya todo.",
      },
    },
    modules: {
      "urun-sportsbook": {
        name: "Sportsbook",
        tag: "",
        description: "Llevar la previa y el directo desde un solo sitio.",
        items: [
          "Flujos de previa y en directo",
          "Configuración de cuotas, límites y margen",
          "Creador de apuestas y cobro anticipado",
          "Flujos de boleto, devolución y anulación",
        ],
      },
      "urun-game-provider": {
        name: "Agregación de proveedores de juego",
        tag: "",
        description: "Conectar proveedores de casino con una sola integración; gestionar catálogo y lobby.",
        items: [
          "Muchos proveedores, una API",
          "Catálogo de juegos y diseño del lobby",
          "Visibilidad de juegos por mercado",
          "Informes y conciliación por proveedor",
        ],
      },
      "urun-canli-casino": {
        name: "Casino en vivo",
        tag: "",
        description: "Ofrecer mesas en vivo y juegos con crupier desde el mismo monedero.",
        items: [
          "Lobby de mesas en vivo",
          "Límites de mesa y visibilidad",
          "Paso sin cortes con monedero común",
          "Historial de sesión y de apuestas",
        ],
      },
      "urun-sanal-espor": {
        name: "Virtuales y esports",
        tag: "",
        description: "Contenido para apostar a cualquier hora, al margen del calendario.",
        items: [
          "Ligas virtuales y carreras",
          "Mercados de esports",
          "Perfiles de límite y margen propios",
          "Boleto compartido con el sportsbook",
        ],
      },
      "urun-hizli-oyunlar": {
        name: "Juegos rápidos",
        tag: "",
        description: "Un catálogo listo de rondas cortas: crash, dados, minas.",
        items: [
          "Catálogo de juegos de ronda corta",
          "Resultados de ronda verificables",
          "Ajuste de margen por juego",
          "Destacados en el lobby",
        ],
      },
      "urun-turnuva-jackpot": {
        name: "Torneos y botes",
        tag: "",
        description: "Convertir el juego en carrera con clasificaciones y premios.",
        items: [
          "Plantillas de torneo y calendario",
          "Clasificaciones en directo",
          "Botes progresivos",
          "Reglas de reparto de premios",
        ],
      },
      "urun-oyuncu-hesap": {
        name: "Gestión de cuentas de jugador",
        tag: "",
        description: "Registro, perfil, sesiones y estados de cuenta en un solo sitio.",
        items: [
          "Flujos de registro y acceso",
          "Perfil, etiquetas y notas",
          "Estado de la cuenta y restricciones",
          "Todo el historial del jugador en una pantalla",
        ],
      },
      "urun-cuzdan": {
        name: "Monedero común",
        tag: "",
        description: "Un solo saldo en todos los productos; cada movimiento en el libro.",
        items: [
          "Saldo real y de bono separados",
          "Multidivisa",
          "Libro de transacciones",
          "Ajuste de saldo con aprobación",
        ],
      },
      "urun-kyc": {
        name: "KYC y verificación de identidad",
        tag: "",
        description: "Conectar proveedores de verificación al registro y al cobro.",
        items: [
          "Carga de documentos y cola de revisión",
          "Integraciones con proveedores de verificación",
          "Reglas de verificación por mercado",
          "Control de edad y dirección",
        ],
      },
      "urun-sorumlu-oyun": {
        name: "Juego responsable",
        tag: "",
        description: "Límites, pausas y autoexclusión forman parte de la cuenta del jugador.",
        items: [
          "Límites de depósito, pérdida y tiempo",
          "Pausa y autoexclusión",
          "Avisos de duración de sesión",
          "Señales de conducta de riesgo",
        ],
      },
      "urun-gambpay": {
        name: "gambpay",
        tag: "Pagos",
        description: "Seguir los flujos de pago, los estados de transacción y los pasos de aprobación.",
        items: [
          "Flujos de depósito y retirada",
          "Límites y enrutado por método",
          "Permisos y pasos de aprobación",
          "Seguimiento del estado de la transacción",
        ],
      },
      "urun-finans": {
        name: "Finanzas y conciliación",
        tag: "",
        description: "Cerrar caja, liquidaciones y fin de día en la misma tabla.",
        items: [
          "Conciliación diaria y de periodo",
          "Informes de GGR / NGR e ingresos",
          "Liquidaciones de proveedores y socios",
          "Exportación para contabilidad",
        ],
      },
      "urun-kripto": {
        name: "Pagos en cripto",
        tag: "",
        description: "Depósitos y retiradas en cripto; el mismo monedero, las mismas reglas.",
        items: [
          "Varias redes y activos",
          "Conversión automática",
          "Vigilancia de direcciones y transacciones",
          "Reglas de aprobación de retiradas",
        ],
      },
      "urun-gambcrm": {
        name: "gambcrm",
        tag: "CRM",
        description: "Convertir los datos del jugador en acciones que se pueden medir.",
        items: [
          "Segmentos y montaje de campañas",
          "Ciclo de vida del jugador",
          "Disparadores en tiempo real",
          "Medición de resultados de campaña",
        ],
      },
      "urun-bonus": {
        name: "Gestión de bonos",
        tag: "",
        description: "Diseñar los bonos junto con sus reglas, su presupuesto y sus requisitos de apuesta.",
        items: [
          "Bonos de bienvenida, depósito y pérdida",
          "Apuestas y giros gratis",
          "Reglas de apuesta y vigencia",
          "Presupuesto de bonos y control de abuso",
        ],
      },
      "urun-pazarlama": {
        name: "Automatización de marketing",
        tag: "",
        description: "Planificar campañas, llevarlas a los canales y medir el retorno.",
        items: [
          "Calendario de campañas y códigos promocionales",
          "Correo, SMS y notificaciones",
          "Banners y páginas de aterrizaje en el sitio",
          "Retorno por canal y campaña",
        ],
      },
      "urun-gambaffiliate": {
        name: "gambaffiliate",
        tag: "Afiliación",
        description: "Hacer crecer la red de socios con cifras que ven las dos partes.",
        items: [
          "Modelos de comisión",
          "Seguimiento de campañas y tráfico",
          "Portal de socios y periodos de liquidación",
          "Estructuras de subafiliación",
        ],
      },
      "urun-sadakat": {
        name: "Fidelización y VIP",
        tag: "",
        description: "Gestionar la fidelidad con niveles, puntos y ventajas.",
        items: [
          "Sistema de niveles y puntos",
          "Herramientas para gestores VIP",
          "Ofertas personalizadas",
          "Reglas de devolución de pérdidas",
        ],
      },
      "urun-is-gelistirme": {
        name: "Desarrollo de negocio",
        tag: "Servicio",
        description: "De la entrada en un mercado a los acuerdos con proveedores, armamos el plan con usted.",
        items: [
          "Análisis de mercado y competencia",
          "Selección de proveedores y socios de pago",
          "Plan de lanzamiento y crecimiento",
          "Revisión periódica de resultados",
        ],
      },
      "urun-risk-fraud": {
        name: "Gestión de riesgo y fraude",
        tag: "",
        description: "Detectar pronto conductas sospechosas de cuenta, bono y apuesta.",
        items: [
          "Cruce de cuentas múltiples y dispositivos",
          "Reglas contra el abuso de bonos",
          "Perfiles de riesgo de apuesta y límite",
          "Cola de revisión y expedientes",
        ],
      },
      "urun-aml": {
        name: "PBC y monitorización de transacciones",
        tag: "",
        description: "Vigilar y documentar con reglas los movimientos de dinero inusuales.",
        items: [
          "Reglas de umbral y de patrón",
          "Flujo de origen de fondos",
          "Registro de transacciones sospechosas",
          "Un historial listo para auditoría",
        ],
      },
      "urun-uyum": {
        name: "Cumplimiento e informes regulatorios",
        tag: "",
        description: "Generar desde el panel los informes que pide el regulador.",
        items: [
          "Plantillas de informe por mercado",
          "Registros de auditoría inalterables",
          "Reglas de conservación de datos",
          "Informes de permisos y accesos",
        ],
      },
      "urun-ai": {
        name: "Módulos de IA",
        tag: "IA",
        description: "Enganchar los modelos de predicción y recomendación a las decisiones del día.",
        items: [
          "Recomendaciones de juego y apuesta",
          "Predicción del riesgo de abandono",
          "Puntuación de fraude y riesgo",
          "Asistente de IA para el equipo de operación",
        ],
      },
      "urun-bi": {
        name: "BI e informes",
        tag: "",
        description: "Rendimiento de producto, canal y segmento sobre definiciones comunes.",
        items: [
          "Cuadros de mando listos",
          "Creador de informes a medida",
          "Envío programado de informes",
          "Exportación al almacén de datos",
        ],
      },
      "urun-veri-akisi": {
        name: "Flujo de datos en tiempo real",
        tag: "",
        description: "Llevar los eventos de jugador y transacción a sus sistemas al instante.",
        items: [
          "Flujo de eventos y webhooks",
          "Disparadores de segmento",
          "Paneles de métricas en vivo",
          "Integraciones con herramientas externas",
        ],
      },
      "urun-arka-ofis": {
        name: "Back office",
        tag: "",
        description: "El panel de administración donde todos los equipos siguen las mismas reglas.",
        items: ["Roles y permisos", "Flujos de aprobación", "Historial de cambios", "Vista multimarca"],
      },
      "urun-cms": {
        name: "CMS y front end",
        tag: "",
        description: "Gestionar la interfaz web y móvil, los contenidos y los temas sin escribir código.",
        items: [
          "Front end web y móvil listo",
          "Gestión de páginas, banners y menús",
          "Temas de marca",
          "Varios idiomas",
        ],
      },
      "urun-destek": {
        name: "Herramientas de atención al cliente",
        tag: "",
        description: "Soporte ve al jugador, la transacción y el historial en la misma pantalla.",
        items: [
          "Gestión de tickets y casos",
          "Integración de chat en vivo",
          "Respuestas predefinidas y etiquetas",
          "Acceso al historial del jugador con un clic",
        ],
      },
      "urun-bayi": {
        name: "Gestión de agentes y red",
        tag: "",
        description: "Llevar su red de campo con jerarquía, límites y comisiones.",
        items: [
          "Estructura de agentes a varios niveles",
          "Reparto de saldo y límites",
          "Cuentas de comisión",
          "Informes por agente",
        ],
      },
      "urun-api": {
        name: "Capa de API e integración",
        tag: "",
        description: "Los sistemas externos se conectan mediante contratos definidos.",
        items: [
          "Puntos REST y WebSocket",
          "Entorno de pruebas",
          "Notificaciones por webhook",
          "Documentación versionada",
        ],
      },
      "urun-coklu-marka": {
        name: "Multimarca",
        tag: "",
        description: "Abrir nuevas marcas y mercados en la misma plataforma.",
        items: [
          "Configuración por marca",
          "Reglas de mercado e idioma",
          "Permisos e informes separados",
          "Capa común de jugador y monedero",
        ],
      },
      "urun-altyapi": {
        name: "Infraestructura y monitorización",
        tag: "Servicio",
        description: "Del alojamiento, el escalado y la vigilancia nos encargamos nosotros.",
        items: [
          "Infraestructura cloud gestionada",
          "Escalado automático",
          "Monitorización y alertas",
          "Copias y plan de vuelta atrás",
        ],
      },
    },
  },

  products: {
    indexLabel: "Áreas de producto",
    flowTitle: "{modules} módulos, una sola ficha de jugador.",
    flowCopy:
      "Cada paso del jugador tras registrarse cae en el módulo que le toca; todo se escribe en la misma cuenta y el mismo monedero.",
    playerFlow: [
      { step: "Registro", module: "Cuentas de jugador · KYC", copy: "Se abre la cuenta y arranca la verificación." },
      { step: "Depósito", module: "gambpay", copy: "Se aprueba el pago y se actualiza el monedero común." },
      { step: "Juego", module: "Sportsbook · Casino", copy: "El mismo saldo sirve en los dos productos." },
      { step: "Contacto", module: "gambcrm · Bonos", copy: "La actividad alimenta segmentos y disparadores." },
      { step: "Origen", module: "gambaffiliate", copy: "Se anota al socio que trajo al jugador." },
    ],
    capsTitle: "Detrás de cada módulo, la misma disciplina operativa.",
    capsCopy:
      "Los módulos se usan por separado; juntos, datos, permisos e informes pasan sin costura.",
    capabilities: [
      { title: "Roles y permisos", copy: "Roles finos para que cada equipo llegue solo a lo suyo." },
      { title: "Gestión de reglas", copy: "Llevar límites, aprobaciones, visibilidad y reglas operativas desde un sitio." },
      { title: "Historial de cambios", copy: "Rastrear los cambios críticos por usuario, hora y resultado." },
      { title: "Informes", copy: "Comparar métricas de producto y operación sobre definiciones comunes." },
      { title: "Avisos", copy: "Avisar al equipo adecuado en tiempo real ante operaciones y umbrales importantes." },
      { title: "Multimarca", copy: "Llevar varias marcas y mercados en una plataforma, bajo control." },
    ],
    integrationTitle: "Siga trabajando con los socios que ya tiene.",
    integrationCopy:
      "Los servicios de proveedores, pagos, identidad y datos se conectan a la plataforma por la capa de API, de forma controlada.",
    integrationCta: "Ver el montaje técnico",
    integrationLabel: "Tipos de servicio conectables",
    integrationTypes: [
      "Proveedores de juego",
      "Feeds de cuotas y datos",
      "Métodos de pago",
      "Verificación de identidad",
      "Canales de mensajería",
      "Almacén de datos y BI",
    ],
    ctaTitle: "Vea los módulos en flujos de operación reales.",
    ctaCopy: "Planifiquemos un recorrido de producto según las prioridades de su equipo.",
  },

  technology: {
    layersTitle: "Fuera, el juego. Dentro, la ingeniería.",
    layersCopy: "Cuatro capas, cada una con su responsabilidad. Elija una para ver el detalle.",
    layersLabel: "Capas de la plataforma",
    layersCaption:
      "Esquema conceptual. El modelo de despliegue y el alcance de integración se fijan en el análisis técnico.",
    layers: [
      {
        title: "Experiencia",
        summary: "Interfaz web · Móvil · Administración del operador",
        detail:
          "La cara que ve el jugador y el back office que usa su equipo corren sobre los mismos servicios. Tema y contenido se gestionan por marca.",
        parts: ["Interfaz del jugador", "Back office", "Temas de marca", "Gestión de contenido"],
      },
      {
        title: "Acceso",
        summary: "Capa de API · Autenticación · Autorización",
        detail:
          "Todas las peticiones pasan por una sola puerta. Identidad, permisos y límites de ritmo se aplican ahí; los servicios internos nunca quedan expuestos.",
        parts: ["Pasarela de API", "Sesión e identidad", "Control de roles", "Límite de ritmo"],
      },
      {
        title: "Servicios de negocio",
        summary: "Apuestas deportivas · Casino · Pagos · CRM",
        detail:
          "Cada producto corre en su propio servicio y habla por contratos definidos. Uno se actualiza y los demás siguen sirviendo.",
        parts: ["Apuestas deportivas", "Casino", "Pagos", "CRM", "Afiliación"],
      },
      {
        title: "Datos y control",
        summary: "Datos comunes · Registros de transacciones · Monitorización",
        detail:
          "Monedero, jugador y transacciones viven en una capa común. Cada cambio queda registrado; la salud de los servicios se vigila de forma central.",
        parts: ["Monedero común", "Datos del jugador", "Registro de auditoría", "Monitorización y alertas"],
      },
    ],
    principlesTitle: "Lista para crecer, abierta al cambio.",
    principlesCopy:
      "La plataforma está construida para evolucionar productos por separado, proteger los servicios críticos y poner en marcha nuevas conexiones rápido.",
    principles: [
      { title: "Orientada a API", copy: "Productos y servicios externos se comunican por contratos definidos." },
      { title: "Servicios modulares", copy: "Lo nuevo entra en el alcance sin rehacer todo el sistema." },
      { title: "Observabilidad", copy: "Salud de servicios, flujo de transacciones y señales de error se vigilan de forma central." },
      { title: "Resistencia", copy: "Los flujos críticos se protegen con reintentos controlados, colas y aislamiento." },
    ],
    securityTitle: "La seguridad no es una capa que se añade después.",
    securityCopy:
      "Accesos, registro, protección de datos y aprobaciones operativas forman parte del funcionamiento de la plataforma.",
    securityPoints: [
      "Acceso por rol y mínimo privilegio",
      "Aprobaciones y registros de auditoría en operaciones críticas",
      "Separación de datos de entorno, marca y operación",
      "Monitorización, alertas y respuesta a incidentes",
    ],
    apiTitle: "Contratos legibles, respuestas previsibles.",
    apiCopy:
      "Su equipo sabe a qué se enfrenta antes de empezar. El ejemplo de abajo muestra cómo se ve una operación de monedero.",
    request: "Petición",
    response: "Respuesta",
    sample: "Ejemplo ilustrativo",
    apiNotes: [
      {
        title: "Seguro de reintentar",
        copy: "Una petición con la misma clave no se procesa dos veces; si se corta la conexión, reintentar es seguro.",
      },
      {
        title: "Basado en estados",
        copy: "Cada operación lleva un estado explícito. Los cambios llegan a su sistema por webhook.",
      },
      {
        title: "Versionado",
        copy: "Los contratos se versionan; los campos nuevos se añaden sin romper integraciones existentes.",
      },
    ],
    apiCaption: "Los puntos y campos reales están en la documentación de API que se entrega en el análisis técnico.",
    stepsTitle: "De la conexión al tráfico real, bajo control.",
    integrationSteps: [
      { title: "Contrato", copy: "Alcance de API y modelo de datos" },
      { title: "Entorno de pruebas", copy: "Desarrollar y probar sin riesgo" },
      { title: "Validación", copy: "Escenarios de extremo a extremo" },
      { title: "En producción", copy: "Una apertura vigilada y controlada" },
    ],
    ctaTitle: "Revisemos juntos su arquitectura actual.",
    ctaCopy:
      "Hable de los puntos de integración, los riesgos de migración y el modelo de despliegue recomendado con nuestro equipo técnico.",
  },

  cases: {
    listLabel: "Escenarios",
    need: "La necesidad",
    approach: "El enfoque",
    result: "Resultado buscado",
    phasesLabel: "Fases",
    caseStudies: [
      {
        title: "De cero al primer día en producción.",
        need: "Un equipo que ya tiene resuelta la licencia y la organización y que ahora sale al mercado con todos los productos dirigidos desde un sitio.",
        approach:
          "Primero se fija el alcance básico de producto. El montaje de marca y entornos avanza en paralelo a la integración.",
        result:
          "Flujos esenciales validados, un equipo de operación formado y una lista de apertura acordada.",
        phases: ["Alcance", "Montaje", "Integración", "Ensayo", "Apertura"],
      },
      {
        title: "El mismo negocio, nuevos cimientos.",
        need: "Renovar la base técnica sin interrumpir una operación en marcha.",
        approach:
          "Los flujos de datos, monedero y producto se parten en fases controladas. Cada fase avanza con su plan de vuelta atrás.",
        result: "Un plan de migración medible y una plataforma sobre la que seguir construyendo.",
        phases: ["Inventario", "Ensayo de datos", "Marcha en paralelo", "Subida de tráfico", "Cierre"],
      },
      {
        title: "Segunda marca, la misma columna.",
        need: "Un operador de una sola marca abre una segunda para un mercado nuevo, con su propio equipo y sus propias reglas.",
        approach:
          "El monedero y la capa de datos comunes se mantienen. Marca, restricciones de mercado y permisos se configuran aparte.",
        result: "Infraestructura compartida, identidad de marca propia e informes que muestran las dos juntas.",
        phases: ["Reglas de mercado", "Estructura de marca", "Contenido", "Permisos", "Apertura"],
      },
    ],
    caption: "Los escenarios son ilustrativos; no señalan a un cliente ni a un resultado concreto.",
    methodTitle: "Cada proyecto empieza con las mismas cuatro preguntas.",
    methodCopy:
      "Los criterios de éxito se definen desde el principio; el avance se mide por lo entregado, no por supuestos.",
    methodQuestions: [
      { title: "¿Adónde vamos?", copy: "Mercado objetivo, alcance de producto y prioridades comerciales." },
      { title: "¿Qué protegemos?", copy: "La experiencia actual del jugador, los datos y los flujos críticos." },
      { title: "¿Qué cambiamos?", copy: "Plataforma, proveedores, procesos y responsabilidades del equipo." },
      { title: "¿Cómo lo verificamos?", copy: "Escenarios de prueba, criterios de aceptación y mediciones de apertura." },
    ],
    riskTitle: "Lo que puede salir mal lo hablamos antes.",
    riskCopy:
      "Los cuatro riesgos más habituales de un proyecto de migración y dónde se sitúa el plan en cada uno.",
    riskHead: ["Riesgo", "Medida"],
    riskTable: [
      {
        risk: "Pérdida o descuadre en el traslado de datos",
        measure: "Ensayos repetidos antes de la apertura y comparación registro a registro.",
      },
      {
        risk: "Diferencias en los saldos del monedero",
        measure: "Conciliación de saldos en el momento del cambio; sin diferencia cerrada no se abre tráfico.",
      },
      {
        risk: "Corte el día de la apertura",
        measure: "Subida gradual de tráfico, paneles de vigilancia y pasos de vuelta atrás escritos de antemano.",
      },
      {
        risk: "Que el equipo no se adapte a las nuevas herramientas",
        measure: "Formación por rol y ensayo con casos reales antes de abrir.",
      },
    ],
    outcomesTitle: "Un plan visible. Responsabilidades claras. Una apertura controlada.",
    outcomes: [
      { title: "Un alcance", copy: "Requisitos de producto e integración" },
      { title: "Un calendario", copy: "Dependencias entre equipos" },
      { title: "Un plan de aceptación", copy: "Criterios de prueba y apertura" },
    ],
    ctaTitle: "El próximo caso podría ser el suyo.",
    ctaCopy: "Valoremos juntos sus prioridades para una operación nueva o un cambio de plataforma.",
  },

  packages: {
    listLabel: "Paquetes",
    price: "Oferta a medida",
    planCta: "Hablemos del alcance",
    plans: [
      {
        audience: "Para operaciones nuevas",
        summary: "El alcance básico para abrir su primera marca.",
        items: [
          "Montaje de los productos básicos",
          "Configuración de la marca",
          "Plan de salida a producción",
          "Back office y definición de roles",
          "Formación de apertura",
        ],
      },
      {
        audience: "Para operadores en crecimiento",
        summary: "Todos los productos juntos, los datos del jugador en un sitio.",
        items: [
          "Un ecosistema de producto unificado",
          "CRM y segmentación",
          "Integración ampliada",
          "Gestión de afiliación",
          "Informes avanzados",
        ],
      },
      {
        audience: "Para proyectos de alcance propio",
        summary: "Estructuras multimarca y migraciones de plataforma.",
        items: [
          "Desarrollos a medida",
          "Planificación de la migración",
          "Modelo de operación propio",
          "Varias marcas y mercados",
          "Un equipo de proyecto dedicado",
        ],
      },
    ],
    includedTitle: "Elija el que elija.",
    includedCopy: "El alcance cambia; la forma de trabajar no. Estos cuatro pasos están en todos los proyectos.",
    includedInAll: [
      { title: "Análisis inicial", copy: "Alcance, calendario y responsabilidades quedan por escrito." },
      { title: "Entorno de pruebas", copy: "Las integraciones se prueban sin riesgo antes de producción." },
      { title: "Formación del equipo", copy: "Cada rol aprende sus pantallas con casos reales." },
      { title: "Lista de apertura", copy: "La salida sigue pasos acordados por todos." },
    ],
    compareTitle: "La misma base. Distintas velocidades.",
    compareCopy:
      "Los paquetes no son una lista cerrada de productos, sino un marco para encontrar el alcance de partida adecuado.",
    capability: "Capacidad",
    included: "Incluido",
    notIncluded: "No incluido",
    comparison: [
      { label: "Plataforma básica y administración", cells: ["Incluido", "Incluido", "Incluido"] },
      { label: "Sportsbook / Casino", cells: ["A elegir", "Incluido", "Incluido"] },
      { label: "Operación de pagos", cells: ["Básico", "Avanzado", "A medida"] },
      { label: "CRM y segmentación", cells: ["Inicial", "Avanzado", "A medida"] },
      { label: "Bonos y marketing", cells: ["Básico", "Avanzado", "A medida"] },
      { label: "Gestión de afiliación", cells: ["Opcional", "Incluido", "A medida"] },
      { label: "Riesgo y fraude", cells: ["Básico", "Avanzado", "A medida"] },
      { label: "Módulos de IA", cells: ["—", "Opcional", "Incluido"] },
      { label: "Multimarca", cells: ["—", "Opcional", "Incluido"] },
      { label: "Migración y personalización", cells: ["—", "Opcional", "Incluido"] },
    ],
    faqTitle: "Antes de decidir.",
    faqs: [
      {
        question: "¿Los paquetes son cerrados?",
        answer:
          "No. Son un marco de partida; el alcance final se fija tras el análisis, según sus necesidades de producto, mercado e integración.",
      },
      {
        question: "¿Cuánto se tarda en salir a producción?",
        answer:
          "Depende de cómo esté la licencia, del número de integraciones, del traslado de datos y del proceso de aceptación. Al cerrar el análisis se entrega un plan realista.",
      },
      {
        question: "¿Podemos seguir con nuestros proveedores actuales?",
        answer:
          "Una vez confirmados el encaje técnico y los acuerdos comerciales, la integración de sus proveedores actuales puede entrar en el alcance.",
      },
      {
        question: "¿Está incluido el soporte operativo?",
        answer:
          "Formación, salida a producción y acompañamiento continuo se planifican según el modelo de servicio elegido.",
      },
      {
        question: "¿Podemos empezar con un solo producto?",
        answer:
          "Sí. Los módulos funcionan por separado. Puede empezar solo con pagos o CRM y añadir el resto más adelante.",
      },
      {
        question: "¿Ustedes facilitan la licencia?",
        answer:
          "No. Gamb Gaming es socio tecnológico y operativo; trabajamos solo con operadores que tienen su propia licencia o están tramitándola.",
      },
      {
        question: "¿Cómo se fija el precio?",
        answer:
          "Como el alcance de producto, mercado e integración es distinto en cada operación, el precio se ofrece tras el análisis.",
      },
      {
        question: "¿Dan servicio directo a jugadores?",
        answer:
          "No. Gamb Gaming trabaja solo con empresas; no ofrece juego, apuestas ni soporte de cuenta a usuarios finales.",
      },
    ],
    ctaTitle: "Empiece con lo que necesita, crezca cuando esté listo.",
    ctaCopy: "Busquemos no el paquete correcto, sino el alcance correcto.",
  },

  demo: {
    title: ["Descubramos", "la plataforma juntos."],
    lead: "Flujos reales. Un recorrido por la plataforma con el propio equipo técnico.",
    stepsLabel: "Qué pasa en la reunión",
    steps: [
      { title: "Análisis", copy: "Sus objetivos y prioridades." },
      { title: "Recorrido de producto", copy: "Módulos y flujos de trabajo." },
      { title: "Siguientes pasos", copy: "Alcance y plan de arranque." },
    ],
    fineprint: ["Solo para solicitudes B2B de operadores.", "No se da soporte a jugadores ni a usuarios finales."],
    formTitle: "Cuéntenos cómo es su operación.",
    required: "Los campos marcados con * son obligatorios.",
    fields: {
      name: "Nombre y apellidos",
      namePh: "Su nombre y apellidos",
      role: "Su cargo",
      rolePh: "p. ej. Director de operaciones",
      email: "Correo de trabajo",
      emailPh: "usted@suoperacion.com",
      company: "Empresa / nombre de la operación",
      companyPh: "Escriba el nombre de la operación",
      stage: "Fase del proyecto",
      stageChoose: "Elegir",
      products: "Productos que le interesan",
      message: "En breve, qué necesita",
      messagePh: "Mercado objetivo, alcance de producto y arranque previsto...",
      website: "Sitio web",
      consent:
        "He leído el aviso de privacidad. Acepto que se traten mis datos para responder a mi solicitud.",
    },
    stages: ["Operación nueva", "Cambio de plataforma", "Crecimiento"],
    errors: {
      name: "Escriba su nombre y apellidos.",
      email: "Escriba su correo de trabajo.",
      emailFormat: "Use el formato nombre@empresa.com.",
      company: "Escriba el nombre de la empresa u operación.",
      consent: "Acepte el aviso de privacidad para continuar.",
      send: "No se ha podido enviar su solicitud. Revise la conexión e inténtelo de nuevo.",
    },
    submit: "Enviar solicitud de demo",
    sending: "Enviando…",
    previewHint: "Modo vista previa: el formulario funciona, pero no se envía ninguna solicitud.",
    thanks: "Gracias",
    sentCopy: "Nuestro equipo se pondrá en contacto para revisar su alcance.",
    previewFlag:
      "Esto es una vista previa: el formulario se validó, pero su solicitud no se envió a ningún servidor y no se guardó nada.",
    summary: { company: "Empresa", email: "Correo", stage: "Fase del proyecto", products: "Productos" },
    again: "Crear otra solicitud",
  },

  notfound: {
    title: ["Esta página", "no está aquí."],
    copy: "La dirección puede haber cambiado o estar mal escrita.",
    cta: "Volver al inicio",
  },

  blog: {
    title: ["Notas desde el terreno.", "Para quien busca plataforma."],
    lead: "Elección de plataforma, integración, pagos, riesgo y operación — escrito desde el trabajo real, no desde un folleto.",
    latest: "Últimas entradas",
    readMore: "Leer la entrada",
    minutes: "{n} min de lectura",
    back: "Todas las entradas",
    related: "También puede interesarle",
    empty: "Todavía no hay entradas en este idioma.",
    author: "El equipo de Gamb Gaming",
    updated: "Publicado",
    notFound: "No se ha encontrado esta entrada o ha sido retirada.",
    ctaTitle: "Hablemos de todo esto sobre su propia operación.",
    ctaCopy: "Plantee sus preguntas directamente al equipo técnico en un recorrido por la plataforma.",
  },
};

export default es;
