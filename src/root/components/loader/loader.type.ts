import { ReactNode } from 'react';

export type LoaderProps = {
    children?: ReactNode;
    isLoading: boolean;
    type?: 'default' | 'clock' | 'neon' | 'bubbling-dots' | 'atom' | 'wifi' | 'wave';
    size?: number;
}

export type LoaderStyledProps = Pick<Required<LoaderProps>, 'isLoading' | 'size'>

export type SpinnerProps = Pick<Required<LoaderProps>, 'size'>
