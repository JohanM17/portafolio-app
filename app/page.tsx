export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
            <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10">
                <header className="flex flex-col gap-2">
                    <p className="text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        Portafolio • Sistema de Apps
                    </p>
                    <h1 className="text-3xl font-semibold sm:text-4xl">
                        Hola, soy Johan Felipe Molina Aguirre 👋
                    </h1>
                    <p className="max-w-xl text-base text-zinc-600 dark:text-zinc-300">
                        Este portafolio funciona como un sistema de aplicaciones. Cada
                        sección es una app independiente.
                    </p>
                </header>

                <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {["Quién soy", "Formación", "Experiencia", "Proyectos", "Certificados", "Contacto"].map((label) => (
                        <button
                            key={label}
                            className="flex h-24 flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white text-sm font-medium shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            {label}
                        </button>
                    ))}
                </section>
            </main>
        </div>
    );
}