"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Header({ compact = false, showBack = false }: { compact?: boolean; showBack?: boolean }) {
    const router = useRouter();
    return (
        <header
            className={
                compact
                    ? "flex items-center justify-between px-6 py-3 border-b border-emerald-900/40 bg-black/80 backdrop-blur-md"
                    : "flex items-center justify-between w-full px-12 py-4 border-b border-emerald-900/40 bg-black/90 backdrop-blur-md shadow-lg fixed top-0 left-0 z-20"
            }
            style={!compact ? {} : {}}
        >
            {/* Izquierda: Flecha + Nombre */}
            <div className="flex items-center gap-4 min-w-55">
                {compact && showBack && (
                    <button
                        onClick={() => router.back()}
                        className="text-emerald-300 hover:text-emerald-400 transition text-xl"
                        title="Volver"
                        aria-label="Volver"
                    >
                        ←
                    </button>
                )}
                <span
                    className={
                        compact
                            ? "flex flex-col text-xs font-semibold tracking-wide text-green-400"
                            : "flex flex-col text-lg font-bold tracking-wide text-green-400"
                    }
                    style={!compact ? { marginLeft: '0.5rem' } : {}}
                >
                    Johan Molina
                    <span className={compact ? "text-[10px] text-green-300 font-normal tracking-normal" : "text-sm text-green-300 font-normal tracking-normal"}>
                        Software Engineer
                    </span>
                </span>
            </div>
            {/* Derecha: Iconos globales */}
            <nav className={compact ? "flex items-center gap-5 text-lg" : "flex items-center gap-8 text-xl"}>
                <Link href="/" title="Home" className="hover:text-emerald-400 transition"><span role="img" aria-label="Home">🏠</span></Link>
                <button title="Theme" className="hover:text-emerald-400 transition"><span role="img" aria-label="Theme">🌗</span></button>
                <button title="Language" className="hover:text-emerald-400 transition"><span role="img" aria-label="Language">🌍</span></button>
                <button title="Info" className="hover:text-emerald-400 transition"><span role="img" aria-label="Info">ⓘ</span></button>
            </nav>
        </header>
    );
}
