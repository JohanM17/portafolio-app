import { useEffect } from "react";

/**
 * Hook para detectar clics fuera de un elemento referenciado.
 * @param ref - referencia al elemento DOM
 * @param handler - función a ejecutar al hacer clic fuera
 */
export function useClickOutside<T extends HTMLElement>(ref: React.RefObject<T | null>, handler: () => void) {
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [ref, handler]);
}
