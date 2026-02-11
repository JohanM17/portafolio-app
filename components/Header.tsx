"use client";

// Importamos la imagen y los componentes que forman el header
import Image from "next/image";
import MobileMenu from "./components-header/MobileMenu";
import VersionBadge from "./components-header/VersionBadge";
import NameAndTitle from "./components-header/NameAndTitle";
import HomeButton from "./components-header/buttons/HomeButton";
import ThemeButton from "./components-header/buttons/ThemeButton";
import LanguageButton from "./components-header/buttons/LanguageButton";
import InfoButton from "./components-header/buttons/InfoButton";

// Hooks para navegación, referencias y modo oscuro
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

// Componente principal del Header
export default function Header({ compact = false, showBack = false, onShowInfoBeta }: { compact?: boolean; showBack?: boolean; onShowInfoBeta?: () => void }) {
    const router = useRouter(); // Para navegar hacia atrás si hace falta
    const isDark = useDarkMode(); // Saber si está en modo oscuro
    const langMenuRef = useRef<HTMLDivElement>(null); // Referencia para el menú de idioma

    return (
        // El header principal, cambia de estilo si es compacto o no
        <header
            className={
                compact
                    ? "flex items-center justify-between px-6 py-3 border-b border-emerald-900/40 bg-black/80 backdrop-blur-md"
                    : "flex items-center justify-between w-full px-4 py-2 sm:px-6 sm:py-3 md:px-12 md:py-4 border-b border-emerald-900/40 bg-black/90 backdrop-blur-md shadow-lg fixed top-0 left-0 z-20"
            }
            style={!compact ? {} : {}}
        >
            {/* Bloque: Botón de retroceso y nombre/título */}
            <div className="flex items-center gap-4 min-w-55">
                {compact && showBack && (
                    // Si es compacto y debe mostrar el botón de volver
                    <button
                        onClick={() => router.back()}
                        className="hover:opacity-80 transition cursor-pointer"
                        title="Volver"
                        aria-label="Volver"
                    >
                        <Image src="/Iconos-Header/Icono_Retroceso-SF.png" alt="Retroceso" width={38} height={38} className="w-10 h-10 object-contain" priority />
                    </button>
                )}

                {/* Nombre y título de la persona */}
                <NameAndTitle isDark={isDark} compact={compact} />
            </div>

            {/* Bloque: Badge de versión */}
            <VersionBadge isDark={isDark} />

            {/* Bloque: Menú móvil (solo se ve en pantallas pequeñas) */}
            <div className="flex md:hidden">
                <MobileMenu isDark={isDark}>
                    <HomeButton isDark={isDark} />
                    <ThemeButton isDark={isDark} />
                    <LanguageButton isDark={isDark} />
                    <InfoButton isDark={isDark} onClick={onShowInfoBeta} />
                </MobileMenu>
            </div>

            {/* Bloque: Navegación principal (solo en escritorio) */}
            <nav className="hidden md:flex items-center gap-8 text-xl">
                {/* Botón de inicio */}
                <HomeButton isDark={isDark} className={isDark ? 'border border-white text-white shadow-none' : ''} />
                {/* Botón para cambiar tema */}
                <ThemeButton isDark={isDark} />
                {/* Botón de idioma, con ref para posibles menús */}
                <div className="relative" ref={langMenuRef}>
                    <LanguageButton isDark={isDark} />
                </div>
                {/* Botón de información */}
                <InfoButton isDark={isDark} onClick={onShowInfoBeta} />
            </nav>
        </header>
    );
}