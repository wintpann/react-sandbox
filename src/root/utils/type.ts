import { Theme } from '@theme/theme.type';
import { css } from 'styled-components';

export type PropCss<
    RequiredProps extends { [T in PropName]: string },
    Props,
    PropName extends keyof RequiredProps,
> = {
    [T in RequiredProps[PropName]]: (props: Props & { theme: Theme }) => string
}

export type CssReturn = ReturnType<typeof css>;

export type CssMixin<Options> = (options?: Partial<Options>) => CssReturn;
