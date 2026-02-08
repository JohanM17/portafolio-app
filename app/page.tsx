import Image from "next/image";
import { apps, personalInfo } from "@/lib/data";
import { DockItem } from "@/components/DockItem";
import Header from "@/components/Header";

export default function Home() {


    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Fondo decorativo, absolutamente posicionado, adaptado a la ventana */}
            <div
                aria-hidden="true"
                className="pointer-events-none select-none fixed top-0 left-0 w-full h-full z-0"
                style={{
                    background: `radial-gradient(ellipse 70% 50% at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.85) 100%), url(/Background.png) center / cover no-repeat`,
                    opacity: 0.93,
                }}
            />
            {/* Overlay negro para oscurecer el fondo */}
            <div className="pointer-events-none select-none fixed top-0 left-0 w-full h-full z-10 bg-black/40" />
            <main className="relative z-10 flex min-h-screen w-full flex-col gap-16 px-12 py-12">
                <Header compact={false} />
                <div className="flex flex-1 gap-16 w-full items-stretch">
                    <section className="flex flex-col gap-8 w-1/2 justify-center mt-20 ml-24">
                        <h1 className="text-5xl font-semibold leading-tight">
                            <span className="text-emerald-200">
                                {personalInfo.title}
                            </span>
                        </h1>
                        <p className="text-lg text-white">
                            {personalInfo.location}
                        </p>
                        <p className="text-lg text-white">
                            {personalInfo.description}
                        </p>
                        <div>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 bg-black/80 px-4 py-2 text-sm font-semibold text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.4)] transition hover:bg-emerald-500/20"
                            >
                                Ver CV
                            </a>
                        </div>
                    </section>
                    <section className="flex flex-col items-end justify-center w-1/2">
                        <div className="relative h-60 w-70 mt-16 mr-32">
                            <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-2xl" />
                            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-emerald-400/60 bg-zinc-950 shadow-[0_0_40px_rgba(16,185,129,0.6)]">
                                <Image
                                    src="/profile.jpeg"
                                    alt="Foto de perfil"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-6 left-1/2 h-20 w-32 -translate-x-1/2 overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                                <Image
                                    src="/penguin-hi.gif"
                                    alt="Pingüino saludando"
                                    width={80}
                                    height={80}
                                    unoptimized
                                    className="h-20 w-auto animate-penguin-slide opacity-90 brightness-90"
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <section className="mt-auto w-full">
                    <div className="relative mx-auto w-full max-w-7xl">
                        <div className="relative z-0 h-24 rounded-3xl bg-black/80 shadow-[0_0_30px_rgba(16,185,129,0.4)] border border-emerald-400/30" />
                        <div className="absolute inset-0 z-10 px-4">
                            <div className="flex items-end justify-center gap-12 pb-4 pt-4">
                                {apps.map((app) => (
                                    <DockItem
                                        key={app.id}
                                        title={app.title}
                                        description={app.description}
                                        icon={app.icon}
                                        href={app.href}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}