import { ReactNode } from "react";
import Header from "@/components/Header";

// Layout para todas las apps: header compacto y flecha de retroceso
export default function AppsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header compact={true} showBack={true} />
            <main className="px-4 py-8 max-w-3xl mx-auto w-full">
                {children}
            </main>
        </div>
    );
}
