import { useState } from "react";

export default function MobileMenu({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <button
                className="flex flex-col justify-center items-center w-10 h-10"
                aria-label="Abrir menú"
                onClick={() => setOpen((v) => !v)}
            >
                <span className="block w-7 h-1 bg-emerald-300 rounded mb-1 transition-all" style={{ transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }} />
                <span className={`block w-7 h-1 bg-emerald-300 rounded mb-1 transition-all ${open ? 'opacity-0' : ''}`} />
                <span className="block w-7 h-1 bg-emerald-300 rounded transition-all" style={{ transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-40 rounded-lg bg-black/95 border border-emerald-700 shadow-lg flex flex-col z-50 animate-fade-in">
                    {children}
                </div>
            )}
        </div>
    );
}
