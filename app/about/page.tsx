import { AppLayout } from "@/components/AppLayout";
import { aboutContent } from "@/lib/data";

export default function AboutPage() {
    return (
        <AppLayout title={aboutContent.title}>
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                {aboutContent.description}
            </p>
            <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6 text-sm leading-6 text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                {aboutContent.content}
            </div>
        </AppLayout>
    );
}
