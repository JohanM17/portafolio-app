import Link from "next/link";
import Image from "next/image";

type DockItemProps = {
    title: string;
    icon: string;
    href: string;
    description?: string;
    isDark?: boolean;
};

export function DockItem({ title, icon, href, description, isDark = false }: DockItemProps) {
    return (
        <Link
            href={href}
            aria-label={description ? `${title}: ${description}` : title}
            className="group relative z-10 flex w-auto md:w-16 flex-col items-center gap-0 mb-0 pb-0 py-0 md:mb-0 md:pb-0.5 md:py-2 transition-transform duration-200 group-hover:z-20 px-0 md:px-0"
        >
            <span
                className={
                    `relative z-20 flex h-12 w-12 md:h-10 md:w-10 items-center justify-center rounded-2xl border text-xl transition duration-200 group-hover:-translate-y-3 group-hover:scale-110 ` +
                    (isDark
                        ? 'border-white bg-black text-white shadow-none'
                        : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.45)] group-hover:shadow-[0_0_18px_rgba(16,185,129,0.6)]')
                }
            >
                {icon.startsWith("/") ? (
                    <Image src={icon} alt={title} width={40} height={40} className="w-10 h-10 md:w-8 md:h-8 object-contain" />
                ) : (
                    icon
                )}
            </span>
            <span className={`text-[9px] md:text-[10px] font-medium text-center mt-0 md:mt-0 ${isDark ? 'text-white' : 'text-emerald-100/90'}`}>
                {title}
            </span>
        </Link>
    );
}
