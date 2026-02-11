
// Botón para cambiar el idioma de la app
import { ButtonHTMLAttributes, useState, useRef, useEffect } from "react";
import Image from "next/image";

// Recibe si está en modo oscuro y clases extra
interface LanguageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isDark: boolean;
    className?: string;
}

// Componente del botón de idioma
export default function LanguageButton({ isDark, className = "" }: LanguageButtonProps) {
    // Estado para abrir/cerrar el menú de idiomas
    const [langMenu, setLangMenu] = useState(false);
    // Estado para mostrar el aviso de idioma en proceso
    const [showLangNotice, setShowLangNotice] = useState(false);
    // Estado para saber qué idioma está seleccionado
    const [selectedLang, setSelectedLang] = useState<'es' | 'en'>('es');
    // Referencia al menú de idiomas
    const langMenuRef = useRef<HTMLDivElement>(null);

    // Cierra el menú o el aviso si haces click fuera
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
                setLangMenu(false);
            }
            if (showLangNotice) {
                const notice = document.getElementById('lang-notice');
                if (notice && !notice.contains(e.target as Node)) {
                    setShowLangNotice(false);
                }
            }
        }
        if (langMenu || showLangNotice) document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [langMenu, showLangNotice]);

    return (
        <div className="relative" ref={langMenuRef}>
            {/* Botón principal para abrir el menú de idiomas */}
            <button
                title="Idioma / Language"
                className={`hover:opacity-80 transition cursor-pointer rounded-full p-1 flex items-center gap-2 ${isDark ? 'border border-white text-white shadow-none' : ''} ${className}`}
                onClick={() => setLangMenu((v) => !v)}
                type="button"
            >
                {/* Icono de idioma */}
                <Image
                    src="/Iconos-Header/Icono_Idioma-SF.png"
                    alt="Idioma"
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                    priority
                />
                {/* Texto solo en móvil */}
                <span className="text-emerald-100 text-sm md:hidden">Idioma</span>
            </button>
            {/* Menú desplegable de idiomas */}
            {langMenu && (
                <div className="absolute right-0 mt-2 w-36 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg z-50 flex flex-col overflow-hidden animate-fade-in">
                    <button
                        className={`w-full px-4 py-2 text-left text-white text-sm transition ${selectedLang === 'es' ? 'bg-zinc-800 font-bold ring-2 ring-white' : 'hover:bg-zinc-800'}`}
                        onClick={() => {
                            setSelectedLang('es');
                            setLangMenu(false);
                        }}
                        type="button"
                    >
                        Español
                    </button>
                    <button
                        className={`w-full px-4 py-2 text-left text-white text-sm transition ${selectedLang === 'en' ? 'bg-zinc-800 font-bold ring-2 ring-white' : 'hover:bg-zinc-800'}`}
                        onClick={() => {
                            setShowLangNotice(true);
                            setLangMenu(false);
                        }}
                        type="button"
                    >
                        English
                    </button>
                </div>
            )}
            {/* Aviso de idioma en proceso */}
            {showLangNotice && (
                <div
                    id="lang-notice"
                    className="fixed top-20 right-6 md:right-12 z-100 animate-fade-in"
                    style={{ pointerEvents: 'auto' }}
                >
                    <div className="px-5 py-3 rounded-2xl shadow-2xl border border-zinc-800 text-center font-semibold text-base max-w-xs bg-black text-white flex flex-col items-center gap-2">
                        <span className="text-lg">Pronto porque esta difícil :c</span>
                    </div>
                </div>
            )}
        </div>
    );
}
