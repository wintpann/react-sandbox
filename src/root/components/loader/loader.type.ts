import { ReactNode } from 'react';

export type LoaderProps = {
    children?: ReactNode;
    isLoading: boolean;
    type?: 'default' | 'clock' | 'neon' | 'atom' | 'wifi';
    size?: number;
}

export type LoaderStyledProps = Pick<Required<LoaderProps>, 'isLoading' | 'size'>

export type SpinnerProps = Pick<Required<LoaderProps>, 'size'>
