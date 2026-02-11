// Componente para la foto de perfil y el pingüino animado
import Image from "next/image";

type ProfileImageProps = {
    isDark: boolean;
    containerClass: string;        // Clases para el div principal (tamaño, posición)
    penguinContainerClass: string; // Clases para el div del pingüino
    penguinImageClass: string;     // Clases para la imagen del pingüino
};

export function ProfileImage({
    isDark,
    containerClass,
    penguinContainerClass,
    penguinImageClass
}: ProfileImageProps) {
    return (
        <div className={containerClass}>
            {/* Brillo de fondo (solo en modo claro) */}
            {!isDark && <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-2xl" />}

            {/* Contenedor circular de la foto */}
            <div className={`relative h-full w-full overflow-hidden rounded-full ${isDark ? 'border-none bg-black shadow-none' : 'border-2 border-emerald-400/60 bg-zinc-950 shadow-[0_0_40px_rgba(16,185,129,0.6)]'}`}>
                <Image
                    src="/profile.jpeg"
                    alt="Foto de perfil"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* El pingüino saludando con su máscara de transparencia */}
            <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] ${penguinContainerClass}`}>
                <Image
                    src="/penguin-hi.gif"
                    alt="Pingüino saludando"
                    width={64}
                    height={64}
                    unoptimized
                    className={`h-16 w-auto animate-penguin-slide opacity-90 brightness-90 ${penguinImageClass}`}
                />
            </div>
        </div>
    );
}
