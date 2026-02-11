// Componente de la barra de aplicaciones (Dock)
import { apps } from "@/lib/data";
import { DockItem } from "@/components/DockItem";

type AppDockProps = {
    isDark: boolean;
};

export function AppDock({ isDark }: AppDockProps) {
    return (
        <section className="mt-2 md:mt-auto w-full">
            <div className="relative mx-auto w-full max-w-7xl">
                {/* Fondo del dock con brillo esmeralda */}
                <div className="relative z-0 h-10 sm:h-96 md:h-20 md:w-237.5 rounded-3xl bg-black/80 shadow-[0_0_30px_rgba(16,185,129,0.4)] border border-emerald-400/30 py-2 md:py-0 mx-auto" />

                <div className="absolute inset-0 z-10 px-2 sm:px-4 flex items-center justify-center h-full">
                    {/* Contenedor de iconos: Grid en mobile, Flex en desktop */}
                    <div
                        className="grid grid-cols-4 grid-rows-2 gap-x-0 gap-y-0 sm:gap-x-0 sm:gap-y-0 w-full h-full place-content-center md:flex md:flex-row md:items-end md:justify-center md:gap-4 md:pb-4 md:pt-4 md:overflow-visible"
                        style={{ rowGap: 0 }}
                        aria-label="Dock de aplicaciones"
                    >
                        {apps.map((app) => (
                            <DockItem
                                key={app.id}
                                title={app.title}
                                description={app.description}
                                icon={app.icon}
                                href={app.href}
                                isDark={isDark}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
