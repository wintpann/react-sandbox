import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

export const useClickOutside = (
    ref: RefObject<HTMLElement>,
    handler: (event: Event) => void,
): void => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
};
