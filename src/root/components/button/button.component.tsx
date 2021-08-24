import React, { FC, memo } from 'react';
import { ButtonStyled } from '@components/button/button.styled';
import { ButtonProps } from '@components/button/button.type';
import { getClassName } from '@utils/css';

const Button: FC<ButtonProps> = ({
    children,
    ...rest
}) => (
    <ButtonStyled {...rest} className={getClassName('button', rest.className)}>
        {children}
    </ButtonStyled>
);

const ButtonMemo = memo(Button);

export { ButtonMemo as Button };
