import { useCallback, useEffect, useRef } from 'react';
import { getProp } from '@utils/styled';
import { noop } from '@utils/common';
import { useTooManyUpdatesWatcher } from '@hooks/useTooManyUpdatesWatcher';
import { error } from '@utils/logger';

export type MutationObserverConfig = {
    attributes: boolean;
    childList: boolean;
    subtree: boolean;
}

const notifyError = (): void => error([
    'Too many updates detected in useMutationObserver.',
    'Check passed callback and config options',
]);

export const useMutationObserver = (
    callback: MutationCallback,
    node: Node | null,
    config?: Partial<MutationObserverConfig>,
): void => {
    const observerRef = useRef<MutationObserver>();

    const update = useTooManyUpdatesWatcher(notifyError);

    useEffect(() => {
        if (!node) {
            return noop;
        }

        update();

        const observerConfig = {
            attributes: getProp(true, config?.attributes),
            childList: getProp(false, config?.childList),
            subtree: getProp(false, config?.subtree),
        };

        const observer = new MutationObserver(callback);
        observer.observe(node, observerConfig);

        observerRef.current = observer;

        return () => {
            observer.disconnect();
            observerRef.current = undefined;
        };
    }, [callback, config, node, update]);
};

export type NodeMutationCallback = (mutation: MutationRecord) => void;

const nodeMutationObserverConfig:MutationObserverConfig = {
    attributes: true,
    childList: false,
    subtree: false,
};

export const useNodeMutationObserver = (
    callback: NodeMutationCallback,
    node: Node | null,
): void => {
    const nodeMutationCallback = useCallback((mutations: MutationRecord[]) => {
        callback(mutations[0]);
    }, [callback]);

    useMutationObserver(nodeMutationCallback, node, nodeMutationObserverConfig);
};
