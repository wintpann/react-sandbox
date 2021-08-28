import { createElement, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { CssMixin } from '@utils/type';
import { CLASSNAME_PREFIX } from '@constants/css';

export const getProp = <T>(defaultProp: T, prop?: T): T => prop || defaultProp;

export const flexMixin: CssMixin<{
    justify: 'center' | 'flex-start' | 'flex-end',
    align: 'center' | 'flex-start' | 'flex-end'
}> = (options) => {
    const justify = getProp('center', options?.justify);
    const align = getProp('center', options?.align);

    return `
        display: flex;
        justify-content: ${justify};
        align-items: ${align};
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

const getTemplateResult = (
    strings: TemplateStringsArray,
    ...values: unknown[]
): string => strings.map((str, i) => str + (values[i] ?? '')).join('');

export const ifStyle = (
    condition: boolean | undefined,
) => (
    style: TemplateStringsArray,
    ...args: unknown[]
): string => (condition ? getTemplateResult(style, ...args) : '');

export const classify = <
    U extends HTMLAttributes<unknown>,
    T extends Record<string, FC<U>>
>(importObject: T): T => {
    const classified = Object.keys(importObject).reduce((acc, key) => {
        const component = importObject[key];
        const componentName = key.replace(/Styled$/i, '');
        const componentClassName = `${CLASSNAME_PREFIX}${componentName}`;
        const wrapped: FC<U> = (props: U) => createElement(component, {
            ...props,
            className: classNames(componentClassName, props.className),
        });
        return { ...acc, [key]: wrapped };
    }, {});
    return classified as T;
};
