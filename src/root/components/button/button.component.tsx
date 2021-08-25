import React, { FC, memo, useMemo } from 'react';
import { ButtonStyled } from '@components/button/button.styled';
import { ButtonProps } from '@components/button/button.type';
import { getClassName } from '@utils/css';
import { getProp } from '@utils/styled';

const Button: FC<ButtonProps> = ({
    children,
    ...rest
}) => {
    const defaultProps = useMemo(() => ({
        appearance: getProp('default', rest.appearance),
        size: getProp('medium', rest.size),
    }), [rest.appearance, rest.size]);

    return (
        <ButtonStyled
            {...rest}
            {...defaultProps}
            className={getClassName('button', rest.className)}
        >
            {children}
        </ButtonStyled>
    );
};

const ButtonMemo = memo(Button);

export { ButtonMemo as Button };
