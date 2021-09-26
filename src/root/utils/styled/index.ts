import {
    createElement,
    FC,
    forwardRef,
    HTMLAttributes,
} from 'react';
import classNames from 'classnames';
import { CssMixin } from '@utils/type';
import { CLASSNAME_PREFIX } from '@constants/css';
import { isNullable } from '@utils/common';
import { css, DefaultTheme, ThemedCssFunction } from 'styled-components';
import { constant } from 'fp-ts/function';

export const getProp = <T>(defaultProp: T, prop?: T): T => (isNullable(prop) ? defaultProp : prop);

export const flexMixin: CssMixin<{
    justify: 'center' | 'flex-start' | 'flex-end',
    align: 'center' | 'flex-start' | 'flex-end',
    wrap: 'nowrap' | 'wrap',
}> = (options) => {
    const justify = getProp('center', options?.justify);
    const align = getProp('center', options?.align);
    const wrap = getProp('nowrap', options?.wrap);

    return `
        display: flex;
        justify-content: ${justify};
        align-items: ${align};
        flex-wrap: ${wrap};
    `;
};

export const transitionMixin: CssMixin<{
    props: string[],
    duration: number,
    animation: string,
}> = (options) => {
    const properties = getProp([], options?.props).join(', ');
    const duration = getProp(0.3, options?.duration);
    const animation = getProp('ease', options?.animation);

    return `
        transition: all ${duration}s ${animation};
        transition-property: ${properties};
    `;
};

type StyleFunction = ThemedCssFunction<DefaultTheme>;

export const ifStyle = (
    condition: boolean | undefined,
): StyleFunction => (condition ? css : constant('') as unknown as StyleFunction);

export const classify = <
    U extends HTMLAttributes<unknown>,
    T extends Record<string, FC<U>>,
    K extends keyof T
>(importObject: T, forwardRefsTo?: K[]): T => {
    const classified = Object.keys(importObject).reduce((acc, key) => {
        const component = importObject[key];
        const componentName = key.replace(/Styled$/i, '');
        const componentClassName = `${CLASSNAME_PREFIX}${componentName}`;

        const shouldForwardRef = forwardRefsTo?.includes(key as K);

        const wrappedWithRef = forwardRef((props: U, ref) => createElement(component, {
            ...props,
            ref,
            className: classNames(componentClassName, props.className),
        }));

        const wrapped: FC<U> = (props: U) => createElement(component, {
            ...props,
            className: classNames(componentClassName, props.className),
        });

        return { ...acc, [key]: shouldForwardRef ? wrappedWithRef : wrapped };
    }, {});
    return classified as T;
};
