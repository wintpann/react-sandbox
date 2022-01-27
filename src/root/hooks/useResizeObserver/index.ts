import { RefObject, useEffect, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { noop } from '@utils/common';

export type ResizeCallback = (entry: ResizeObserverEntry) => void;

export const useResizeObserver = (callback: ResizeCallback, ref: RefObject<HTMLElement>): void => {
    const observerRef = useRef<ResizeObserver | null>(null);

    useEffect(() => {
        if (!ref.current) {
            return noop;
        }

        observerRef.current = new ResizeObserver((entries) => callback(entries[0]));

        return () => {
            observerRef.current?.disconnect();
            observerRef.current = null;
        };
    }, [callback, ref]);
};
