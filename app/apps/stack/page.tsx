"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useDarkMode } from "../../../hooks/useDarkMode";

// IMPORTACIÓN DE DATOS DEL STACK Y DETALLES TÉCNICOS
import { stackData, StackCategory, Technology } from "../../../lib/stackData";
import { techDetails, TechDetail } from "../../../lib/techDetails";

// LIBRERÍA DE ICONOS: Lucide para elementos de navegación y UI
import {
    Code2,
    Layout,
    Server,
    Database,
    Cloud,
    Wrench,
    ChevronLeft,
    Layers,
    Settings,
    Info,
    X,
    ExternalLink,
    Bot,
    BrainCircuit
} from "lucide-react";

const iconMap: Record<string, any> = {
    Code2: Code2,
    Layout: Layout,
    Server: Server,
    Database: Database,
    Cloud: Cloud,
    Wrench: Wrench,
    Bot: Bot,
    Layers: Layers
};

/**
 * COMPONENTE CONTENIDO DEL STACK:
 * Gestiona el flujo entre el menú de categorías y el panel de conocimiento interactivo.
 */
function StackContent() {
    const isDark = useDarkMode();
    const searchParams = useSearchParams();

    // ESTADOS: Controlan la categoría actual y la tecnología seleccionada para el detalle
    const [selectedCategory, setSelectedCategory] = useState<StackCategory | null>(null);
    const [selectedTechId, setSelectedTechId] = useState<string | null>(null);

    // EFECTO NAVIGACIÓN (URL Params): Permite entrada directa mediante filtros
    useEffect(() => {
        const filter = searchParams.get("filter");
        if (filter) {
            const category = stackData.find(c => c.id === filter);
            if (category) {
                setSelectedCategory(category);
            }
        }
    }, [searchParams]);

    // EFECTO RESET: Limpia la selección al cambiar de categoría principal
    useEffect(() => {
        setSelectedTechId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [selectedCategory]);

    /**
     * OBTENCIÓN DE LOGOS (Ecosistema Dual):
     * - Usa Simple Icons para logos de IA con forzado de contraste blanco.
     * - Usa SkillIcons para el resto de herramientas estéticas.
     */
    const getIconUrl = (iconName: string) => {
        if (!iconName) return null;

        // PLAN B: Marcas de IA en Simple Icons con forzado de blanco para visibilidad
        const brandIcons = ['openai', 'anthropic', 'githubcopilot'];
        if (brandIcons.includes(iconName.toLowerCase())) {
            // Retorna el SVG oficial desde Simple Icons forzado a BLANCO
            return `https://cdn.simpleicons.org/${iconName}/ffffff`;
        }

        // PLAN A: SkillIcons para el resto del stack
        return `https://skillicons.dev/icons?i=${iconName}`;
    };

    // VARIABLE AUXILIAR: Extrae los datos técnicos si hay una tech seleccionada
    const currentTechDetail = selectedTechId ? techDetails[selectedTechId] : null;

    /**
     * OBTENCIÓN DEL ICONO PARA EL PANEL DE DETALLE:
     * Busca la tecnología correspondiente en stackData para obtener su nombre de icono original.
     */
    const getDetailIconUrl = (techId: string) => {
        // Buscamos la tecnología en todas las categorías de datos
        for (const category of stackData) {
            const techFound = category.techs.find(t => (t.idDetail || t.icon || t.name.toLowerCase()) === techId);
            if (techFound) {
                return getIconUrl(techFound.icon);
            }
        }
        return null; // Fallback
    };

    return (
        <div className={`relative min-h-screen w-full transition-colors duration-500 overflow-x-hidden ${isDark ? 'bg-zinc-950' : 'bg-black'}`}>

            {/* FONDO DECORATIVO: Se muestra solo en modo claro para consistencia con Skills */}
            {!isDark && (
                <div
                    className="fixed inset-0 z-0 opacity-60 pointer-events-none"
                    style={{
                        backgroundImage: `url('/apps/Background-apps.webp')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            )}

            <div className="relative z-10 flex flex-col items-center w-full max-w-full mx-auto pt-8 md:pt-16 pb-20 px-4 md:px-12 lg:px-24">

                {/* CABECERA: Título dinámico y subtítulos de ayuda visual */}
                <div className="w-full max-w-[1400px] mb-12">
                    {!selectedCategory ? (
                        /* Cabecera del Menú Principal */
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in tracking-tight">
                                Stack Tecnológico
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl max-w-2xl animate-fade-in-up">
                                Mi ecosistema de herramientas y tecnologías para construir soluciones de software de alto nivel.
                            </p>
                        </div>
                    ) : (
                        /* Cabecera de la Vista Detallada (Categoría seleccionada) */
                        <div className="relative w-full flex flex-col items-center animate-fade-in">
                            {/* Botón Volver posicionado a la izquierda */}
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`absolute left-0 top-0 flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${isDark ? 'bg-zinc-900/50 border-white/10 text-gray-300 hover:bg-zinc-800' : 'bg-black/40 border-emerald-500/30 text-emerald-100 hover:border-emerald-400'
                                    }`}
                            >
                                <ChevronLeft size={20} />
                                <span className="hidden sm:inline">Volver</span>
                            </button>

                            {/* Título de la Categoría */}
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-wide">
                                {selectedCategory.title}
                            </h2>

                            {/* HINT SUBTITLE: El mensaje de ayuda ahora debajo del título */}
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-light opacity-80">
                                <Info size={14} className="text-emerald-400" />
                                <span>{selectedTechId ? "Analizando tecnología..." : "Haz clic en un icono para ver detalles técnicos"}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* --- VISTA 1: MENÚ PRINCIPAL --- (Grilla de acceso) */}
                {!selectedCategory ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1400px] animate-fade-in-up">
                        {stackData.map((category) => {
                            const IconComp = iconMap[category.icon] || Layers;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`group relative flex flex-col items-start p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 text-left ${isDark
                                        ? 'bg-zinc-900/40 border-white/10 hover:bg-zinc-800/60 hover:border-white/30'
                                        : 'bg-black/50 border-emerald-500/20 hover:border-emerald-400/60 shadow-[0_0_40px_rgba(16,185,129,0.1)]'
                                        }`}
                                >
                                    <div className={`mb-6 p-4 rounded-2xl ${isDark ? 'bg-zinc-800/50 text-white' : 'bg-emerald-900/30 text-emerald-400'
                                        }`}>
                                        <IconComp size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light">{category.description}</p>

                                    <div className={`mt-6 flex items-center text-sm font-medium transition-colors ${isDark ? 'text-gray-300 group-hover:text-white' : 'text-emerald-400/80 group-hover:text-emerald-300'
                                        }`}>
                                        <span>Explorar herramientas</span>
                                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    /* --- VISTA 2: DETALLE REFINADO (Expansión inteligente) --- */
                    <div className="w-full max-w-[1450px] flex flex-col lg:flex-row gap-8 items-start animate-scale-up">

                        {/* A. GRILLA DE ICONOS: Se contrae SOLO si hay un icono seleccionado */}
                        <div className={`transition-all duration-500 ${selectedTechId ? 'lg:w-[60%] w-full' : 'w-full'} p-8 md:p-12 rounded-[2.5rem] border backdrop-blur-2xl ${isDark ? 'bg-zinc-900/40 border-white/10 shadow-2xl' : 'bg-black/40 border-emerald-500/20 shadow-[0_0_60px_rgba(16,185,129,0.15)]'
                            }`}>
                            <div className={`grid gap-8 md:gap-10 ${selectedTechId ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'}`}>
                                {selectedCategory.techs.map((tech, index) => {
                                    // Obtenemos el nombre del icono para buscarlo
                                    const iconName = tech.icon;
                                    const iconUrl = getIconUrl(iconName);

                                    // Definimos el ID único para este elemento (idDetail > iconName > name)
                                    const currentId = tech.idDetail || tech.icon || tech.name.toLowerCase();
                                    const isActive = selectedTechId === currentId;

                                    return (
                                        <button
                                            key={tech.name}
                                            onClick={() => setSelectedTechId(isActive ? null : currentId)}
                                            className="flex flex-col items-center group animate-fade-in"
                                            style={{ animationDelay: `${index * 40}ms` }}
                                        >
                                            <div className={`relative w-16 h-16 md:w-20 md:h-20 mb-3 transition-all duration-300 p-2 rounded-2xl flex items-center justify-center border ${isActive
                                                ? (isDark ? 'bg-zinc-800 border-emerald-500 scale-110 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'bg-emerald-900/60 border-emerald-400 scale-110 shadow-[0_0_25px_rgba(16,185,129,0.4)]')
                                                : (isDark ? 'bg-zinc-800/40 border-white/5 group-hover:scale-105 group-hover:border-white/20' : 'bg-emerald-900/20 border-emerald-500/10 group-hover:scale-105 group-hover:border-emerald-400/40')
                                                }`}>
                                                {iconUrl ? (
                                                    <img
                                                        src={iconUrl}
                                                        alt={tech.name}
                                                        className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.05)]"
                                                    />
                                                ) : (
                                                    /* FALLBACK SINCRONIZADO: BrainCircuit para ChatGPT, Robot para IA o Tuerca */
                                                    currentId === 'chatgpt' ? <BrainCircuit size={44} className="text-white" /> :
                                                    selectedCategory.id === 'ai' ? <Bot size={44} className="text-white" /> : 
                                                    <Settings size={44} className={`animate-spin-slow ${isActive ? 'text-emerald-400' : 'text-gray-500'}`} />
                                                )}
                                            </div>
                                            <span className={`text-center text-sm font-medium transition-colors ${isActive ? 'text-emerald-400' : 'text-gray-300 group-hover:text-white'}`}>
                                                {tech.name}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* B. KNOWLEDGE PANEL (Solo aparece tras seleccionar un icono) */}
                        {selectedTechId && (
                            <div className="w-full lg:w-[40%] flex flex-col gap-4 animate-slide-in-right sticky top-4">
                                <div className={`relative overflow-hidden p-8 rounded-[2.5rem] border backdrop-blur-3xl shadow-2xl h-full flex flex-col ${isDark ? 'bg-zinc-900/90 border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.03)]' : 'bg-black/70 border-emerald-500/50 shadow-[0_0_60px_rgba(16,185,129,0.2)]'
                                    }`}>
                                    {/* Cabecera del Panel: Enfoque Profesional */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 p-2">
                                                {/* Mostramos el icono o la tuerca según corresponda en el panel también */}
                                                {(() => {
                                                    const iconUrl = getDetailIconUrl(selectedTechId);
                                                    if (iconUrl) {
                                                        return <img src={iconUrl} alt="tech icon detail" className="w-full h-full object-contain" />;
                                                    }
                                                    // Fallback si no hay imagen: BrainCircuit para ChatGPT, Robot para otras IA, Tuerca para el resto
                                                    if (selectedTechId === 'chatgpt') return <BrainCircuit size={44} className="text-white" />;
                                                    return (selectedTechId === 'antigravity' || selectedCategory?.id === 'ai') 
                                                        ? <Bot size={44} className="text-white" /> 
                                                        : <Settings size={44} className="text-emerald-400 animate-spin-slow" />;
                                                })()}
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-white tracking-tight">{currentTechDetail?.name}</h3>
                                                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">{currentTechDetail?.type}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedTechId(null)}
                                            className="p-2 rounded-full hover:bg-white/10 text-gray-400 transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    {/* Cuerpo del Panel */}
                                    <div className="flex-1 space-y-6">
                                        <div>
                                            <p className="text-gray-200 leading-relaxed text-lg font-light">
                                                {currentTechDetail?.summary}
                                            </p>
                                        </div>

                                        <div className="pt-6 border-t border-white/10 space-y-4">
                                            <div className="space-y-1">
                                                <h4 className="text-xs uppercase text-gray-500 font-bold tracking-tighter">Uso industrial principal</h4>
                                                <p className="text-white text-md">{currentTechDetail?.useCase}</p>
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="text-xs uppercase text-gray-500 font-bold tracking-tighter">Atributos clave</h4>
                                                <ul className="grid grid-cols-1 gap-2">
                                                    {currentTechDetail?.benefits.map((benefit, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer del Panel */}
                                    <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Actualizado 2026</span>
                                        <Link
                                            href={`https://www.google.com/search?q=${selectedTechId}+developer+docs`}
                                            target="_blank"
                                            className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                                        >
                                            <span>Saber más</span>
                                            <ExternalLink size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* BOTÓN DE NAVEGACIÓN INFERIOR */}
                {!selectedTechId && (
                    <Link
                        href="/apps/projects"
                        className={`mt-20 group relative px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 flex items-center gap-4 ${isDark
                            ? 'bg-zinc-800 border border-zinc-600 text-white hover:bg-zinc-700 shadow-lg'
                            : 'bg-emerald-900/30 border border-emerald-500/60 text-emerald-300 hover:bg-emerald-500/20'
                            }`}
                    >
                        <span>Ver Proyectos</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                )}

            </div>
        </div>
    );
}

export default function StackPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white italic">Cargando ecosistema...</div>}>
            <StackContent />
        </Suspense>
    );
}
