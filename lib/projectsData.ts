export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    solution: string;
    result: string;
    technologies: string[];
    features: string[];
    image: string;
    gallery: string[];
    link: string;
}

export const PROJECTS: Project[] = [
    {
        id: "primer-proyecto-beta", // ID ÚNICO 1
        title: "Próximo Proyecto A",
        category: "En Desarrollo",
        description: "Actualmente en fase de prototipado rápido de interfaces.",
        solution: "Evaluando el uso de WebSockets para interacción en tiempo real.",
        result: "Lanzamiento previsto para el próximo trimestre.",
        technologies: [],
        features: ["Arquitectura de Datos", "UX Research"],
        image: "",
        gallery: [],
        link: "#",
    },
    {
        id: "segundo-proyecto-beta", // ID ÚNICO 2
        title: "Próximo Proyecto B",
        category: "En Desarrollo",
        description: "Actualmente en fase de prototipado rápido de interfaces.",
        solution: "Evaluando el uso de WebSockets para interacción en tiempo real.",
        result: "Lanzamiento previsto para el próximo trimestre.",
        technologies: [],
        features: ["Prototipado Swift", "Real-time Testing"],
        image: "",
        gallery: [],
        link: "#",
    }
];
