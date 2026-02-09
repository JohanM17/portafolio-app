"use client"; 
import Image from "next/image";
import { useState, useEffect } from "react";
import { apps, personalInfo } from "@/lib/data";
import { DockItem } from "@/components/DockItem";
import Header from "@/components/Header";

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const html = document.documentElement;
        const update = () => setIsDark(html.classList.contains('modo-oscuro'));
        update();
        const observer = new MutationObserver(update);
        observer.observe(html, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`relative min-h-screen overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-black text-white'}`}>
            {/* Fondo decorativo y overlay solo si NO es modo oscuro */}
            {!isDark && (
                <>
                    <div
                        aria-hidden="true"
                        className="pointer-events-none select-none fixed top-0 left-0 w-full h-full z-0 bg-decorativo"
                        style={{
                            background: `radial-gradient(ellipse 70% 50% at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.85) 100%), url(/Background.png) center / cover no-repeat`,
                            opacity: 0.93,
                        }}
                    />
                    <div className="pointer-events-none select-none fixed top-0 left-0 w-full h-full z-10 bg-black/40 overlay-negro" />
                </>
            )}
            <main className="relative z-10 flex min-h-screen w-full flex-col gap-0 px-2 pt-0 pb-6 sm:gap-3 sm:px-4 sm:pt-1 sm:pb-8 md:gap-16 md:px-8 md:py-12 lg:px-12 lg:py-12">
                <Header compact={false} />
                {/* MOBILE: Foto arriba, luego texto. DESKTOP: layout original */}
                <div className="block md:hidden w-full">
                    <div className="flex flex-col items-center w-full mt-0">
                        <div className="relative h-32 w-32 mt-24">
                            {!isDark && <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-2xl" />}
                            <div className={`relative h-full w-full overflow-hidden rounded-full ${isDark ? 'border-none bg-black shadow-none' : 'border-2 border-emerald-400/60 bg-zinc-950 shadow-[0_0_40px_rgba(16,185,129,0.6)]'}`}> 
                                <Image
                                    src="/profile.jpeg"
                                    alt="Foto de perfil"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-6 left-1/2 h-16 w-24 -translate-x-1/2 overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                                <Image
                                    src="/penguin-hi.gif"
                                    alt="Pingüino saludando"
                                    width={64}
                                    height={64}
                                    unoptimized
                                    className="h-16 w-auto animate-penguin-slide opacity-90 brightness-90"
                                />
                            </div>
                        </div>
                    </div>
                    <section className="flex flex-col gap-4 w-full justify-center mt-8">
                        <h1 className="text-3xl font-semibold leading-tight text-center">
                            <span className={isDark ? 'text-white' : 'text-emerald-200'}>
                                {personalInfo.title}
                            </span>
                        </h1>
                        {personalInfo.subtitle && (
                            <span className={`text-base font-medium -mt-2 mb-2 ml-1 text-center ${isDark ? 'text-white' : 'text-emerald-300'}`}>{personalInfo.subtitle}</span>
                        )}
                        <p className="text-base text-white text-center mt-2">
                            {personalInfo.location}
                        </p>
                        <p className="text-base text-white text-center mt-2">
                            {personalInfo.description}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 mt-3 mb-2">
                            <button
                                type="button"
                                onClick={() => setShowModal(true)}
                                className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition ${isDark ? 'border border-white bg-black text-white shadow-none' : 'border border-emerald-400/40 bg-black/80 text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.4)] hover:bg-emerald-500/20'}`}
                            >
                                Ver CV
                            </button>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center rounded-full w-10 h-10 text-2xl transition shadow ${isDark ? 'bg-black border border-white text-white shadow-none' : 'bg-zinc-900 border border-emerald-400/40 text-white hover:bg-emerald-500/20'}`}
                                aria-label="GitHub"
                            >
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                                </svg>
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center rounded-full w-10 h-10 text-2xl transition shadow ${isDark ? 'bg-black border border-white text-white shadow-none' : 'bg-zinc-900 border border-emerald-400/40 text-white hover:bg-emerald-500/20'}`}
                                aria-label="LinkedIn"
                            >
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                                </svg>
                            </a>
                        </div>
                    </section>
                </div>
                {/* DESKTOP: layout original */}
                <div className="hidden md:flex flex-col-reverse md:flex-row flex-1 gap-0 md:gap-12 lg:gap-16 w-full items-stretch mt-0 sm:mt-2">
                    <section className="flex flex-col gap-0 md:gap-8 w-full md:w-1/2 justify-center mt-0 sm:mt-1 md:mt-20 md:ml-12 lg:ml-24">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                            <span className="text-emerald-200">
                                {personalInfo.title}
                            </span>
                        </h1>
                        {personalInfo.subtitle && (
                            <span className="text-base sm:text-lg text-emerald-300 font-medium -mt-2 mb-2 ml-1">{personalInfo.subtitle}</span>
                        )}
                        <p className="text-base sm:text-lg text-white">
                            {personalInfo.location}
                        </p>
                        <p className="text-base sm:text-lg text-white">
                            {personalInfo.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                            <button
                                type="button"
                                onClick={() => setShowModal(true)}
                                className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition ${isDark ? 'border border-white bg-black text-white shadow-none' : 'border border-emerald-400/40 bg-black/80 text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.4)] hover:bg-emerald-500/20'}`}
                            >
                                Ver CV
                            </button>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center rounded-full w-10 h-10 text-2xl transition shadow ${isDark ? 'bg-black border border-white text-white shadow-none' : 'bg-zinc-900 border border-emerald-400/40 text-white hover:bg-emerald-500/20'}`}
                                aria-label="GitHub"
                            >
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                                </svg>
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center rounded-full w-10 h-10 text-2xl transition shadow ${isDark ? 'bg-black border border-white text-white shadow-none' : 'bg-zinc-900 border border-emerald-400/40 text-white hover:bg-emerald-500/20'}`}
                                aria-label="LinkedIn"
                            >
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                                </svg>
                            </a>
                        </div>
                    </section>
                    <section className="flex flex-col items-center md:items-end justify-start md:justify-center w-full md:w-1/2">
                        <div className="relative h-28 w-28 md:h-60 md:w-70 -mt-14 md:mt-16 md:mr-16 lg:mr-32 mx-auto md:mx-0">
                            {!isDark && <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-2xl" />}
                            <div className={`relative h-full w-full overflow-hidden rounded-full ${isDark ? 'border-none bg-black shadow-none' : 'border-2 border-emerald-400/60 bg-zinc-950 shadow-[0_0_40px_rgba(16,185,129,0.6)]'}`}> 
                                <Image
                                    src="/profile.jpeg"
                                    alt="Foto de perfil"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-6 left-1/2 h-16 w-24 sm:h-20 sm:w-32 -translate-x-1/2 overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                                <Image
                                    src="/penguin-hi.gif"
                                    alt="Pingüino saludando"
                                    width={64}
                                    height={64}
                                    unoptimized
                                    className="h-16 w-auto sm:h-20 animate-penguin-slide opacity-90 brightness-90"
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <section className="mt-2 md:mt-auto w-full">
                    <div className="relative mx-auto w-full max-w-7xl">
                        <div className="relative z-0 h-10 sm:h-96 md:h-20 md:w-237.5 rounded-3xl bg-black/80 shadow-[0_0_30px_rgba(16,185,129,0.4)] border border-emerald-400/30 py-2 md:py-0 mx-auto" />
                        <div className="absolute inset-0 z-10 px-2 sm:px-4 flex items-center justify-center h-full">
                            {/* Mobile: grid tipo cajón, Desktop: fila horizontal */}
                            <div
                                className="grid grid-cols-4 grid-rows-2 gap-x-0 gap-y-0 sm:gap-x-0 sm:gap-y-0 w-full h-full place-content-center md:flex md:flex-row md:items-end md:justify-center md:gap-4 md:pb-4 md:pt-4 md:overflow-visible"
                                style={{ rowGap: 0 }}
                                aria-label="Dock de aplicaciones"
                            >
                                {apps.map((app) => (
                                    <DockItem
                                        key={app.id}
                                        title={app.title}
                                        description={app.description}
                                        icon={app.icon}
                                        href={app.href}
                                        isDark={isDark}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Modal temporal para Ver CV */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-zinc-900 rounded-2xl shadow-2xl px-8 py-7 flex flex-col items-center gap-3 border border-emerald-400/30 min-w-[320px]">
                        <span className="text-4xl mb-1">🔒</span>
                        <span className="text-lg font-semibold text-white">No la encuentro jajaja</span>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-2 px-4 py-1 rounded-full bg-emerald-600/80 text-white text-sm font-medium hover:bg-emerald-500/90 transition"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}