import Link from "next/link";
import { ReactNode } from "react";

type AppLayoutProps = {
  title: string;
  children: ReactNode;
};

export function AppLayout({ title, children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10">
        <header className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            ← 
          </Link>
          <h1 className="text-3xl font-semibold">{title}</h1>
        </header>

        <section>{children}</section>
      </main>
    </div>
  );
}
