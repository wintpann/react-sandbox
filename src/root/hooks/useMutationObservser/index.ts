import { RefObject, useCallback, useEffect, useRef } from 'react';
import { noop } from '@utils/common';

export type MutationObserverConfig = {
    attributes: boolean;
    childList: boolean;
    subtree: boolean;
};

export const useMutationObserver = (
    callback: MutationCallback,
    ref: RefObject<HTMLElement>,
    config?: Partial<MutationObserverConfig>,
): void => {
    const observerRef = useRef<MutationObserver>();

    useEffect(() => {
        if (!ref.current) {
            return noop;
        }

        const observerConfig = {
            attributes: config?.attributes ?? true,
            childList: config?.childList ?? false,
            subtree: config?.subtree ?? false,
        };

        const observer = new MutationObserver(callback);
        observer.observe(ref.current, observerConfig);

        observerRef.current = observer;

        return () => {
            observer.disconnect();
            observerRef.current = undefined;
        };
    }, [callback, config, ref]);
};

export type NodeMutationCallback = (mutation: MutationRecord) => void;

const nodeMutationObserverConfig: MutationObserverConfig = {
    attributes: true,
    childList: false,
    subtree: false,
};

export const useNodeMutationObserver = (
    callback: NodeMutationCallback,
    ref: RefObject<HTMLElement>,
): void => {
    const nodeMutationCallback = useCallback(
        (mutations: MutationRecord[]) => {
            callback(mutations[0]);
        },
        [callback],
    );

    useMutationObserver(nodeMutationCallback, ref, nodeMutationObserverConfig);
};
