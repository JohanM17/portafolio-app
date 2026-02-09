"use client";


import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

import { useRouter } from "next/navigation";

export default function Header({ compact = false, showBack = false }: { compact?: boolean; showBack?: boolean }) {
    const router = useRouter();
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
                            ? "sm:flex hidden flex-col text-2xl font-semibold tracking-wide text-green-400"
                            : "flex flex-col text-lg font-bold tracking-wide text-green-400"
                    }
                    style={!compact ? { marginLeft: '0.5rem' } : {}}
                >
                    Johan Molina
                    <span className={compact ? "text-lg text-green-300 font-normal tracking-normal" : "text-sm text-green-300 font-normal tracking-normal"}>
                        Software Engineer
                    </span>
                </span>
            </div>
            {/* Centro: Versión Beta */}
            <div className="absolute left-[60%] sm:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
                <span className="bg-white/90 text-black font-bold rounded-full px-4 py-1 shadow-lg text-sm tracking-widest border border-emerald-400/60" style={{letterSpacing: '0.15em'}}>Beta</span>
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
                <Link href="/" title="Home" className="hover:opacity-80 transition">
                    <Image src="/Iconos-Header/Icono_Home-SF.png" alt="Home" width={34} height={34} className="w-9 h-9 object-contain" priority />
                </Link>
                <button title="Theme" className="hover:opacity-80 transition cursor-pointer">
                    <Image src="/Iconos-Header/Icono_Luna-SF.png" alt="Luna" width={28} height={28} className="w-7 h-7 object-contain" priority />
                </button>
                <button title="Language" className="hover:opacity-80 transition cursor-pointer">
                    <Image src="/Iconos-Header/Icono_Idioma-SF.png" alt="Idioma" width={28} height={28} className="w-7 h-7 object-contain" priority />
                </button>
                <button title="Info" className="hover:opacity-80 transition cursor-pointer">
                    <Image src="/Iconos-Header/Icono_Info-SF.png" alt="Info" width={28} height={28} className="w-7 h-7 object-contain" priority />
                </button>
            </nav>
        </header>
    );
}
