"use client";
import { useState } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import Header from "@/components/Header";
import { InfoBetaModal } from "@/components/InfoBetaModal";
import { BackgroundDecorativo } from "@/components/components-home/BackgroundDecorativo";
import { AppDock } from "@/components/components-home/AppDock";
import { ProfileImage } from "@/components/components-home/ProfileImage";
import { SocialLinks } from "@/components/components-home/SocialLinks";
import { HeroInfo } from "@/components/components-home/HeroInfo";

export default function Home() {
    const [showInfoBeta, setShowInfoBeta] = useState(false);
    const isDark = useDarkMode();

    return (
        <div className={`relative min-h-screen overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-black text-white'}`}>
            {/* Fondo decorativo (solo en modo claro) */}
            <BackgroundDecorativo isDark={isDark} />

            <main className="relative z-10 flex min-h-screen w-full flex-col gap-0 px-2 pt-0 pb-8 sm:gap-3 sm:px-4 sm:pt-1 sm:pb-10 md:gap-10 md:px-8 md:py-12 lg:px-12 lg:py-12">
                <Header compact={false} onShowInfoBeta={() => setShowInfoBeta(true)} />

                {/* CONTENIDO MOBILE (Oculto en Desktop) */}
                <div className="block md:hidden w-full">
                    <div className="flex flex-col items-center w-full mt-0">
                        <ProfileImage
                            isDark={isDark}
                            containerClass="relative h-32 w-32 mt-24"
                            penguinContainerClass="h-16 w-24"
                            penguinImageClass="h-16 w-auto"
                        />
                    </div>

                    <HeroInfo
                        isDark={isDark}
                        containerClass="flex flex-col gap-4 w-full justify-center items-center text-center mt-8"
                        titleClass="text-3xl font-semibold leading-tight"
                        subtitleClass="text-base font-medium -mt-2 mb-2 ml-1"
                    />

                    <SocialLinks
                        isDark={isDark}
                        containerClass="flex flex-wrap items-center justify-center gap-4 mt-3 mb-2"
                    />
                </div>

                {/* CONTENIDO DESKTOP (Oculto en Mobile) */}
                <div className="hidden md:flex flex-col-reverse md:flex-row flex-1 gap-0 md:gap-12 lg:gap-16 w-full items-stretch mt-0 sm:mt-2">
                    <section className="flex flex-col gap-0 md:gap-8 w-full md:w-1/2 justify-center mt-0 sm:mt-1 md:mt-10 md:ml-12 lg:ml-24">
                        <HeroInfo
                            isDark={isDark}
                            containerClass="flex flex-col gap-0 md:gap-8 w-full justify-center"
                            titleClass="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
                            subtitleClass="text-base sm:text-lg font-medium -mt-2 mb-2 ml-1"
                        />
                        <SocialLinks
                            isDark={isDark}
                            containerClass="flex flex-wrap items-center gap-4 sm:gap-6"
                        />
                    </section>

                    <section className="flex flex-col items-center md:items-end justify-start md:justify-center w-full md:w-1/2">
                        <ProfileImage
                            isDark={isDark}
                            containerClass="relative h-28 w-28 md:h-60 md:w-70 -mt-14 md:mt-16 md:mr-16 lg:mr-32 mx-auto md:mx-0"
                            penguinContainerClass="h-16 w-24 sm:h-20 sm:w-32"
                            penguinImageClass="h-16 w-auto sm:h-20"
                        />
                    </section>
                </div>

                {/* Dock de aplicaciones */}
                <AppDock isDark={isDark} />
            </main>

            {/* Modales */}
            <InfoBetaModal open={showInfoBeta} onClose={() => setShowInfoBeta(false)} />
        </div>
    );
}