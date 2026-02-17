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
        description: "Perfil corto y enfoque profesional",
        icon: "/Iconos-apps/Icono-QuienSoy-SF.png",
        href: "/apps/about",
    },
    {
        id: "skills",
        title: "Skills",
        description: "Habilidades técnicas visuales",
        icon: "/Iconos-apps/Icono-Skills-SF.png",
        href: "/apps/skills",
    },
    {
        id: "stack",
        title: "Stack",
        description: "Tecnologías usadas (frontend/backend/tools)",
        icon: "/Iconos-apps/Icono-Stack-SF.png",
        href: "/apps/stack",
    },
    {
        id: "projects",
        title: "Proyectos",
        description: "Cards de proyectos + stack",
        icon: "/Iconos-apps/Icono-Proyectos-SF.png",
        href: "/apps/projects",
    },
    {
        id: "architecture",
        title: "Arquitectura",
        description: "Diagramas y decisiones técnicas",
        icon: "/Iconos-apps/Icono-Arquitectura-SF.png",
        href: "/apps/architecture",
    },
    {
        id: "experience",
        title: "Experiencia",
        description: "Prácticas, roles, tareas clave",
        icon: "/Iconos-apps/Icono-Experiencia-SF.png",
        href: "/apps/experience",
    },
    {
        id: "timeline",
        title: "Timeline",
        description: "Línea de tiempo académica-laboral",
        icon: "/Iconos-apps/Icono-Timeline-SF.png",
        href: "/apps/timeline",
    },
    {
        id: "education",
        title: "Formación",
        description: "Universidad, semestre, estudios",
        icon: "/Iconos-apps/Icono-Formacion-SF.png",
        href: "/apps/education",
    },
    {
        id: "certificates",
        title: "Certificados",
        description: "Cursos, constancias, badges",
        icon: "/Iconos-apps/Icono-Certificados-SF.png",
        href: "/apps/certificates",
    },
    {
        id: "playground",
        title: "Playground",
        description: "Pruebas, experimentos, ideas",
        icon: "/Iconos-apps/Icono-Playground-SF.png",
        href: "/apps/playground",
    },
    {
        id: "about-app",
        title: "About App",
        description: "Cómo está hecho el portafolio",
        icon: "/Iconos-apps/Icono-About-SF.png",
        href: "/apps/about-app",
    },
    {
        id: "contact",
        title: "Contacto",
        description: "Redes, email, formulario simple",
        icon: "/Iconos-apps/Icono-Contacto-SF.png",
        href: "/apps/contact",
    },
];

// Información personal 
export const personalInfo = {
    name: "Johan Molina",
    title: "Full-Stack Developer Junior",
    subtitle: "Estudiante de ingeniería de Software - V Semestre",
    description:
        "Estudiante de Ingeniería de Software y desarrollador full \
        stack en proceso, con fuerte enfoque en diseño y arquitectura de software.",
    email: "[tu-email@ejemplo.com]",
    location: "Colombia · Armenia, Quindío",
    phone: "[Tu Teléfono]",
    github: "https://github.com/JohanM17",
    linkedin: "https://www.linkedin.com/in/johan-molina-7a7a41381/",
    cv: "/CV_Molina_Johan_2026.pdf",
};
