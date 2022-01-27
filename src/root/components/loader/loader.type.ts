export type LoaderProps = {
    isShown: boolean;
    type?: 'default' | 'clock' | 'neon' | 'atom';
    size?: number;
    duration?: number;
    timing?:
        | 'linear'
        | 'ease'
        | 'ease-in-out'
        | 'ease-in-out-sign'
        | 'ease-in-out-cubic'
        | 'ease-in-out-slow-fast'
        | 'ease-in-out-fast'
        | 'ease-out-fast';
    entry?: 'scale' | 'opacity' | 'rough';
};

export type LoaderStyledProps = Pick<Required<LoaderProps>, 'isShown' | 'size' | 'entry'>;

export type SpinnerProps = Pick<Required<LoaderProps>, 'size' | 'duration'> & {
    timing: string;
};
