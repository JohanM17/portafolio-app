import { apps, personalInfo } from "@/lib/data";
import { AppCard } from "@/components/AppCard";

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
            <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10">
                <header className="flex flex-col gap-2">
                    <p className="text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        Portafolio • Sistema de Apps
                    </p>
                    <h1 className="text-3xl font-semibold sm:text-4xl">
                        Hola, soy {personalInfo.name} 👋
                    </h1>
                    <p className="max-w-xl text-base text-zinc-600 dark:text-zinc-300">
                        Este portafolio funciona como un sistema de aplicaciones. Cada
                        sección es una app independiente.
                    </p>
                </header>

                <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {apps.map((app) => (
                        <AppCard
                            key={app.id}
                            title={app.title}
                            icon={app.icon}
                            href={app.href}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}