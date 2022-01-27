import React, { FC, memo, useMemo } from 'react';
import * as Styled from '@components/button/button.styled';
import { ButtonProps } from '@components/button/button.type';
import { classify, getProp } from '@utils/styled';

const Classified = classify(Styled);

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
    const defaultProps = useMemo(
        () => ({
            appearance: getProp('default', rest.appearance),
            size: getProp('medium', rest.size),
        }),
        [rest.appearance, rest.size],
    );

    return (
        <Classified.ButtonStyled {...rest} {...defaultProps}>
            {children}
        </Classified.ButtonStyled>
    );
};

const ButtonMemo = memo(Button);

export { ButtonMemo as Button };
