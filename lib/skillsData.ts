export interface SkillItem {
    name: string;
    level?: string; // Por si quieres poner "Avanzado", "Intermedio", etc.
}

export interface SkillCategory {
    id: string;
    title: string;
    icon: string;
    skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
    {
        id: "fundamentos",
        title: "Fundamentos Técnicos",
        icon: "/apps/skills/icon-fundamentos.png",
        skills: [
            { name: "Estructuración de proyectos desde cero" },
            { name: "Modelado de bases de datos SQL y NoSQL" },
            { name: "Diseño de APIs REST" },
            { name: "Organización y arquitectura básica de aplicaciones" },
            { name: "Control de versiones con Git" },
            { name: "Análisis y comprensión de código existente" },
            { name: "Resolución estructurada de problemas" },
            { name: "POO (Programación Orientada a Objetos)" },
            { name: "Arquitectura en capas (MVC, modularización) Microservicios basico" }
        ]
    },
    {
        id: "web",
        title: "Desarrollo Web",
        icon: "/apps/skills/icon-web.png",
        skills: [
            { name: "Integración frontend-backend" },
            { name: "Manejo básico-intermedio de estado" },
            { name: "Diseño UI estructurado y funcional" },
            { name: "Optimización básica de rendimiento" },
            { name: "Implementación de roles y permisos" },
            { name: "Manejo de autenticación basada en tokens (JWT)"},
            { name: "Consistencia entre UI y lógica de negocio"}
        ]
    },
    {
        id: "seguridad",
        title: "Seguridad & Cloud (Aprendiendo dia a dia)",
        icon: "/apps/skills/icon-seguridad.png",
        skills: [
            { name: "Principios de autenticación y autorización" },
            { name: "Protección básica de rutas" },
            { name: "Manejo de variables sensibles" },
            { name: "Conceptos fundamentales de cloud computing" },
            { name: "Experiencia inicial en despliegue (AWS / Vercel)" }
        ]
    },
    {
        id: "ingenieria",
        title: "Pensamiento de Ingeniería",
        icon: "/apps/skills/icon-ingenieria.png",
        skills: [
            { name: "Enfoque en análisis antes de implementación" },
            { name: "Comprensión de modelos de negocio" },
            { name: "Diseño previo mediante diagramas" },
            { name: "Interés profundo en funcionamiento interno de sistemas" },
            { name: "Adaptabilidad ante cambios de requerimientos" },
            { name: "Aplicación práctica de patrones de diseño" },
            { name: "Trabajo bajo metodología Scrum" }
        ]
    },
    {
        id: "complementario",
        title: "Complementario",
        icon: "/Iconos-Header/Icono_Idioma-SF.png",
        skills: [
            { name: "Inglés técnico intermedio (lectura y documentación)" },
            { name: "Aprendizaje autodidacta estructurado" },
            { name: "Trabajo colaborativo y adaptación a equipos" },
            { name: "Comunicación técnica clara"},
            { name: "Pensamiento crítico"},
            { name: "Uso estratégico de IA como apoyo en desarrollo y aprendizaje técnico"}
        ]
    }
];
