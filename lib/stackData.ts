export interface Technology {
    name: string;
    icon: string;
    idDetail?: string; // ID específico para el Knowledge Panel si es diferente al icono
}

export interface StackCategory {
    id: string;
    title: string;
    description: string;
    icon: string; // Nombre del icono de Lucide o similar
    color: string; // Color para el glow (ej: 'blue', 'emerald', 'orange')
    techs: Technology[];
}

export const stackData: StackCategory[] = [
    {
        id: "lenguajes",
        title: "Lenguajes",
        description: "Fundamentos y lenguajes de programación",
        icon: "Code2",
        color: "blue",
        techs: [
            { name: "Java", icon: "java" },
            { name: "JavaScript", icon: "js" },
            { name: "TypeScript", icon: "ts" },
            { name: "Python", icon: "py" }
        ]
    },
    {
        id: "frontend",
        title: "Frontend",
        description: "Construcción de interfaces modernas",
        icon: "Layout",
        color: "emerald",
        techs: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Angular", icon: "angular" },
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" }
        ]
    },
    {
        id: "backend",
        title: "Backend",
        description: "Lógica de servidor y APIs",
        icon: "Server",
        color: "orange",
        techs: [
            { name: "Node.js", icon: "nodejs" },
            { name: "Express", icon: "express" },
            { name: "Spring", icon: "spring" }
        ]
    },
    {
        id: "database",
        title: "Bases de Datos",
        description: "Persistencia y modelado",
        icon: "Database",
        color: "purple",
        techs: [
            { name: "PostgreSQL", icon: "postgres" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "MySQL", icon: "mysql" }
        ]
    },
    {
        id: "cloud",
        title: "DevOps & Cloud",
        description: "Despliegue e infraestructura",
        icon: "Cloud",
        color: "cyan",
        techs: [
            { name: "Docker", icon: "docker" },
            { name: "Linux", icon: "linux" },
            { name: "AWS", icon: "aws" },
            { name: "Vercel", icon: "vercel" }
        ]
    },
    {
        id: "tools",
        title: "Herramientas de Entorno",
        description: "Editores y utilidades de desarrollo",
        icon: "Wrench",
        color: "rose",
        techs: [
            { name: "VS Code", icon: "vscode" },
            { name: "Antigravity AI", icon: "", idDetail: "antigravity" },
            { name: "IntelliJ IDEA", icon: "idea" },
            { name: "PyCharm", icon: "pycharm" },
            { name: "Git", icon: "git" },
            { name: "Postman", icon: "postman" },
            { name: "Figma", icon: "figma" },
            { name: "UML", icon: "", idDetail: "uml" }
        ]
    },
    {
        id: "methodologies",
        title: "Metodologías",
        description: "Agilidad y gestión de flujo",
        icon: "Layers",
        color: "amber",
        techs: [
            { name: "Scrum", icon: "", idDetail: "scrum" },
            { name: "Kanban", icon: "", idDetail: "kanban" }
        ]
    },
    {
        id: "ai",
        title: "IA Ecosystem",
        description: "Inteligencia Artificial aplicada al desarrollo",
        icon: "Bot",
        color: "indigo",
        techs: [
            { name: "ChatGPT", icon: "", idDetail: "chatgpt" },
            { name: "Claude AI", icon: "anthropic", idDetail: "claude" },
            { name: "GitHub Copilot", icon: "githubcopilot", idDetail: "copilot" }
        ]
    }
];
