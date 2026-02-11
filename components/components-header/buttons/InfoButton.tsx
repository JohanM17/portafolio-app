
// Botón para mostrar información (abre modal)
import { ButtonHTMLAttributes } from "react";
import Image from "next/image";

// Recibe si está en modo oscuro y clases extra
interface InfoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isDark: boolean;
    className?: string;
}

// Componente del botón de información
export default function InfoButton({ isDark, className = "", ...props }: InfoButtonProps) {
    return (
        // Botón que abre el modal de información
        <button
            title="Info"
            className={`hover:opacity-80 transition cursor-pointer rounded-full p-1 flex items-center gap-2 ${isDark ? 'border border-white text-white shadow-none' : ''} ${className}`}
            {...props}
        >
            {/* Icono de información */}
            <Image
                src="/Iconos-Header/Icono_Info-SF.png"
                alt="Info"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
                priority
            />
            {/* Texto Info solo en móvil */}
            <span className="text-emerald-100 text-sm md:hidden">Info</span>
        </button>
    );
}
