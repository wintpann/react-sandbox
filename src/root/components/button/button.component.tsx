import React, { FC, memo } from 'react';
import * as Styled from '@components/button/button.styled';
import { ButtonProps } from '@components/button/button.type';
import { classify } from '@utils/styled';

const Classified = classify(Styled);

const Button: FC<ButtonProps> = ({ children, appearance = 'default', size = 'medium' }) => (
    <Classified.ButtonStyled appearance={appearance} size={size}>
        {children}
    </Classified.ButtonStyled>
);

const ButtonMemo = memo(Button);

export { ButtonMemo as Button };
