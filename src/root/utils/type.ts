import { Theme } from '@theme/theme.type';
import { FC } from 'react';

export type PropCss<Props extends { [T in PropName]: string },
    PropName extends keyof Props,
> = {
    [T in Props[PropName]]: (props: Props & { theme: Theme }) => string
}

export type CssMixin<Options> = (options?: Partial<Options>) => string;

export type StorybookTemplate<Props> = FC<Props> & { args?: Props }
