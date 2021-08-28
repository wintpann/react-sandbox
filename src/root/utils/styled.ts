import { CssMixin } from '@utils/type';

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

export const ifStyle = (
    condition: boolean | undefined,
) => (style: string | TemplateStringsArray): string => <string>(condition ? style : '');
