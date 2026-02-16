"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { skillsData } from "../../../lib/skillsData";

export default function SkillsPage() {
  const isDark = useDarkMode();
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-500 ${isDark ? 'bg-zinc-950' : 'bg-black'}`}>

      {/* Fondo Galáctico (Solo en modo NO oscuro) */}
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

      <div className="relative z-10 flex flex-col items-center w-full max-w-full mx-auto pt-4 md:pt-16 pb-20 px-4 md:px-12 lg:px-24">

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in tracking-tight">
          Skills
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-16 animate-fade-in text-center max-w-2xl">
          Habilidades técnicas estructuradas por mis áreas de competencia.
        </p>

        {/* Contenedor de Acordeones */}
        <div className="w-full max-w-4xl space-y-6">
          {skillsData.map((category) => {
            const isOpen = openCategory === category.id;

            return (
              <div
                key={category.id}
                className={`overflow-hidden rounded-3xl border transition-all duration-500 ${isDark
                  ? 'bg-zinc-900/80 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)]'
                  : 'bg-black/60 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.08)] backdrop-blur-xl'
                  }`}
              >
                {/* Header del Acordeón */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 cursor-pointer group"
                >
                  <div className="flex items-center gap-6">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                      <Image
                        src={category.icon}
                        alt={category.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-emerald-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Botón + que rota */}
                  <div className={`relative w-8 h-8 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>
                    <div className="absolute w-full h-[2px] bg-white rounded-full"></div>
                    <div className="absolute w-[2px] h-full bg-white rounded-full"></div>
                  </div>
                </button>

                {/* Contenido Expandible */}
                <div
                  className={`transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                >
                  <div className="px-6 pb-8 md:px-12 md:pb-12 border-t border-white/5 pt-8 touch-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 ${isDark
                            ? 'bg-zinc-800/40 border-white/5 text-gray-300'
                            : 'bg-emerald-900/10 border-emerald-500/20 text-emerald-50 shadow-[0_0_10px_rgba(16,185,129,0.05)]'
                            }`}
                        >
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-base md:text-lg">{skill.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Botón Ver Stack Interno */}
                    <div className="flex justify-center">
                      <Link
                        href={`/apps/stack?filter=${category.id}`}
                        className={`group relative px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${isDark
                          ? 'bg-zinc-800 border border-zinc-600 text-white hover:bg-zinc-700'
                          : 'bg-emerald-900/30 border border-emerald-500/60 text-emerald-300 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:border-emerald-400'
                          }`}
                      >
                        <span>→ Ver Stack</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botón General Ver Stack al final */}
        <div className="mt-16 animate-fade-in">
          <Link
            href="/apps/stack"
            className={`group relative px-12 py-4 rounded-full font-medium text-xl transition-all duration-300 flex items-center gap-3 ${isDark
              ? 'bg-zinc-800 border border-zinc-600 text-white hover:bg-zinc-700 shadow-xl'
              : 'bg-emerald-900/30 border border-emerald-500/60 text-emerald-300 hover:bg-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:border-emerald-400'
              }`}
          >
            <span>Ver Stack Técnico</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
