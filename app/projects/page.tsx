import Image from "next/image";
import { AppLayout } from "@/components/AppLayout";
import { projectsContent } from "@/lib/data";

export default function ProjectsPage() {
    return (
        <AppLayout title={projectsContent.title}>
            <div className="grid gap-4">
                {projectsContent.items.map((project) => (
                    <div
                        key={project.name}
                        className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                    >
                        <h3 className="text-lg font-semibold">{project.name}</h3>
                        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                            {project.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4 flex gap-3 text-sm">
                            <a
                                href={project.link}
                                className="font-medium text-zinc-900 underline dark:text-zinc-100"
                            >
                                Ver demo
                            </a>
                            <a
                                href={project.github}
                                className="font-medium text-zinc-900 underline dark:text-zinc-100"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
