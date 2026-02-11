// DockItem: representa una app en el dock (barra de iconos)
import Link from "next/link";
import Image from "next/image";

// Recibe la info de la app: título, icono, enlace, descripción y si está en modo oscuro
type DockItemProps = {
    title: string;
    icon: string;
    href: string;
    description?: string;
    isDark?: boolean;
};

// Componente que muestra un ítem del dock
export function DockItem({ title, icon, href, description, isDark = false }: DockItemProps) {
    return (
        // Enlace que representa la app en el dock
        <Link
            href={href}
            aria-label={description ? `${title}: ${description}` : title}
            className="group relative z-10 flex w-16 flex-col items-center gap-0 transition-transform duration-200 group-hover:z-20 py-2"
        >
            {/* Bloque del icono, cambia estilo según modo oscuro */}
            <span
                className={
                    `relative z-20 flex h-12 w-12 md:h-10 md:w-10 items-center justify-center rounded-2xl border text-xl transition duration-200 group-hover:-translate-y-3 group-hover:scale-110 ` +
                    (isDark
                        ? 'border-white bg-black text-white shadow-none'
                        : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.45)] group-hover:shadow-[0_0_18px_rgba(16,185,129,0.6)]')
                }
            >
                {/* Si el icono es una ruta, muestra imagen; si no, muestra el icono como texto o JSX */}
                {icon.startsWith("/") ? (
                    <Image src={icon} alt={title} width={40} height={40} className="w-10 h-10 md:w-8 md:h-8 object-contain" />
                ) : (
                    icon
                )}
            </span>
            {/* Título de la app debajo del icono */}
            <span className={`text-[9px] md:text-[10px] font-medium text-center mt-0 md:mt-0 ${isDark ? 'text-white' : 'text-emerald-100/90'}`}>
                {title}
            </span>
        </Link>
    );
}
