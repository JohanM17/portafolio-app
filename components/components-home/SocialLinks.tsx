// Componente que agrupa los links sociales y el botón de CV
import { personalInfo } from "@/lib/data";

type SocialLinksProps = {
    isDark: boolean;
    containerClass: string; // Recibimos las clases exactas del contenedor desde fuera
};

export function SocialLinks({ isDark, containerClass }: SocialLinksProps) {
    // Estilos comunes para los botones redondos (GitHub, LinkedIn)
    const iconBtnClass = `flex items-center justify-center rounded-full w-10 h-10 text-2xl transition shadow ${isDark
        ? 'bg-black border border-white text-white shadow-none'
        : 'bg-zinc-900 border border-emerald-400/40 text-white hover:bg-emerald-500/20'
        }`;

    return (
        <div className={containerClass}>
            {/* Botón Ver CV, link directo al PDF */}
            <a
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition ${isDark
                    ? 'border border-white bg-black text-white shadow-none hover:bg-white/10'
                    : 'border border-emerald-400/40 bg-black/80 text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.4)] hover:bg-emerald-500/20'
                    }`}
            >
                Ver CV
            </a>

            {/* Link GitHub */}
            <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={iconBtnClass}
                aria-label="GitHub"
            >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
            </a>

            {/* Link LinkedIn */}
            <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={iconBtnClass}
                aria-label="LinkedIn"
            >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
                </svg>
            </a>
        </div>
    );
}
