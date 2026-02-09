// Menú hamburguesa para móvil
import { useState } from "react";

// Componente que muestra el menú móvil cuando se abre
export default function MobileMenu({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false); // Estado para abrir/cerrar el menú
    return (
        <div className="relative">
            {/* Botón hamburguesa para abrir/cerrar el menú */}
            <button
                className="flex flex-col justify-center items-center w-10 h-10"
                aria-label="Abrir menú"
                onClick={() => setOpen((v) => !v)}
            >
                <span className="block w-7 h-1 bg-emerald-300 rounded mb-1 transition-all" style={{ transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }} />
                <span className={`block w-7 h-1 bg-emerald-300 rounded mb-1 transition-all ${open ? 'opacity-0' : ''}`} />
                <span className="block w-7 h-1 bg-emerald-300 rounded transition-all" style={{ transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
            </button>
            {/* Menú desplegable con los botones, solo si está abierto */}
            {open && (
                <div className="absolute right-0 mt-2 w-40 rounded-lg bg-black/95 border border-emerald-700 shadow-lg flex flex-col z-50 animate-fade-in">
                    {children}
                </div>
            )}
        </div>
    );
}
