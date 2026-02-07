import { AppLayout } from "@/components/AppLayout";
import { experienceContent } from "@/lib/data";

export default function ExperiencePage() {
    return (
        <AppLayout title={experienceContent.title}>
            <div className="grid gap-4">
                {experienceContent.items.map((item) => (
                    <div
                        key={`${item.company}-${item.position}`}
                        className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                    >
                        <h3 className="text-lg font-semibold">{item.position}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {item.company} • {item.duration}
                        </p>
                        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                            {item.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
