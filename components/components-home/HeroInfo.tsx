// Componente para la información principal (Título, Subtítulo, Descripción)
import { personalInfo } from "@/lib/data";

type HeroInfoProps = {
    isDark: boolean;
    containerClass: string; // Clases para el contenedor (alineación, márgenes, etc.)
    titleClass?: string;    // Opcional: Clases específicas para el H1
    subtitleClass?: string; // Opcional: Clases específicas para el subtítulo
};

export function HeroInfo({
    isDark,
    containerClass,
    titleClass = "text-3xl font-semibold leading-tight",
    subtitleClass = "text-base font-medium -mt-2 mb-2 ml-1"
}: HeroInfoProps) {
    return (
        <section className={containerClass}>
            {/* Título Principal */}
            <h1 className={titleClass}>
                <span className={isDark ? 'text-white' : 'text-emerald-200'}>
                    {personalInfo.title}
                </span>
            </h1>

            {/* Subtítulo (ej: V Semestre) */}
            {personalInfo.subtitle && (
                <span className={`${subtitleClass} ${isDark ? 'text-white' : 'text-emerald-300'}`}>
                    {personalInfo.subtitle}
                </span>
            )}

            {/* Ubicación */}
            <p className="text-base text-white mt-2">
                {personalInfo.location}
            </p>

            {/* Descripción Profesional */}
            <p className="text-base text-white mt-2">
                {personalInfo.description}
            </p>
        </section>
    );
}
