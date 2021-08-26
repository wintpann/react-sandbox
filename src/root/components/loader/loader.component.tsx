import React, { FC, memo, useMemo } from 'react';
import { LoaderProps, SpinnerProps } from '@components/loader/loader.type';
import { LoaderStyled } from '@components/loader/loader.styled';
import { DefaultSpinner } from '@components/loader/spinners/default-spinner';
import { ClockSpinner } from '@components/loader/spinners/clock-spinner';
import { NeonSpinner } from '@components/loader/spinners/neon-spinner';
import { getProp } from '@utils/styled';

const spinnerMap: {[T in Required<LoaderProps>['type']]: FC<SpinnerProps>} = {
    default: DefaultSpinner,
    clock: ClockSpinner,
    neon: NeonSpinner,
    atom: DefaultSpinner,
    wifi: DefaultSpinner,
};

const Loader: FC<LoaderProps> = ({ children, ...rest }) => {
    const Spinner = useMemo(() => spinnerMap[getProp('default', rest.type)], [rest.type]);
    const defaultProps = useMemo(() => ({
        size: getProp(60, rest.size),
        type: getProp('default', rest.type),
    }), [rest.size, rest.type]);

    return (
        <LoaderStyled {...rest} {...defaultProps}>
            <Spinner {...defaultProps} />
            {children}
        </LoaderStyled>
    );
};

const LoaderMemo = memo(Loader);

export { LoaderMemo as Loader };
