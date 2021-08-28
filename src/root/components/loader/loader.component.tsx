import React, { FC, memo, useMemo } from 'react';
import { LoaderProps, SpinnerProps } from '@components/loader/loader.type';
import { LoaderStyled } from '@components/loader/loader.styled';
import { DefaultSpinner } from '@components/loader/spinners/default-spinner';
import { ClockSpinner } from '@components/loader/spinners/clock-spinner';
import { AtomSpinner } from '@components/loader/spinners/atom-spinner';
import { NeonSpinner } from '@components/loader/spinners/neon-spinner';
import { getProp } from '@utils/styled';

const spinnerMap: {
    [T in Required<LoaderProps>['type']]: FC<SpinnerProps>
} = {
    default: DefaultSpinner,
    clock: ClockSpinner,
    neon: NeonSpinner,
    atom: AtomSpinner,
};

const animationMap: {
    [T in Required<LoaderProps>['animation']]: string
} = {
    linear: 'linear',
    ease: 'ease',
    'ease-in-out': 'ease-in-out',
    'ease-in-out-sign': 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
    'ease-in-out-cubic': 'cubic-bezier(0.65, 0.05, 0.36, 1)',
    'ease-in-out-slow-fast': 'cubic-bezier(0.4, 0, 0.2, 1)',
    'ease-in-out-fast': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    'ease-out-fast': 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
};

const spinnerAnimationMap: {
    [T in Required<LoaderProps>['type']]: Required<LoaderProps>['animation']
} = {
    default: 'ease',
    clock: 'linear',
    neon: 'ease',
    atom: 'linear',
};

const Loader: FC<LoaderProps> = (props) => {
    const Spinner = useMemo(() => spinnerMap[getProp('default', props.type)], [props.type]);

    const defaultProps = useMemo(() => {
        const size = getProp(60, props.size);
        const type = getProp('default', props.type);
        const duration = getProp(100, props.duration);
        const entry = getProp('scale', props.entry);

        const defaultSpinnerAnimation = spinnerAnimationMap[type];
        const animation = animationMap[getProp(defaultSpinnerAnimation, props.animation)];

        return {
            size,
            type,
            duration,
            animation,
            entry,
        };
    }, [props.size, props.type, props.duration, props.entry, props.animation]);

    return (
        <LoaderStyled {...props} {...defaultProps}>
            <Spinner {...defaultProps} />
        </LoaderStyled>
    );
};

const LoaderMemo = memo(Loader);

export { LoaderMemo as Loader };
