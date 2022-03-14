import { createElement, FC, forwardRef, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { CssMixin, CssMixinMultiple, CssMixinRequired, CssReturn } from '@utils/type';
import { CLASSNAME_PREFIX } from '@constants/css';
import { css } from 'styled-components';
import { Theme } from '@theme/theme.type';
import { uid } from '@utils/string';

export const flexMixin: CssMixin<{
    justify?: 'center' | 'flex-start' | 'flex-end';
    align?: 'center' | 'flex-start' | 'flex-end';
    wrap?: 'nowrap' | 'wrap';
}> = ({ justify = 'center', align = 'center', wrap = 'nowrap' } = {}) => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${wrap};
`;

export const transitionMixin: CssMixinRequired<{
    props: string[];
    duration?: number;
    timing?: string;
}> = ({ props = [], duration = 300, timing = 'ease' }) => css`
    transition: all ${duration / 1000}s ${timing};
    transition-property: ${props.join(', ')};
`;

export const animateMixin: CssMixinMultiple<{
    duration?: number;
    timing?: string;
    delay?: number;
    iterationsCount?: number | 'infinite';
    fillMode?: 'none' | 'forwards';
    steps: {
        [T in string]: CssReturn;
    };
}> = (...options) => {
    const animations = options.map((option) => {
        const duration = option.duration ?? 500;
        const timing = option.timing ?? 'ease';
        const delay = option.delay ?? 0;
        const iterationsCount = option.iterationsCount ?? 1;
        const fillMode = option.fillMode ?? 'forwards';
        const name = uid();

        return {
            animation: `${name} ${
                duration / 1000
            }s ${timing} ${delay}s ${fillMode} ${iterationsCount}`,
            styles: Object.keys(option.steps)
                .map((step) => `${step} {${option.steps[step]}}`)
                .join(' '),
            name,
        };
    });

    return css`
        ${animations.map(
            (item) => css`
                @keyframes ${item.name} {
                    ${item.styles}
                }
            `,
        )}
        animation: ${animations.map((item) => item.animation).join(', ')};
    `;
};

export const ifStyle = (
    condition: boolean | undefined,
    styles: CssReturn,
    otherwiseStyles = css``,
): CssReturn => (condition ? styles : otherwiseStyles);

export const classify = <
    U extends HTMLAttributes<unknown>,
    T extends Record<string, FC<U>>,
    K extends keyof T,
>(
    importObject: T,
    forwardRefsTo?: K[],
): T => {
    const classified = Object.keys(importObject).reduce((acc, key) => {
        const component = importObject[key];
        const componentName = key.replace(/Styled$/i, '');
        const componentClassName = `${CLASSNAME_PREFIX}${componentName}`;

        const shouldForwardRef = forwardRefsTo?.includes(key as K);

        const wrappedWithRef = forwardRef((props: U, ref) =>
            createElement(component, {
                ...props,
                ref,
                className: classNames(componentClassName, props.className),
            }),
        );

        const wrapped: FC<U> = (props: U) =>
            createElement(component, {
                ...props,
                className: classNames(componentClassName, props.className),
            });

        return { ...acc, [key]: shouldForwardRef ? wrappedWithRef : wrapped };
    }, {});
    return classified as T;
};

export const mapPropCss =
    <Props extends { [T in PropName]: string }, PropName extends keyof Props>(
        map: {
            [T in Props[PropName]]: (props: Props & { theme: Theme }) => CssReturn;
        },
    ) =>
    (propName: PropName) =>
    (props: Props & { theme: Theme }): CssReturn =>
        map[props[propName]](props);
