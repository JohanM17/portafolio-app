export interface TechDetail {
    id: string;
    name: string;
    summary: string;
    type: string;
    useCase: string;
    benefits: string[];
}

export const techDetails: Record<string, TechDetail> = {
    // LENGUAJES
    java: {
        id: "java",
        name: "Java",
        summary: "Es un lenguaje de programación de alto nivel, orientado a objetos, diseñado para tener la menor cantidad posible de dependencias de implementación. Su lema es 'escribir una vez, ejecutar en cualquier lugar' (WORA).",
        type: "Lenguaje de Programación / Plataforma de código abierto",
        useCase: "Desarrollo de aplicaciones empresariales, sistemas de back-end robustos y aplicaciones Android nativas.",
        benefits: ["Seguridad robusta", "Multihilo nativo", "Enorme comunidad y librerías"]
    },
    js: {
        id: "js",
        name: "JavaScript",
        summary: "Es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.",
        type: "Lenguaje de Programación (Frontend/Backend)",
        useCase: "Creación de interfaces de usuario altamente interactivas y servidores web mediante entornos como Node.js.",
        benefits: ["Ubicuidad en navegadores", "Gran velocidad de ejecución", "Versatilidad total"]
    },
    ts: {
        id: "ts",
        name: "TypeScript",
        summary: "Es un lenguaje de programación libre y de código abierto desarrollado por Microsoft. Es un superconjunto de JavaScript que añade tipado estático y objetos basados en clases.",
        type: "Superconjunto de JavaScript (Superset)",
        useCase: "Desarrollo de aplicaciones JavaScript a gran escala con detección de errores en tiempo de compilación.",
        benefits: ["Tipado estático seguro", "Mejor mantenimiento de código", "Compatible con todo el ecosistema JS"]
    },
    py: {
        id: "py",
        name: "Python",
        summary: "Es un lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código. Se utiliza bajo una licencia de código abierto aprobada por la OSI.",
        type: "Lenguaje de Programación Multiparámetro",
        useCase: "Desarrollo web, scripts de automatización, análisis de datos e inteligencia artificial.",
        benefits: ["Sintaxis clara y legible", "Bibliotecas extensas", "Rápido de prototipar"]
    },

    // FRONTEND
    react: {
        id: "react",
        name: "React",
        summary: "Es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página (SPA).",
        type: "Biblioteca de JavaScript (UI)",
        useCase: "Construcción de componentes visuales reutilizables y gestión eficiente del estado en aplicaciones web modernas.",
        benefits: ["DOM Virtual de alto rendimiento", "Ecosistema vasto", "Arquitectura basada en componentes"]
    },
    nextjs: {
        id: "nextjs",
        name: "Next.js",
        summary: "Es un marco web de desarrollo de código abierto creado por Vercel. Permite funcionalidades como la representación del lado del servidor (SSR) y la generación de sitios estáticos (SSG).",
        type: "Framework de React",
        useCase: "Aplicaciones web escalables, SEO amigable, blogs, e-commerce y sistemas que requieren carga ultra-rápida.",
        benefits: ["Renderizado híbrido", "Optimización de imágenes automática", "Rutas basadas en archivos"]
    },
    angular: {
        id: "angular",
        name: "Angular",
        summary: "Es un framework para aplicaciones web desarrollado en TypeScript, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página (SPA).",
        type: "Marco de trabajo web (Opinionated Framework)",
        useCase: "Aplicaciones robustas de nivel empresarial con arquitecturas complejas y equipos grandes.",
        benefits: ["Estructura modular", "Enlace de datos bidireccional", "Inyección de dependencias potente"]
    },
    html: {
        id: "html",
        name: "HTML5",
        summary: "Es un lenguaje de marcado de hipertexto que se utiliza para el desarrollo de páginas de Internet. Define la estructura básica y el significado del contenido web.",
        type: "Lenguaje de Marcado Estándar",
        useCase: "Proporcionar el esqueleto y la semántica de cualquier sitio o aplicación web en el navegador.",
        benefits: ["Estándar universal", "Soporte multimedia nativo", "SEO y accesibilidad"]
    },
    css: {
        id: "css",
        name: "CSS3",
        summary: "Es un lenguaje de diseño gráfico para definir el diseño, los colores y las fuentes de un documento escrito en un lenguaje de marcado como HTML.",
        type: "Lenguaje de Hojas de Estilo",
        useCase: "Estilización visual completa, layouts adaptables y animaciones fluidas en la web.",
        benefits: ["Diseño responsivo", "Transiciones y animaciones", "Separación de diseño y contenido"]
    },

    // BACKEND
    nodejs: {
        id: "nodejs",
        name: "Node.js",
        summary: "Es un entorno en tiempo de ejecución de JavaScript de código abierto, multiplataforma, basado en el motor V8 de Google Chrome.",
        type: "Entorno de ejecución de JavaScript (Runtime)",
        useCase: "Backend escalable, APIs en tiempo real y microservicios orientados a alto tráfico.",
        benefits: ["No bloqueante (E/S asíncrona)", "Un solo lenguaje (JS) en todo el stack", "NPM como gestor de paquetes masivo"]
    },
    express: {
        id: "express",
        name: "Express.js",
        summary: "Es un marco de desarrollo de aplicaciones web minimalista y flexible para Node.js que proporciona un conjunto robusto de características para aplicaciones web y móviles.",
        type: "Framework de Backend para Node.js",
        useCase: "Construcción rápida de APIs RESTful y aplicaciones web con un alto nivel de flexibilidad.",
        benefits: ["Minimalista y rápido", "Extensible mediante middleware", "Fácil integración con bases de datos"]
    },
    spring: {
        id: "spring",
        name: "Spring",
        summary: "Es un marco de trabajo de código abierto de desarrollo de aplicaciones para la plataforma Java, que proporciona infraestructura para el desarrollo de software confiable.",
        type: "Marco de trabajo empresarial (Java Ecosystem)",
        useCase: "Sistemas financieros, aplicaciones gubernamentales y servicios back-end de alta disponibilidad.",
        benefits: ["Gran modularidad", "Seguridad de nivel bancario", "Gestión de transacciones eficiente"]
    },

    // DATABASE
    postgres: {
        id: "postgres",
        name: "PostgreSQL",
        summary: "Es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto, con más de 30 años de desarrollo activo.",
        type: "Base de Datos Relacional (RDBMS)",
        useCase: "Aplicaciones que requieren integridad de datos compleja, transacciones masivas y estabilidad.",
        benefits: ["Conformidad ACID absoluta", "Extensibilidad avanzada", "Soporte nativo de JSONB"]
    },
    mongodb: {
        id: "mongodb",
        name: "MongoDB",
        summary: "Es una base de datos NoSQL orientada a documentos de código abierto, escala mediante sharding y utiliza un formato binario similar a JSON (BSON).",
        type: "Base de Datos NoSQL (Documental)",
        useCase: "Big Data, sistemas de gestión de contenido y aplicaciones con esquemas de datos muy variables.",
        benefits: ["Escalabilidad horizontal", "Esquema flexible", "Velocidad en consultas masivas"]
    },
    mysql: {
        id: "mysql",
        name: "MySQL",
        summary: "Es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual (GPL/Comercial) y es propiedad de Oracle Corporation.",
        type: "Base de Datos Relacional (RDBMS)",
        useCase: "Sistemas de gestión de contenidos (WordPress), aplicaciones LAMP y bases de datos web estándar.",
        benefits: ["Gran velocidad de lectura", "Extremadamente popular", "Fácil de administrar"]
    },

    // CLOUD
    docker: {
        id: "docker",
        name: "Docker",
        summary: "Es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción.",
        type: "Plataforma de Contenedores",
        useCase: "Empaquetado de aplicaciones para que se ejecuten idénticamente en cualquier entorno: local, testing o producción.",
        benefits: ["Portabilidad total", "Aislamiento de recursos", "Despliegues ligeros y rápidos"]
    },
    linux: {
        id: "linux",
        name: "Linux",
        summary: "Es una familia de sistemas operativos tipo Unix que se basa en un kernel desarrollado originalmente por Linus Torvalds. Se distribuye bajo licencias de software libre.",
        type: "Sistema Operativo de Código Abierto",
        useCase: "Servidores web, infraestructura en la nube, supercomputadoras y dispositivos IoT.",
        benefits: ["Código abierto y gratuito", "Estabilidad extrema", "Seguridad avanzada"]
    },
    aws: {
        id: "aws",
        name: "Amazon Web Services",
        summary: "Es una plataforma de nube líder a nivel mundial que ofrece más de 200 servicios integrales de centros de datos de forma global.",
        type: "Proveedor de Computación en la Nube (IaaS/PaaS)",
        useCase: "Alojamiento de aplicaciones a escala global, almacenamiento masivo de datos e inteligencia artificial.",
        benefits: ["Escalabilidad infinita", "Pague por lo que use", "Ecosistema de servicios masivo"]
    },
    vercel: {
        id: "vercel",
        name: "Vercel",
        summary: "Es una plataforma para desarrolladores frontend centrada en el despliegue y alojamiento de aplicaciones web (especialmente Next.js) de forma rápida y sencilla.",
        type: "Plataforma de Despliegue en la Nube (PaaS)",
        useCase: "Despliegue automático de aplicaciones web modernas con CI/CD integrado y una red global de distribución (edge).",
        benefits: ["Despliegue instantáneo con Git", "Rendimiento óptimo para Next.js", "SSL y redirecciones automáticas"]
    },

    // TOOLS (IDEs & TOOLS)
    vscode: {
        id: "vscode",
        name: "VS Code",
        summary: "Es un editor de código fuente desarrollado por Microsoft para Windows, Linux y macOS. Incluye soporte para depuración y control de Git integrado.",
        type: "Editor de Código Profesional",
        useCase: "Codificación ligera y extensible para casi cualquier lenguaje de programación del planeta.",
        benefits: ["Ecosistema masivo de extensiones", "IntelliSense inteligente", "Integración nativa con Git"]
    },
    antigravity: {
        id: "antigravity",
        name: "Antigravity AI",
        summary: "Es una entidad de inteligencia artificial avanzada diseñada para colaborar con desarrolladores en la orquestación y construcción de software de alta fidelidad en tiempo récord.",
        type: "Software Orchestration AI",
        useCase: "Aceleración extrema del ciclo de desarrollo, diseño de arquitecturas reactivas y resolución de bugs complejos.",
        benefits: ["Velocidad de entrega 10x", "Análisis estructural profundo", "Pair-programming de alto nivel"]
    },
    idea: {
        id: "idea",
        name: "IntelliJ IDEA",
        summary: "Es un entorno de desarrollo integrado (IDE) para el desarrollo de software, especialmente para el lenguaje de programación Java, desarrollado por JetBrains.",
        type: "IDE de Nivel Profesional",
        useCase: "Sistemas empresariales complejos y aplicaciones Java/Kotlin de alto rendimiento.",
        benefits: ["Análisis de código avanzado", "Refactorización segura", "Potente depurador integrado"]
    },
    pycharm: {
        id: "pycharm",
        name: "PyCharm",
        summary: "Es un entorno de desarrollo integrado utilizado por programadores para el lenguaje de programación Python, que proporciona análisis de código y depurador gráfico.",
        type: "IDE Especializado (Python Ecosystem)",
        useCase: "Ciencia de datos, aplicaciones web extensas con Django/Flask y scripts complejos de automatización.",
        benefits: ["Asistencia inteligente para Python", "Soporte para frameworks web", "Entorno de testing integrado"]
    },
    git: {
        id: "git",
        name: "Git",
        summary: "Es un sistema de control de versiones distribuido diseñado para manejar proyectos grandes y pequeños con velocidad y eficiencia.",
        type: "Control de Versiones (VCS)",
        useCase: "Rastreo de cambios en el código fuente, colaboración en equipo y gestión de ramas de desarrollo.",
        benefits: ["Historial completo de cambios", "Trabajo colaborativo", "Seguridad contra pérdida de datos"]
    },
    postman: {
        id: "postman",
        name: "Postman",
        summary: "Es una plataforma colaborativa para el desarrollo de APIs. Simplifica cada paso del ciclo de vida de una API, desde el diseño hasta la documentación y las pruebas.",
        type: "Plataforma de Desarrollo de APIs",
        useCase: "Pruebas de endpoints REST, automatización de tests de back-end y documentación interactiva.",
        benefits: ["Colecciones reutilizables", "Ambientes de variables", "Tests automáticos rápidos"]
    },
    figma: {
        id: "figma",
        name: "Figma",
        summary: "Es una herramienta de diseño colaborativa basada en la nube para el diseño de interfaces de usuario y experiencias de usuario (UI/UX).",
        type: "Herramienta de UI/UX Design",
        useCase: "Prototipado interactivo, diseño de sistemas de componentes y transferencia fluida de diseño a desarrollo.",
        benefits: ["Colaboración en tiempo real", "Bibliotecas de componentes", "Fácil exportación de assets"]
    },

    // METHODOLOGIES
    scrum: {
        id: "scrum",
        name: "Scrum",
        summary: "Es un marco de trabajo ágil para la gestión de proyectos de desarrollo de software complejos con entregas iterativas y feedback continuo.",
        type: "Agile Framework",
        useCase: "Organización de equipos para entregas de valor constantes y adaptación dinámica al cambio.",
        benefits: ["Transparencia total", "Feedback temprano", "Mejora continua en equipo"]
    },
    kanban: {
        id: "kanban",
        name: "Kanban",
        summary: "Es un sistema visual para gestionar el trabajo a medida que avanza a través de un proceso, minimizando cuellos de botella.",
        type: "Visual Workflow Management",
        useCase: "Optimización del flujo de entrega y balanceo de carga en tiempos de desarrollo.",
        benefits: ["Visualización del flujo", "Enfoque en terminación", "Reducción de tareas inconclusas"]
    },
    uml: {
        id: "uml",
        name: "UML",
        summary: "El Lenguaje Unificado de Modelado es el lenguaje estándar para la visualización, especificación y documentación de sistemas de software.",
        type: "Modeling Language",
        useCase: "Diseño de diagramas de clase, secuencia y arquitectura para comunicar estructuras técnicas.",
        benefits: ["Estandarización técnica", "Claridad arquitectónica", "Comunicación entre dev/negocio"]
    },

    // AI ECOSYSTEM
    chatgpt: {
        id: "chatgpt",
        name: "ChatGPT",
        summary: "Modelo de lenguaje avanzado desarrollado por OpenAI, capaz de asistir en lógica compleja y razonamiento técnico.",
        type: "Advanced LLM Assistant",
        useCase: "Brainstorming de arquitecturas, generación de scripts rápidos y resolución de dudas técnicas 24/7.",
        benefits: ["Razonamiento lógico fluido", "Multilingüe", "Rápida generación de ideas"]
    },
    claude: {
        id: "claude",
        name: "Claude AI",
        summary: "Asistente de IA de Anthropic enfocado en la seguridad, honestidad y la generación de código limpio de alto nivel.",
        type: "Reliable AI Model",
        useCase: "Refactorización de código crítico y análisis de documentación técnica de gran tamaño.",
        benefits: ["Contexto masivo", "Tono profesional", "Fiabilidad en tareas críticas"]
    },
    copilot: {
        id: "copilot",
        name: "GitHub Copilot",
        summary: "Tu pair programmer de IA que vive dentro del editor, entrenado con billones de líneas de código open source.",
        type: "AI Pair Programmer",
        useCase: "Autocompletado predictivo de funciones y sugerencia de patrones de diseño en tiempo real.",
        benefits: ["Ahorro de teclado", "Sugiere buenas prácticas", "Aprende de tu flujo de trabajo"]
    }
};
