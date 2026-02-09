// InfoBetaModal.tsx
"use client";
import { infoBeta } from "../lib/infoBeta";

export function InfoBetaModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-zinc-900 text-white rounded-2xl shadow-2xl border border-zinc-700 w-full max-w-2xl px-6 sm:px-10 py-7 sm:py-10 flex flex-col items-center relative animate-fade-in mx-2"
                style={{ pointerEvents: 'auto', maxHeight: '90vh', overflowY: 'auto' }}
                onClick={e => e.stopPropagation()}
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white tracking-wide text-center" style={{ letterSpacing: '0.04em' }}>{infoBeta.titulo}</h2>
                <div className="mb-4 text-center text-sm sm:text-base text-zinc-200 flex flex-col gap-1">
                    {infoBeta.descripcion.map((d, i) => (
                        <span key={i}>{d}</span>
                    ))}
                </div>
                <ul className="mb-4 w-full flex flex-col gap-2 text-left text-sm sm:text-base">
                    {infoBeta.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-100"><span className="mt-2 w-2 h-2 bg-white rounded-full inline-block shrink-0"></span>{item}</li>
                    ))}
                </ul>
                <div className="text-xs sm:text-sm text-zinc-300 text-center mb-10">{infoBeta.nota}</div>
                <button onClick={onClose} className="mt-2 px-4 py-2 rounded-lg bg-white text-zinc-900 font-semibold shadow hover:bg-zinc-200 transition text-sm">Cerrar</button>
            </div>
        </div>
    );
}
