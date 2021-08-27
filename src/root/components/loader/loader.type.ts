import { ReactNode } from 'react';

export type LoaderProps = {
    children?: ReactNode;
    isLoading: boolean;
    type?: 'default' | 'clock' | 'neon' | 'atom';
    size?: number;
    duration?: number;
    animation?:
        | 'linear'
        | 'ease'
        | 'ease-in-out'
        | 'ease-in-out-sign'
        | 'ease-in-out-cubic'
        | 'ease-in-out-slow-fast'
        | 'ease-in-out-fast'
        | 'ease-out-fast';
}

export type LoaderStyledProps = Pick<Required<LoaderProps>, 'isLoading' | 'size'>

export type SpinnerProps = Pick<Required<LoaderProps>, 'size' | 'duration'> & {
    animation: string;
}
