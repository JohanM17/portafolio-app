export interface VersionLog {
    version: string;
    date: string;
    title: string;
    description: string;
    features: string[];
}

export const changelog: VersionLog[] = [
    {
        version: "Beta 1.6",
        date: "Abril 2026",
        title: "Portafolio de Proyectos y Experiencia Interactiva",
        description: "Lanzamiento de la aplicación de Proyectos con un sistema de visualización avanzada y galería inmersiva.",
        features: [
            "Nueva App: 'Proyectos' con arquitectura Master-Detail.",
            "Galería de imágenes con Lightbox y navegación por teclado.",
            "Adaptación de UI para dispositivos móviles basada en secciones expandibles.",
            "Integración de 'Proyectos' en el flujo de navegación del sistema.",
            "Manejo de estados dinámicos para proyectos con imágenes y galerías pendientes."
        ]
    },
    {
        version: "Beta 1.5",
        date: "Abril 2026",
        title: "Ecosistema Tecnológico e Interacción",
        description: "Lanzamiento de la aplicación Stack con un sistema de exploración profundo de herramientas y entornos de desarrollo.",
        features: [
            "Nueva App: 'Stack' con navegación intuitiva por categorías especializadas.",
            "Implementación del panel de detalles interactivo (Knowledge Panel).",
            "Sincronización de base de conocimientos técnica para lenguajes y frameworks.",
            "Integración visual de IDEs y utilidades de inteligencia artificial.",
            "Optimización de assets para una carga fluida de la biblioteca de tecnologías."
        ]
    },
    {
        version: "Beta 1.4",
        date: "Febrero 2026",
        title: "Accesibilidad Profesional e Integración de CV",
        description: "Habilitación del acceso directo al Currículum Vitae (CV) y limpieza de componentes modales obsoletos.",
        features: [
            "Conexión del botón 'Ver CV' directamente al archivo PDF en public.",
            "Eliminación del sistema de modales temporales para CV (Refactorización).",
            "Centralización de la ruta del CV en personalInfo (lib/data.ts).",
            "Optimización de los enlaces sociales y sus metadatos.",
            "Mejora en la experiencia de descarga y visualización de documentos."
        ]
    },
    {
        version: "Beta 1.3",
        date: "Febrero 2026",
        title: "Pila Tecnológica y Habilidades",
        description: "Lanzamiento de la aplicación de Skills con categorización técnica y optimización de la experiencia táctil.",
        features: [
            "Nueva App: 'Skills' basada en sistema de acordeones interactivos.",
            "Visualización de habilidades técnicas, de ingeniería y complementarias.",
            "Optimización del scroll y comportamiento touch para usuarios móviles.",
            "Vinculación inteligente entre áreas de competencia y Stack Técnico.",
            "Estandarización de assets de iconos y rutas de fondo."
        ]
    },
    {
        version: "Beta 1.2",
        date: "Febrero 2026",
        title: "Expansión de Contenido y Arquitectura",
        description: "Lanzamiento de la primera aplicación interna completa ('Quién Soy') y refactorización modular para soportar escalabilidad.",
        features: [
            "Nueva App: 'Quién Soy' con diseño inmersivo y glassmorphism.",
            "Arquitectura de Layouts independientes para Apps full-screen.",
            "Optimización de assets gráficos con conversión automática a WebP.",
            "Mejoras de accesibilidad y contraste en Modo Oscuro.",
            "Sistema de datos centralizado para fácil mantenimiento."
        ]
    },
    {
        version: "Beta 1.1",
        date: "Febrero 2026",
        title: "Refinamiento Visual para Mobile y Correcciones",
        description: "Actualización enfocada en la estabilidad de la interfaz móvil y la coherencia del sistema de diseño.",
        features: [
            "Corrección de bugs visuales en el Dock (overflow en móviles).",
            "Implementación de scroll horizontal suave (snap) para navegación táctil.",
            "Soporte completo de Modo Oscuro en el menú hamburguesa.",
            "Ajustes de espaciado y padding para mejor experiencia en desktop.",
            "Mejoras en SEO y metadatos del sitio."
        ]
    },
    {
        version: "Beta 1.0",
        date: "Enero 2026",
        title: "Lanzamiento Inicial (MVP)",
        description: "Versión fundacional del portafolio con concepto de 'Sistema Operativo Web'.",
        features: [
            "Home estilo Launcher con accesos directos visuales.",
            "Dock de aplicaciones interactivo y animado.",
            "Sistema de temas dual: Modo Color (Galaxia) y Modo Oscuro (Minimalista).",
            "Diseño totalmente responsivo.",
            "Componentes base de UI y animaciones de entrada."
        ]
    }
];
