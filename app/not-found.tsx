import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
            <main className="mx-auto flex max-w-2xl flex-col gap-4 px-6 py-16 text-center">
                <h1 className="text-3xl font-semibold">Página no encontrada</h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    La ruta que intentas abrir no existe.
                </p>
                <Link
                    href="/"
                    className="mx-auto inline-flex w-fit rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                >
                    Volver al inicio
                </Link>
            </main>
        </div>
    );
}
