// Badge que muestra la versión Beta

// Componente para mostrar el badge de versión
export default function VersionBadge({ isDark }: { isDark: boolean }) {
    return (
        <div className="absolute left-[60%] sm:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
            {/* Badge con la palabra Beta */}
            <span
                className={`bg-white/90 text-black font-bold rounded-full px-4 py-1 shadow-lg text-sm tracking-widest border ${isDark ? 'border-white' : 'border-emerald-400/60'}`}
                style={{ letterSpacing: '0.15em' }}
            >
                Beta 1.2
            </span>
        </div>
    );
}
