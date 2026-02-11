// Componente que muestra el fondo decorativo con imagen
// Solo se muestra cuando NO está en modo oscuro
type BackgroundDecorativoProps = {
    isDark: boolean; // Si está en modo oscuro o no
};

export function BackgroundDecorativo({ isDark }: BackgroundDecorativoProps) {
    // Si está en modo oscuro, no mostrar nada
    if (isDark) return null;

    return (
        <>
            {/* Fondo con imagen y gradiente */}
            <div
                aria-hidden="true"
                className="pointer-events-none select-none fixed top-0 left-0 w-full h-full z-0 bg-decorativo"
                style={{
                    background: `radial-gradient(ellipse 70% 50% at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.85) 100%), url(/Background.webp) center / cover no-repeat`,
                    opacity: 0.93,
                }}
            />
            {/* Overlay negro semi-transparente */}
            <div className="pointer-events-none select-none fixed top-0 left-0 w-full h-full z-10 bg-black/40 overlay-negro" />
        </>
    );
}
