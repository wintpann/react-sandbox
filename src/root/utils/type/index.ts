import { css, DefaultTheme, StyledComponent } from 'styled-components';

export type PropMap<Type extends Record<Key, any>, Key extends keyof Type, Value> = {
    [T in Type[Key]]: Value;
};

export type TwinPropMap<
    Type extends Record<Key1, any>,
    Key1 extends keyof Type,
    Key2 extends keyof Type,
> = {
    [T in Type[Key1]]: Type[Key2];
};

export type CssReturn = ReturnType<typeof css>;

export type CssMixin<Options> = (options?: Options) => CssReturn;
export type CssMixinRequired<Options> = (options: Options) => CssReturn;
export type CssMixinMultiple<Options> = (...options: Options[]) => CssReturn;

export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};

export type StyledFC<
    Element extends keyof JSX.IntrinsicElements,
    // eslint-disable-next-line @typescript-eslint/ban-types
    Props extends {} = {},
> = StyledComponent<Element, DefaultTheme, Props, never>;
