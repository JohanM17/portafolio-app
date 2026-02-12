"use client";

import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { aboutData } from "../../../lib/aboutData";

export default function AboutPage() {
    const isDark = useDarkMode();

    return (
        <div className={`min-h-screen w-full transition-colors duration-500 ${isDark ? 'bg-zinc-950' : 'bg-black'}`}>

            {/* Fondo Galáctico (Solo en modo NO oscuro) */}
            {!isDark && (
                <div
                    className="fixed inset-0 z-0 opacity-60 pointer-events-none"
                    style={{
                        backgroundImage: `url(${aboutData.hero.background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            )}

            <div className="relative z-10 flex flex-col items-center w-full max-w-full mx-auto pt-4 md:pt-12 pb-20 px-4 md:px-12 lg:px-24">

                {/* Título Principal */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-20 animate-fade-in py-2 tracking-tight">
                    {aboutData.hero.title}
                </h1>

                {/* SECCIÓN HERO: Foto + Texto (Full Width en PC) */}
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1600px] mb-24">

                    {/* Imagen del Personaje (Más pegado a la tarjeta) */}
                    <div className="relative w-64 h-80 md:w-[450px] md:h-[600px] flex-shrink-0 animate-slide-in-left z-20 md:-mr-24 lg:-mr-32 mt-8 md:mt-0 pointer-events-none">
                        <Image
                            src={aboutData.hero.portrait}
                            alt="Johan Molina"
                            fill
                            className="object-contain drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                            priority
                        />
                    </div>

                    {/* Cuadro de Texto Principal (Más ancho y expandido) */}
                    <div className={`relative flex-1 p-8 md:p-14 md:pl-32 lg:pl-40 rounded-[2.5rem] border backdrop-blur-xl shadow-2xl animate-fade-in-up w-full ${isDark
                        ? 'bg-zinc-900/90 border-white/10 text-gray-100 shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                        : 'bg-black/60 border-emerald-500/30 text-emerald-50 shadow-[0_0_50px_rgba(16,185,129,0.12)]'
                        }`}>
                        {/* Borde brillante superior (solo en modo color) */}
                        {!isDark && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#34d399]" />}

                        <div className="space-y-7 text-lg md:text-2xl leading-relaxed font-light">
                            {aboutData.hero.description.map((paragraph: string, index: number) => (
                                <p key={index} className={index === aboutData.hero.description.length - 1 ? "font-medium text-white pt-2" : ""}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SECCIÓN DIFERENCIALES (Grid expansivo) */}
                <div className="w-full max-w-[1600px] mb-24">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-white tracking-wide">
                        ¿Qué me diferencia?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                        {aboutData.differentials.map((item: { icon: string; text: string }, index: number) => (
                            <div
                                key={index}
                                className={`flex items-start gap-5 p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 h-full ${isDark
                                    ? 'bg-zinc-900/70 border-white/10 hover:bg-zinc-800 hover:border-white/20'
                                    : 'bg-black/40 border-emerald-500/20 hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]'
                                    }`}
                            >
                                <div className="relative w-12 h-12 flex-shrink-0 mt-0.5">
                                    <Image src={item.icon} alt="Icono" fill className="object-contain opacity-100" />
                                </div>
                                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-emerald-100/90'}`}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECCIÓN OBJETIVO PROFESIONAL */}
                <div className={`w-full max-w-[1200px] p-12 md:p-20 rounded-[3rem] border text-center mb-20 relative overflow-hidden group ${isDark
                    ? 'bg-zinc-900/90 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                    : 'bg-black/60 border-emerald-500/40 shadow-[0_0_60px_rgba(16,185,129,0.2)]'
                    }`}>
                    {/* Efecto Glow de fondo */}
                    <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity ${isDark
                        ? 'bg-gradient-to-r from-transparent via-white/5 to-transparent'
                        : 'bg-gradient-to-r from-transparent via-emerald-900/40 to-transparent'
                        }`} />

                    <h3 className={`relative z-10 text-2xl font-bold mb-8 uppercase tracking-widest ${isDark ? 'text-white' : 'text-emerald-400'}`}>
                        {aboutData.objective.title}
                    </h3>
                    <p className={`relative z-10 text-xl md:text-3xl max-w-5xl mx-auto leading-relaxed font-light ${isDark ? 'text-white' : 'text-white/95'}`}>
                        {aboutData.objective.description}
                    </p>
                </div>

                {/* BOTÓN DE NAVEGACIÓN */}
                <Link
                    href="/apps/skills"
                    className={`group relative px-12 py-5 rounded-full font-medium text-xl transition-all duration-300 flex items-center gap-4 ${isDark
                        ? 'bg-zinc-800 border border-zinc-600 text-white hover:bg-zinc-700 hover:border-zinc-500 shadow-lg'
                        : 'bg-emerald-900/30 border border-emerald-500/60 text-emerald-300 hover:bg-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:border-emerald-400'
                        }`}
                >
                    <span>Ver Skills</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>

            </div>
        </div>
    );
}
