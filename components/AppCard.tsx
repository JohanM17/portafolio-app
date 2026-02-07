import Link from "next/link";

type AppCardProps = {
  title: string;
  icon: string;
  href: string;
};

export function AppCard({ title, icon, href }: AppCardProps) {
  return (
    <Link href={href}>
      <button className="flex h-24 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white text-sm font-medium shadow-sm transition hover:shadow-md active:scale-95 dark:border-zinc-800 dark:bg-zinc-900">
        <span className="text-2xl">{icon}</span>
        <span>{title}</span>
      </button>
    </Link>
  );
}
