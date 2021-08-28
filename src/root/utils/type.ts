import { Theme } from '@theme/theme.type';
import { FC } from 'react';

export type PropCss<RequiredProps extends { [T in PropName]: string },
    Props,
    PropName extends keyof RequiredProps,
> = {
    [T in RequiredProps[PropName]]: (props: Props & { theme: Theme }) => string
}

export type CssMixin<Options> = (options?: Partial<Options>) => string;

export type StorybookTemplate<Props> = FC<Props> & { args?: Props }
