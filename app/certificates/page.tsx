import { AppLayout } from "@/components/AppLayout";
import { certificatesContent } from "@/lib/data";

export default function CertificatesPage() {
    return (
        <AppLayout title={certificatesContent.title}>
            <div className="grid gap-4">
                {certificatesContent.items.map((item) => (
                    <div
                        key={item.name}
                        className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                    >
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {item.issuer}
                        </p>
                        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                            Credencial: {item.credential}
                        </p>
                        <div className="mt-3 text-sm">
                            <a
                                href={item.link}
                                className="font-medium text-zinc-900 underline dark:text-zinc-100"
                            >
                                Ver certificado
                            </a>
                        </div>
                        <p className="mt-2 text-xs uppercase tracking-widest text-zinc-500">
                            {item.date}
                        </p>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
