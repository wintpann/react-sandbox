import { css } from 'styled-components';
import { CssMixin, CssReturn } from '@utils/type';

const getProp = <T>(defaultProp: T, prop?: T): T => prop || defaultProp;

const emptyCss = css``;

export const flexMixin: CssMixin<{
    justify: 'center' | 'flex-start' | 'flex-end',
    align: 'center' | 'flex-start' | 'flex-end'
}> = (options) => {
    const justify = getProp('center', options?.justify);
    const align = getProp('center', options?.align);

    return css`
        display: flex;
        justify-content: ${justify};
        align-items: ${align};
    `;
};

export const transitionMixin: CssMixin<{
    props: string[],
    duration: number
}> = (options) => {
    const properties = getProp([], options?.props).join(', ');
    const duration = getProp(0.3, options?.duration);

    return css`
        transition: all ${duration}s ease;
        transition-property: ${properties};
    `;
};

export const ifStyle = (
    condition: boolean | undefined,
) => (style: TemplateStringsArray): CssReturn => {
    const styles = condition ? css`${style}` : emptyCss;
    return styles;
};
