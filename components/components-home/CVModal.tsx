// Componente para el modal del CV (temporalmente bloqueado)
type CVModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export function CVModal({ isOpen, onClose }: CVModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-zinc-900 rounded-2xl shadow-2xl px-8 py-7 flex flex-col items-center gap-3 border border-emerald-400/30 min-w-[320px]">
                <span className="text-4xl mb-1">🔒</span>
                <span className="text-lg font-semibold text-white">No la encuentro jajaja</span>
                <button
                    onClick={onClose}
                    className="mt-2 px-4 py-1 rounded-full bg-emerald-600/80 text-white text-sm font-medium hover:bg-emerald-500/90 transition"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}
