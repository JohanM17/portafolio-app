import { useEffect, useState } from "react";

/**
 * Hook para detectar si el modo oscuro está activo según la clase del HTML y localStorage.
 * Devuelve true si está en modo oscuro, false si no.
 */
export function useDarkMode(): boolean {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        // Leer preferencia de modo desde localStorage
        const savedMode = typeof window !== 'undefined' ? localStorage.getItem('theme-mode') : null;
        if (savedMode === 'oscuro') {
            html.classList.add('modo-oscuro');
        } else {
            html.classList.remove('modo-oscuro');
        }
        const update = () => setIsDark(html.classList.contains('modo-oscuro'));
        update();
        const observer = new MutationObserver(update);
        observer.observe(html, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return isDark;
}
