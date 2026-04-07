"use client";

import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ExternalLink, 
    CheckCircle, 
    ChevronRight, 
    X, 
    ChevronLeft, 
    Image as ImageIcon 
} from "lucide-react";
import { PROJECTS, Project } from "@/lib/projectsData";
import { useDarkMode } from "@/hooks/useDarkMode";

// ─── LÓGICA DE ICONOS TECNOLÓGICOS (SkillIcons) ────────────────────────────────
const TECH_ICON_MAP: Record<string, string> = {
    "PHP": "php",
    "Laravel": "laravel",
    "TailwindCSS": "tailwind",
    "MySQL": "mysql",
    "Vite": "vite",
    "React Native": "react",
    "Django": "django",
    "PostgreSQL": "postgres",
    "Node.js": "nodejs",
};

function getTechIcon(tech: string) {
    const icon = TECH_ICON_MAP[tech] || tech.toLowerCase().replace(/\s+/g, "");
    return `https://skillicons.dev/icons?i=${icon}`;
}

// ─── SUB-COMPONENTE: CARD DEL PROYECTO ──────────────────────────────────────────
function ProjectCard({
    project,
    isActive,
    onClick,
    isDark
}: {
    project: Project;
    isActive: boolean;
    onClick: () => void;
    isDark: boolean;
}) {
    return (
        <motion.div
            onClick={onClick}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                isActive
                    ? (isDark ? "border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)]" : "border-emerald-400/60 shadow-[0_0_24px_rgba(16,185,129,0.2)]")
                    : (isDark ? "border-white/5 hover:border-white/10" : "border-emerald-500/20 hover:border-emerald-500/40")
            }`}
            style={{
                background: isActive
                    ? (isDark ? "linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(24,24,27,0.95) 100%)" : "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(0,0,0,0.85) 100%)")
                    : (isDark ? "rgba(24,24,27,0.6)" : "rgba(0,0,0,0.5)"),
            }}
        >
            <div className={`w-full h-44 sm:h-64 relative overflow-hidden flex items-center justify-center border-b ${isDark ? 'border-white/5 bg-zinc-900/40' : 'border-emerald-500/10 bg-emerald-950/20'}`}>
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-3 text-center px-6">
                        <div className={`w-12 h-12 rounded-xl border border-dashed flex items-center justify-center ${isDark ? 'border-white/20' : 'border-emerald-500/30'}`}>
                            <ImageIcon size={20} className={isDark ? 'text-white/20' : 'text-emerald-500/40'} />
                        </div>
                        <p className={`text-[0.6rem] uppercase tracking-widest font-medium ${isDark ? 'text-zinc-500' : 'text-emerald-400/60'}`}>
                            Imagen no disponible
                        </p>
                    </div>
                )}

                {isActive && (
                    <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full border backdrop-blur-md ${isDark ? 'bg-zinc-800/40 border-white/10' : 'bg-emerald-500/20 border-emerald-500/40'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-white/40' : 'bg-emerald-400'}`} />
                        <span className={`text-[0.6rem] font-bold uppercase tracking-wider ${isDark ? 'text-zinc-300' : 'text-emerald-300'}`}>Viendo</span>
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <h3 className="text-sm md:text-base font-bold text-white leading-tight">
                            {project.title}
                        </h3>
                        <p className={`text-[0.7rem] mt-0.5 ${isDark ? 'text-zinc-400' : 'text-emerald-300/80'}`}>{project.category}</p>
                    </div>
                    <ChevronRight size={16} className={isActive ? "text-emerald-400" : "text-zinc-600"} />
                </div>
            </div>
        </motion.div>
    );
}

