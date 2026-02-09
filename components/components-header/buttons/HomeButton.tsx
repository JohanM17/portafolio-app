// Botón para ir a la página principal (Home)
import Link from "next/link";
import Image from "next/image";

// Recibe si está en modo oscuro y clases extra
interface HomeButtonProps {
    isDark?: boolean;
    className?: string;
}

// Componente del botón Home
export default function HomeButton({ isDark = false, className = "" }: HomeButtonProps) {
    return (
        // Link que lleva a la página principal
        <Link
            href="/"
            className={`hover:opacity-80 transition rounded-full p-1 flex items-center gap-2 ${isDark ? 'border border-white text-white shadow-none' : ''} ${className}`}
        >
            {/* Icono de casita */}
            <Image
                src="/Iconos-Header/Icono_Home-SF.png"
                alt="Home"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
                priority
            />
            {/* Texto Home solo en móvil */}
            <span className="text-emerald-100 text-sm md:hidden" title="Home">Home</span>
        </Link>
    );
}


