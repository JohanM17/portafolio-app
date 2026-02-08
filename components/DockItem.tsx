import Link from "next/link";

type DockItemProps = {
    title: string;
    icon: string;
    href: string;
    description?: string;
};

export function DockItem({ title, icon, href, description }: DockItemProps) {
    return (
        <Link
            href={href}
            aria-label={description ? `${title}: ${description}` : title}
            className="group relative z-10 flex w-16 flex-col items-center gap-1 transition-transform duration-200 group-hover:z-20"
        >
            <span className="relative z-20 flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-xl text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.45)] transition duration-200 group-hover:-translate-y-3 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(16,185,129,0.6)]">
                {icon}
            </span>
            <span className="text-[10px] font-medium text-emerald-100/90 text-center">
                {title}
            </span>
        </Link>
    );
}
