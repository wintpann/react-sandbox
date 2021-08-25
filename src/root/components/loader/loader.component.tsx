import React, { FC, memo, useMemo } from 'react';
import { LoaderProps, SpinnerProps } from '@components/loader/loader.type';
import { LoaderStyled } from '@components/loader/loader.styled';
import { DefaultSpinner } from '@components/loader/spinners/default-spinner';
import { getProp } from '@utils/styled';

const spinnerMap: {[T in Required<LoaderProps>['type']]: FC<SpinnerProps>} = {
    default: DefaultSpinner,
    clock: DefaultSpinner,
    neon: DefaultSpinner,
    'bubbling-dots': DefaultSpinner,
    atom: DefaultSpinner,
    wifi: DefaultSpinner,
    wave: DefaultSpinner,
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
