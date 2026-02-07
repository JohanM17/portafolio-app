import { AppLayout } from "@/components/AppLayout";
import { educationContent } from "@/lib/data";

export default function EducationPage() {
    return (
        <AppLayout title={educationContent.title}>
            <div className="grid gap-4">
                {educationContent.items.map((item) => (
                    <div
                        key={`${item.school}-${item.year}`}
                        className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                    >
                        <h3 className="text-lg font-semibold">{item.degree}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {item.school} • {item.field}
                        </p>
                        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                            {item.description}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-widest text-zinc-500">
                            {item.year}
                        </p>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