// ─── SUB-COMPONENTE: DETALLE DEL PROYECTO ───────────────────────────────────────
function ProjectDetail({ project, onOpenGallery, isDark }: { project: Project; onOpenGallery: () => void; isDark: boolean }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className={`rounded-2xl border backdrop-blur-xl overflow-hidden ${isDark ? 'border-white/10 bg-zinc-900/40' : 'border-emerald-500/20 bg-black/50'}`}
            >
                <div className={`p-6 md:p-8 border-b ${isDark ? 'border-white/5' : 'border-emerald-500/10'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{project.title}</h2>
                            <p className="text-emerald-400 text-sm font-medium">{project.category}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={onOpenGallery}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border border-white/10 text-white transition-all hover:bg-white/5 bg-zinc-800/50"
                            >
                                <ImageIcon size={14} className="text-emerald-400" />
                                Galería
                            </button>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${isDark ? 'bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700' : 'bg-emerald-500 text-black hover:bg-emerald-400'}`}
                            >
                                <ExternalLink size={14} />
                                Sitio Web
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="flex items-center gap-1.5 text-[0.65rem] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                                <img src={getTechIcon(tech)} alt="" className="w-3.5 h-3.5" />
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white">Descripción</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <h4 className="text-sm font-bold text-emerald-400">El Cliente</h4>
                                <p className="text-sm text-zinc-300 leading-relaxed">{project.description}</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-sm font-bold text-emerald-400">Solución</h4>
                                <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-sm font-bold text-emerald-400">Resultado</h4>
                                <p className="text-sm text-zinc-300 leading-relaxed">{project.result}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-4 pt-6 border-t border-white/5">
                        <h3 className="text-sm uppercase tracking-widest font-bold text-emerald-400">Características Clave</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.features.map((feature) => (
                                <span key={feature} className="flex items-center gap-2 text-[0.7rem] text-zinc-400 px-3 py-2 rounded-lg bg-white/5 border border-white/5">
                                    <CheckCircle size={12} className="text-emerald-500" />
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

// ─── SUB-COMPONENTE: LIGHTBOX ──────────────────────────────────────────────────
function GalleryLightbox({ images, activeIndex, onClose, onPrev, onNext }: { images: string[]; activeIndex: number; onClose: () => void; onPrev: () => void; onNext: () => void }) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose, onPrev, onNext]);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-2xl">
            <button onClick={onClose} className="absolute top-6 right-6 z-[110] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <X size={24} className="text-white" />
            </button>

            {images.length > 1 && (
                <>
                    <button onClick={onPrev} className="absolute left-4 md:left-10 z-[110] p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <ChevronLeft size={28} className="text-white" />
                    </button>
                    <button onClick={onNext} className="absolute right-4 md:right-10 z-[110] p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <ChevronRight size={28} className="text-white" />
                    </button>
                </>
            )}

            <div className="relative w-full h-full flex items-center justify-center max-w-6xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div key={activeIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="relative w-full h-full flex items-center justify-center">
                        {images[activeIndex] ? (
                            <img src={images[activeIndex]} alt="" className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
                        ) : (
                            <div className="flex flex-col items-center gap-6 text-center">
                                <div className="w-20 h-20 rounded-2xl border border-dashed border-white/20 flex items-center justify-center">
                                    <ImageIcon size={32} className="text-emerald-500/20" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-white">Galería en Preparación</h3>
                                    <p className="text-zinc-500 text-sm max-w-xs">Capturando los mejores momentos de esta solución técnica.</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

// ─── COMPONENTE PRINCIPAL (CONTENT) ───────────────────────────────────────────
function ProjectsContent() {
    const isDark = useDarkMode();
    const [activeProject, setActiveProject] = useState<Project>(PROJECTS[0]);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

    const openGallery = () => { setIsGalleryOpen(true); setCurrentGalleryIndex(0); };
    const closeGallery = () => setIsGalleryOpen(false);
    const prevImage = () => setCurrentGalleryIndex((prev) => (prev === 0 ? Math.max(0, activeProject.gallery.length - 1) : prev - 1));
    const nextImage = () => setCurrentGalleryIndex((prev) => (prev === activeProject.gallery.length - 1 ? 0 : prev + 1));

    return (
        <div className={`min-h-screen pt-12 pb-20 px-4 md:px-12 lg:px-24 transition-colors duration-500 ${isDark ? 'bg-zinc-950' : 'bg-black'}`}>
            
            {!isDark && (
                <div className="fixed inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: `url('/apps/Background-apps.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            )}

            <AnimatePresence>
                {isGalleryOpen && (
                    <GalleryLightbox images={activeProject.gallery} activeIndex={currentGalleryIndex} onClose={closeGallery} onPrev={prevImage} onNext={nextImage} />
                )}
            </AnimatePresence>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto">
                <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Proyectos</h1>
                    <p className="text-zinc-400 text-base md:text-lg max-w-2xl font-light">Aquí podrás observar los proyectos en los cuales he desarrollado y en los cuales he participado.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Lista Master */}
                    <div className="lg:col-span-5 space-y-4">
                        {PROJECTS.map((project) => (
                            <div key={project.id} className="space-y-4">
                                <ProjectCard 
                                    project={project} 
                                    isActive={activeProject.id === project.id} 
                                    onClick={() => setActiveProject(project)} 
                                    isDark={isDark} 
                                />
                                
                                <div className="lg:hidden">
                                    <AnimatePresence>
                                        {activeProject.id === project.id && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pt-2">
                                                <ProjectDetail project={activeProject} onOpenGallery={openGallery} isDark={isDark} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Detalle (Desktop) */}
                    <div className="hidden lg:block lg:col-span-7 sticky top-28">
                        <ProjectDetail project={activeProject} onOpenGallery={openGallery} isDark={isDark} />
                    </div>
                </div>

                {/* BOTÓN DE NAVEGACIÓN INFERIOR */}
                <div className="mt-16 flex justify-center">
                    <Link
                        href="/apps/experience"
                        className={`group relative px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 flex items-center gap-4 ${isDark
                            ? 'bg-zinc-800 border border-zinc-600 text-white hover:bg-zinc-700 shadow-lg'
                            : 'bg-emerald-900/30 border border-emerald-500/60 text-emerald-300 hover:bg-emerald-500/20'
                            }`}
                    >
                        <span>Ver Experiencia</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white italic">Cargando portafolio...</div>}>
            <ProjectsContent />
        </Suspense>
    );
}
