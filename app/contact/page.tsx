import { AppLayout } from "@/components/AppLayout";
import { contactContent } from "@/lib/data";

export default function ContactPage() {
    return (
        <AppLayout title={contactContent.title}>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
                {contactContent.description}
            </p>
            <div className="mt-4 grid gap-3">
                {contactContent.links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 text-sm font-medium shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                    >
                        <span className="text-xl">{link.icon}</span>
                        <span>{link.label}</span>
                    </a>
                ))}
            </div>
        </AppLayout>
    );
}
