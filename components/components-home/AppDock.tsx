// Componente de la barra de aplicaciones (Dock)
import { apps, App } from "../../lib/data";
import { DockItem } from "../DockItem";

type AppDockProps = {
    isDark: boolean;
};

export function AppDock({ isDark }: AppDockProps) {
    return (
        <section className="mt-auto w-full px-2 pb-4">
            <div className={`relative mx-auto w-full max-w-5xl rounded-3xl border p-2 ${isDark ? 'bg-black/80 border-white/20' : 'bg-black/80 border-emerald-400/30 shadow-[0_0_30px_rgba(16,185,129,0.4)]'
                }`}>
                {/* Contenedor con scroll horizontal en móvil, centrado en desktop */}
                <div
                    className="flex flex-row items-end gap-3 px-2 overflow-x-auto md:overflow-visible md:justify-center scrollbar-hide snap-x"
                    aria-label="Dock de aplicaciones"
                >
                    {apps.map((app: App) => (
                        <div key={app.id} className="snap-center flex-shrink-0">
                            <DockItem
                                title={app.title}
                                description={app.description}
                                icon={app.icon}
                                href={app.href}
                                isDark={isDark}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
