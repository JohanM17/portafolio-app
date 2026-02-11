// Botón para cambiar el tema (oscuro/claro)
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Recibe si está en modo oscuro y clases extra
type ThemeButtonProps = {
    isDark: boolean;
    className?: string;
};

// Componente del botón de tema
export default function ThemeButton({ isDark, className = "" }: ThemeButtonProps) {
    // Estado para abrir/cerrar el menú de temas
    const [menuOpen, setMenuOpen] = useState(false);
    // Referencia al menú de temas
    const menuRef = useRef<HTMLDivElement>(null);

    // Cambia el tema global (oscuro o color)
    function setTheme(mode: 'oscuro' | 'color') {
        if (typeof window !== 'undefined') {
            if (mode === 'oscuro') {
                document.documentElement.classList.add('modo-oscuro');
                localStorage.setItem('theme-mode', 'oscuro');
            } else {
                document.documentElement.classList.remove('modo-oscuro');
                localStorage.setItem('theme-mode', 'color');
            }
        }
    }

    // Cierra el menú si haces click fuera
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        }
        if (menuOpen) document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [menuOpen]);

    return (
        <div className="relative" ref={menuRef}>
            {/* Botón principal para abrir el menú de temas */}
            <button
                title="Theme"
                className={`hover:opacity-80 transition cursor-pointer rounded-full p-1 flex items-center gap-2 ${isDark ? 'border border-white text-white shadow-none' : ''} ${className}`}
                onClick={() => setMenuOpen((v) => !v)}
                type="button"
            >
                {/* Icono de luna */}
                <Image
                    src="/Iconos-Header/Icono_Luna-SF.png"
                    alt="Luna"
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                    loading="eager"
                />
                {/* Texto Tema solo en móvil */}
                <span className="text-emerald-100 text-sm md:hidden">Tema</span>
            </button>
            {/* Menú desplegable de temas */}
            {menuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg z-50 flex flex-col overflow-hidden animate-fade-in">
                    <button
                        className={`w-full px-4 py-2 text-left text-white text-sm transition ${isDark ? 'bg-zinc-800 font-bold ring-2 ring-white' : 'hover:bg-zinc-800'}`}
                        onClick={() => { setTheme('oscuro'); setMenuOpen(false); }}
                        type="button"
                    >
                        Modo oscuro
                    </button>
                    <button
                        className={`w-full px-4 py-2 text-left text-white text-sm transition ${!isDark ? 'bg-zinc-800 font-bold ring-2 ring-white' : 'hover:bg-zinc-800'}`}
                        onClick={() => { setTheme('color'); setMenuOpen(false); }}
                        type="button"
                    >
                        Modo color
                    </button>
                </div>
            )}
        </div>
    );
}