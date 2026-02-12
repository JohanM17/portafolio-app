"use client";

import { ReactNode, useState } from "react";
import Header from "@/components/Header";
import { InfoBetaModal } from "@/components/InfoBetaModal";

// Layout para todas las apps: header compacto y flecha de retroceso
export default function AppsLayout({ children }: { children: ReactNode }) {
    const [showInfoBeta, setShowInfoBeta] = useState(false);
    return (
        <div className="min-h-screen bg-black text-white">
            <Header compact={true} showBack={true} onShowInfoBeta={() => setShowInfoBeta(true)} />
            <main className="w-full min-h-screen">
                {children}
            </main>
            <InfoBetaModal open={showInfoBeta} onClose={() => setShowInfoBeta(false)} />
        </div>
    );
}
