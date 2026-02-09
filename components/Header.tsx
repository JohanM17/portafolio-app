"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Header({ compact = false, showBack = false, onShowInfoBeta }: { compact?: boolean; showBack?: boolean; onShowInfoBeta?: () => void }) {
    const router = useRouter();
    const [themeMenu, setThemeMenu] = useState(false);
    const themeMenuRef = useRef<HTMLDivElement>(null);
    const [isDark, setIsDark] = useState(false);
    const [langMenu, setLangMenu] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);
    const [language, setLanguage] = useState<'es' | 'en'>('es');
    const [showLangNotice, setShowLangNotice] = useState(false);
    useEffect(() => {
        const html = document.documentElement;
        // Por defecto, quitar modo oscuro (modo color)
        html.classList.remove('modo-oscuro');
        const update = () => setIsDark(html.classList.contains('modo-oscuro'));
        update();
        const observer = new MutationObserver(update);
        observer.observe(html, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    // Cerrar menú si se hace click fuera
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (themeMenuRef.current && !themeMenuRef.current.contains(e.target as Node)) {
                setThemeMenu(false);
            }
            if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
                setLangMenu(false);
            }
            // Ocultar aviso de idioma si está visible y se hace click fuera
            if (showLangNotice) {
                const notice = document.getElementById('lang-notice');
                if (notice && !notice.contains(e.target as Node)) {
                    setShowLangNotice(false);
                    setLanguage('es');
                }
            }
        }
        if (themeMenu || langMenu || showLangNotice) document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [themeMenu, langMenu, showLangNotice]);

    // Cambiar tema global
    function setTheme(mode: 'oscuro' | 'color') {
        setThemeMenu(false);
        if (typeof window !== 'undefined') {
            if (mode === 'oscuro') {
                document.documentElement.classList.add('modo-oscuro');
            } else {
                document.documentElement.classList.remove('modo-oscuro');
            }
        }
    }

    return ( 
        <header
            className={
                compact
                    ? "flex items-center justify-between px-6 py-3 border-b border-emerald-900/40 bg-black/80 backdrop-blur-md"
                    : "flex items-center justify-between w-full px-4 py-2 sm:px-6 sm:py-3 md:px-12 md:py-4 border-b border-emerald-900/40 bg-black/90 backdrop-blur-md shadow-lg fixed top-0 left-0 z-20"
            }
            style={!compact ? {} : {}}
        >
            {/* Izquierda: Flecha + Nombre */}
            <div className="flex items-center gap-4 min-w-55">
                {compact && showBack && (
                    <button
                        onClick={() => router.back()}
                        className="hover:opacity-80 transition cursor-pointer"
                        title="Volver"
                        aria-label="Volver"
                    >
                        <Image src="/Iconos-Header/Icono_Retroceso-SF.png" alt="Retroceso" width={38} height={38} className="w-10 h-10 object-contain" priority />
                    </button>
                )}
                <span
                    className={
                        compact
                            ? `sm:flex hidden flex-col text-2xl font-semibold tracking-wide ${isDark ? 'text-white' : 'text-green-400'}`
                            : `flex flex-col text-lg font-bold tracking-wide ${isDark ? 'text-white' : 'text-green-400'}`
                    }
                    style={!compact ? { marginLeft: '0.5rem' } : {}}
                >
                    Johan Molina
                    <span className={compact ? `${isDark ? 'text-white' : 'text-green-300'} text-lg font-normal tracking-normal` : `${isDark ? 'text-white' : 'text-green-300'} text-sm font-normal tracking-normal`}>
                        Software Engineer
                    </span>
                </span>
            </div>
            {/* Centro: Versión Beta */}
            <div className="absolute left-[60%] sm:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
                <span
                    className={`bg-white/90 text-black font-bold rounded-full px-4 py-1 shadow-lg text-sm tracking-widest border ${isDark ? 'border-white' : 'border-emerald-400/60'}`}
                    style={{ letterSpacing: '0.15em' }}
                >
                    Beta
                </span>
            </div>
            {/* Derecha: Iconos globales */}
            {/* Mobile: menú hamburguesa */}
            <div className="flex md:hidden">
                <MobileMenu>
                    <Link href="/" title="Home" className="hover:opacity-80 transition flex items-center gap-2 px-4 py-2">
                        <Image src="/Iconos-Header/Icono_Home-SF.png" alt="Home" width={28} height={28} className="w-7 h-7 object-contain" priority />
                        <span className="text-emerald-100 text-sm">Home</span>
                    </Link>
                    <button title="Theme" className="hover:opacity-80 transition cursor-pointer flex items-center gap-2 px-4 py-2">
                        <Image src="/Iconos-Header/Icono_Luna-SF.png" alt="Luna" width={24} height={24} className="w-6 h-6 object-contain" priority />
                        <span className="text-emerald-100 text-sm">Tema</span>
                    </button>
                    <button title="Language" className="hover:opacity-80 transition cursor-pointer flex items-center gap-2 px-4 py-2">
                        <Image src="/Iconos-Header/Icono_Idioma-SF.png" alt="Idioma" width={24} height={24} className="w-6 h-6 object-contain" priority />
                        <span className="text-emerald-100 text-sm">Idioma</span>
                    </button>
                    <button title="Info" className="hover:opacity-80 transition cursor-pointer flex items-center gap-2 px-4 py-2">
                        <Image src="/Iconos-Header/Icono_Info-SF.png" alt="Info" width={24} height={24} className="w-6 h-6 object-contain" priority />
                        <span className="text-emerald-100 text-sm">Info</span>
                    </button>
                </MobileMenu>
            </div>
            {/* Desktop: iconos normales */}
            <nav className="hidden md:flex items-center gap-8 text-xl">
                <Link href="/" title="Home" className={`hover:opacity-80 transition ${isDark ? 'border border-white text-white shadow-none' : ''} rounded-full p-1`}>
                    <Image src="/Iconos-Header/Icono_Home-SF.png" alt="Home" width={34} height={34} className="w-9 h-9 object-contain" priority />
                </Link>
                <div className="relative" ref={themeMenuRef}>
                    <button
                        title="Theme"
                        className={`hover:opacity-80 transition cursor-pointer ${isDark ? 'border border-white text-white shadow-none' : ''} rounded-full p-1`}
                        onClick={() => setThemeMenu((v) => !v)}
                    >
                        <Image src="/Iconos-Header/Icono_Luna-SF.png" alt="Luna" width={28} height={28} className="w-7 h-7 object-contain" priority />
                    </button>
                    {themeMenu && (
                        <div className="absolute right-0 mt-2 w-36 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg z-50 flex flex-col overflow-hidden animate-fade-in">
                            <button
                                className={`w-full px-4 py-2 text-left text-white text-sm transition ${isDark ? 'bg-zinc-800 font-bold ring-2 ring-white' : 'hover:bg-zinc-800'}`}
                                onClick={() => setTheme('oscuro')}
                            >
                                Modo oscuro
                            </button>
                            <button
                                className={`w-full px-4 py-2 text-left text-white text-sm transition ${!isDark ? 'bg-zinc-800 font-bold ring-2 ring-white' : 'hover:bg-zinc-800'}`}
                                onClick={() => setTheme('color')}
                            >
                                Modo color
                            </button>
                        </div>
                    )}
                </div>
                <div className="relative" ref={langMenuRef}>
                    <button
                        title="Idioma / Language"
                        className={`hover:opacity-80 transition cursor-pointer ${isDark ? 'border border-white text-white shadow-none' : ''} rounded-full p-1`}
                        onClick={() => setLangMenu((v) => !v)}
                    >
                        <Image src="/Iconos-Header/Icono_Idioma-SF.png" alt="Idioma" width={28} height={28} className="w-7 h-7 object-contain" priority />
                    </button>
                    {langMenu && (
                        <div className="absolute right-0 mt-2 w-36 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg z-50 flex flex-col overflow-hidden animate-fade-in">
                            <button
                                className={`w-full px-4 py-2 text-left text-white text-sm transition ${language === 'es' ? 'bg-zinc-800 font-bold ring-2 ring-white' : 'hover:bg-zinc-800'}`}
                                onClick={() => setLanguage('es')}
                            >
                                Español
                            </button>
                            <button
                                className={`w-full px-4 py-2 text-left text-white text-sm transition ${language === 'en' ? 'bg-zinc-800 font-bold ring-2 ring-white' : 'hover:bg-zinc-800'}`}
                                onClick={() => {
                                    setLanguage('en');
                                    setShowLangNotice(true);
                                    setLangMenu(false);
                                }}
                            >
                                English
                            </button>
                        </div>
                    )}
                    {/* Aviso de idioma en proceso */}
                    {showLangNotice && (
                        <div
                            id="lang-notice"
                            className="fixed top-20 right-6 md:right-12 z-100 animate-fade-in"
                            style={{ pointerEvents: 'auto' }}
                        >
                            <div className="px-5 py-3 rounded-2xl shadow-2xl border border-zinc-800 text-center font-semibold text-base max-w-xs bg-black text-white flex flex-col items-center gap-2">
                                <span className="text-lg">Pronto porque esta difícil :c</span>
                            </div>
                        </div>
                    )}
                </div>
                <button
                    title="Info"
                    className={`hover:opacity-80 transition cursor-pointer ${isDark ? 'border border-white text-white shadow-none' : ''} rounded-full p-1`}
                    onClick={onShowInfoBeta}
                >
                    <Image src="/Iconos-Header/Icono_Info-SF.png" alt="Info" width={28} height={28} className="w-7 h-7 object-contain" priority />
                </button>
            </nav>
        </header>
    );
}
