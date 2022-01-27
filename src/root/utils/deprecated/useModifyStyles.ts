/* eslint react-hooks/exhaustive-deps: 0 */

import { useCallback, useEffect, useRef } from 'react';
import { noop } from '@utils/common';
import { useNodeMutationObserver } from '@hooks/useMutationObservser';

export type ModifyAction = 'remove' | 'append';
export type ModifyStyleMode = 'replace' | 'append';
export type StyleProperty = keyof CSSStyleDeclaration;
export type StyleApplier = {
    appendStyles: () => void;
    removeStyles: () => void;
    updateStyles: () => void;
    refreshInitial: () => void;
};
export type StyleModifier = [property: string, value: string, applyMode: ModifyStyleMode];

export const EMPTY_APPLIER: StyleApplier = {
    appendStyles: noop,
    removeStyles: noop,
    updateStyles: noop,
    refreshInitial: noop,
};

const noneInitials = new Set([
    'normal',
    'auto',
    '0s',
    'none',
    'none 0s ease 0s 1 normal none running',
    'all 0s ease 0s',
    '1',
    'running',
    'visible',
    'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box',
    'scroll',
    'border-box',
    'rgba(0, 0, 0, 0)',
    'padding-box',
    'repeat',
    '0px none rgb(0, 0, 0)',
    'separate',
    'rgb(0, 0, 0)',
    'stretch',
    'show',
    'row',
    'row nowrap',
    'nowrap',
]);

export const modifyStyles = (node: HTMLElement, ...styles: Array<StyleModifier>): StyleApplier => {
    const initialStyles: Record<string, string> = {};
    let modifiedComputedStyles: Record<string, string> = {};
    let lastAction: ModifyAction = 'remove';

    const appendStyles = (): void => {
        if (lastAction === 'remove') {
            const computed = getComputedStyle(node);
            styles.forEach(([property, value, mode]: StyleModifier) => {
                const oldComputedStyle = computed[property as StyleProperty] as string;
                const oldStyle = node.style[property as StyleProperty] as string;
                initialStyles[property] = oldStyle;

                const noneInitial = noneInitials.has(oldComputedStyle);
                const shouldReplace = mode === 'replace' || noneInitial;
                const newStyle = shouldReplace ? value : `${oldComputedStyle}, ${value}`;

                // eslint-disable-next-line no-param-reassign
                node.style[property as any] = newStyle;

                const newComputed = getComputedStyle(node)[property as StyleProperty] as string;
                modifiedComputedStyles[property] = newComputed;
            });

            lastAction = 'append';
        }
    };

    const removeStyles = (): void => {
        if (lastAction === 'append') {
            styles.forEach(([property]: StyleModifier) => {
                const initialStyle = initialStyles[property];
                // eslint-disable-next-line no-param-reassign
                node.style[property as any] = initialStyle;

                modifiedComputedStyles = {};
            });

            lastAction = 'remove';
        }
    };

    const updateStyles = (): void => {
        if (lastAction === 'append') {
            removeStyles();
            appendStyles();
        }
    };

    const refreshInitial = (): void => {
        const computed = getComputedStyle(node);
        styles.forEach(([property]: StyleModifier) => {
            const current = node.style[property as any] as string;
            const currentComputed = computed[property as StyleProperty] as string;
            const initial = initialStyles[property];
            const modifiedComputed = modifiedComputedStyles[property];

            const styleChanged = current !== initial && currentComputed !== modifiedComputed;
            if (styleChanged) {
                initialStyles[property] = current;
            }
        });
        updateStyles();
    };

    return {
        appendStyles,
        removeStyles,
        refreshInitial,
        updateStyles,
    };
};

type HookStyleApplier = [append: () => void, remove: () => void];

type ModifyState = {
    skipStyleMutation: number;
    lastAction: { type: ModifyAction };
    applier: StyleApplier;
};

export const useModifyStyles = (
    node: HTMLElement | null,
    ...styles: Array<StyleModifier>
): HookStyleApplier => {
    const state = useRef<ModifyState>({
        skipStyleMutation: 0,
        lastAction: { type: 'remove' },
        applier: EMPTY_APPLIER,
    });

    const appendStyles = useCallback(() => {
        if (state.current.lastAction.type !== 'remove') {
            return;
        }

        state.current.lastAction.type = 'append';

        if (node) {
            state.current.skipStyleMutation++;
            state.current.applier.appendStyles();
        }
    }, [node]);

    const removeStyles = useCallback(() => {
        if (state.current.lastAction.type !== 'append') {
            return;
        }

        state.current.lastAction.type = 'remove';

        if (node) {
            state.current.skipStyleMutation++;
            state.current.applier.removeStyles();
        }
    }, [node]);

    useEffect(() => {
        if (!node) {
            return;
        }

        state.current.applier = modifyStyles(node, ...styles);

        if (state.current.lastAction.type === 'append') {
            state.current.lastAction.type = 'remove';
            appendStyles();
        }
    }, [node]);

    const onClassMutation = useCallback(() => {
        if (state.current.lastAction.type === 'append') {
            state.current.applier.updateStyles();
        }
    }, []);

    const onStyleMutation = useCallback(() => {
        if (state.current.lastAction.type === 'append') {
            state.current.skipStyleMutation++;
            state.current.applier.refreshInitial();
        }
    }, []);

    const nodeMutationCallback = useCallback((mutation: MutationRecord) => {
        if (state.current.skipStyleMutation > 0 && mutation.attributeName === 'style') {
            state.current.skipStyleMutation--;
            return;
        }

        if (mutation.attributeName === 'class') {
            onClassMutation();
        } else if (mutation.attributeName === 'style') {
            onStyleMutation();
        }
    }, []);

    useNodeMutationObserver(nodeMutationCallback, { current: node });

    return [appendStyles, removeStyles];
};
