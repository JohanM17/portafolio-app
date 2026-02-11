// Muestra el nombre y el título de la persona

// Componente para mostrar el nombre y el título, cambia según si es compacto o no
export default function NameAndTitle({ isDark, compact }: { isDark: boolean; compact: boolean }) {
    return (
        <span
            className={
                compact
                    ? `sm:flex hidden flex-col text-2xl font-semibold tracking-wide ${isDark ? 'text-white' : 'text-green-400'}`
                    : `flex flex-col text-lg font-bold tracking-wide ${isDark ? 'text-white' : 'text-green-400'}`
            }
            style={!compact ? { marginLeft: '0.5rem' } : {}}
        >
            {/* Nombre principal */}
            Johan Molina
            {/* Título debajo del nombre */}
            <span
                className={
                    compact
                        ? `${isDark ? 'text-white' : 'text-green-300'} text-lg font-normal tracking-normal`
                        : `${isDark ? 'text-white' : 'text-green-300'} text-sm font-normal tracking-normal`
                }
            >
                Software Engineer
            </span>
        </span>
    );
}
