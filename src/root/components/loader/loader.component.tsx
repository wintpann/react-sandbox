import React, { FC, memo, useMemo } from 'react';
import { LoaderProps, SpinnerProps } from '@components/loader/loader.type';
import * as Styled from '@components/loader/loader.styled';
import { DefaultSpinner } from '@components/loader/spinners/default/default-spinner.component';
import { ClockSpinner } from '@components/loader/spinners/clock/clock-spinner.component';
import { AtomSpinner } from '@components/loader/spinners/atom/atom-spinner.component';
import { NeonSpinner } from '@components/loader/spinners/neon/neon-spinner.component';
import { classify } from '@utils/styled';
import { PropMap, TwinPropMap } from '@utils/type';

const Classified = classify(Styled);

const spinnerMap: PropMap<Required<LoaderProps>, 'type', FC<SpinnerProps>> = {
    default: DefaultSpinner,
    clock: ClockSpinner,
    neon: NeonSpinner,
    atom: AtomSpinner,
};

const animationMap: PropMap<Required<LoaderProps>, 'timing', string> = {
    linear: 'linear',
    ease: 'ease',
    'ease-in-out': 'ease-in-out',
    'ease-in-out-sign': 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
    'ease-in-out-cubic': 'cubic-bezier(0.65, 0.05, 0.36, 1)',
    'ease-in-out-slow-fast': 'cubic-bezier(0.4, 0, 0.2, 1)',
    'ease-in-out-fast': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    'ease-out-fast': 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
};

const spinnerAnimationMap: TwinPropMap<Required<LoaderProps>, 'type', 'timing'> = {
    default: 'ease',
    clock: 'linear',
    neon: 'ease',
    atom: 'linear',
};

const Loader: FC<LoaderProps> = ({
    size = 60,
    type = 'default',
    duration = 100,
    entry = 'scale',
    isShown,
    timing,
}) => {
    const Spinner = useMemo(() => spinnerMap[type], [type]);

    const spinnerTiming = useMemo(() => {
        const defaultSpinnerAnimation = spinnerAnimationMap[type];
        return animationMap[timing ?? defaultSpinnerAnimation];
    }, [timing, type]);

    return (
        <Classified.LoaderStyled isShown={isShown} size={size} entry={entry}>
            <Spinner size={size} duration={duration} timing={spinnerTiming} />
        </Classified.LoaderStyled>
    );
};

const LoaderMemo = memo(Loader);

export { LoaderMemo as Loader };
