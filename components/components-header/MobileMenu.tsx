// Menú hamburguesa para móvil
import { useState, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

// Componente que muestra el menú móvil cuando se abre
export default function MobileMenu({ children, isDark }: { children: React.ReactNode; isDark: boolean }) {
    const [open, setOpen] = useState(false); // Estado para abrir/cerrar el menú
    const menuRef = useRef<HTMLDivElement>(null);

    // Si el menú está abierto y se clickea fuera, se cierra
    useClickOutside(menuRef, () => {
        if (open) setOpen(false);
    });

    const barClass = `block w-7 h-1 rounded transition-all ${isDark ? "bg-white" : "bg-emerald-300"
        }`;

    return (
        <div className="relative" ref={menuRef}>
            {/* Botón hamburguesa para abrir/cerrar el menú */}
            <button
                className="flex flex-col justify-center items-center w-10 h-10"
                aria-label="Abrir menú"
                onClick={() => setOpen((v) => !v)}
            >
                <span
                    className={`${barClass} mb-1`}
                    style={{ transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }}
                />
                <span
                    className={`${barClass} mb-1 ${open ? 'opacity-0' : ''}`}
                />
                <span
                    className={barClass}
                    style={{ transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
                />
            </button>
            {/* Menú desplegable con los botones, solo si está abierto */}
            {open && (
                <div className={`absolute right-0 mt-2 w-40 rounded-lg border shadow-lg flex flex-col z-50 animate-fade-in ${isDark ? "bg-black/95 border-white/40" : "bg-black/95 border-emerald-700"
                    }`}>
                    {children}
                </div>
            )}
        </div>
    );
}
