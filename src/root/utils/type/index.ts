import { Theme } from '@theme/theme.type';
import { DefaultTheme, StyledComponent } from 'styled-components';

export type PropCss<Props extends { [T in PropName]: string }, PropName extends keyof Props> = {
    [T in Props[PropName]]: (props: Props & { theme: Theme }) => string;
};

export type CssMixin<Options> = (options?: Partial<Options>) => string;

export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};

export type StyledFC<
    Element extends keyof JSX.IntrinsicElements,
    // eslint-disable-next-line @typescript-eslint/ban-types
    Props extends {} = {},
> = StyledComponent<Element, DefaultTheme, Props, never>;
