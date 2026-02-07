// DATOS DEL PORTAFOLIO
// Este archivo centraliza toda la información del portafolio.
// Cambios aquí se reflejan automáticamente en toda la aplicación.
//Como el principio SRP, solo hace una cosa que es almacenar archivos

//Tipo app y sus datos, otroa archivos pueden usarlo
export type App = {
    id: string;
    title: string;
    description: string;
    icon: string;
    href: string;
};

// Configuración de las apps del launcher
export const apps: App[] = [
    {
        id: "about",
        title: "Quién soy",
        description: "Mi presentación y resumen",
        icon: "👤",
        href: "/about",
    },
    {
        id: "education",
        title: "Formación",
        description: "Educación y cursos",
        icon: "🎓",
        href: "/education",
    },
    {
        id: "experience",
        title: "Experiencia",
        description: "Trabajo y trayectoria",
        icon: "💼",
        href: "/experience",
    },
    {
        id: "projects",
        title: "Proyectos",
        description: "Mis proyectos destacados",
        icon: "🚀",
        href: "/projects",
    },
    {
        id: "certificates",
        title: "Certificados",
        description: "Certificaciones obtenidas",
        icon: "🏆",
        href: "/certificates",
    },
    {
        id: "contact",
        title: "Contacto",
        description: "Contactame aquí",
        icon: "📧",
        href: "/contact",
    },
];

// Información personal 
export const personalInfo = {
    name: "[Tu Nombre]",
    title: "[Tu Título/Rol]",
    description:
        "Descripción breve de quién eres y qué haces",
    email: "[tu-email@ejemplo.com]",
    location: "[Tu Ciudad]",
    phone: "[Tu Teléfono]",
};

// Contenido de "Quién soy"
export const aboutContent = {
    title: "Quién soy",
    description: "Aquí va tu presentación personal...",
    content: `
    Soy [Tu Nombre], un desarrollador apasionado por crear soluciones
    web modernas y escalables. Con experiencia en [tus tecnologías],
    me enfoco en escribir código limpio y mantenible.
    `,
};

// Contenido de "Formación"
export const educationContent = {
    title: "Formación",
    items: [
        {
            school: "[Universidad/Institución]",
            degree: "[Grado/Certificado]",
            field: "[Campo de estudio]",
            year: "2023",
            description: "Descripción opcional del programa",
        },
        {
            school: "[Otra Institución]",
            degree: "[Otro Grado]",
            field: "[Campo]",
            year: "2024",
            description: "Otro programa de formación",
        },
    ],
};

// Contenido de "Experiencia"
export const experienceContent = {
    title: "Experiencia Laboral",
    items: [
        {
            company: "[Nombre Empresa]",
            position: "[Tu Cargo]",
            duration: "2023 - Presente",
            description:
                "Descripción de tus responsabilidades y logros principales",
            technologies: ["React", "Next.js", "TypeScript"],
        },
        {
            company: "[Otra Empresa]",
            position: "[Otro Cargo]",
            duration: "2022 - 2023",
            description: "Otra experiencia laboral",
            technologies: ["JavaScript", "CSS", "HTML"],
        },
    ],
};

// Contenido de "Proyectos"
export const projectsContent = {
    title: "Proyectos Destacados",
    items: [
        {
            name: "[Nombre del Proyecto 1]",
            description: "Descripción breve del proyecto",
            technologies: ["React", "TypeScript", "Tailwind"],
            link: "https://ejemplo.com",
            github: "https://github.com/usuario/proyecto1",
            image: "/proyecto1.png",
        },
        {
            name: "[Nombre del Proyecto 2]",
            description: "Descripción breve del proyecto",
            technologies: ["Next.js", "PostgreSQL", "Node.js"],
            link: "https://ejemplo2.com",
            github: "https://github.com/usuario/proyecto2",
            image: "/proyecto2.png",
        },
    ],
};

// Contenido de "Certificados"
export const certificatesContent = {
    title: "Certificaciones",
    items: [
        {
            name: "[Nombre del Certificado]",
            issuer: "[Institución que lo otorgó]",
            date: "2024",
            link: "https://ejemplo.com/certificado",
            credential: "[ID o credencial]",
        },
        {
            name: "[Otro Certificado]",
            issuer: "[Institución]",
            date: "2023",
            link: "https://ejemplo.com/cert2",
            credential: "[ID]",
        },
    ],
};

// Contenido de "Contacto"
export const contactContent = {
    title: "Contacto",
    description: "Ponte en contacto conmigo a través de estos canales:",
    links: [
        { label: "Email", icon: "📧", href: "mailto:[tu-email@ejemplo.com]" },
        { label: "GitHub", icon: "🐙", href: "https://github.com/tuusuario" },
        {
            label: "LinkedIn",
            icon: "💼",
            href: "https://linkedin.com/in/tuusuario",
        },
        { label: "Twitter", icon: "𝕏", href: "https://twitter.com/tuusuario" },
    ],
};
