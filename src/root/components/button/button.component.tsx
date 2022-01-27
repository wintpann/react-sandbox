import React, { FC, memo, useMemo } from 'react';
import * as Styled from '@components/button/button.styled';
import { ButtonProps } from '@components/button/button.type';
import { classify, getProp } from '@utils/styled';

const Classified = classify(Styled);

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
    const optionalProps = useMemo(
        () => ({
            appearance: getProp('default', rest.appearance),
            size: getProp('medium', rest.size),
        }),
        [rest],
    );

    return (
        <Classified.ButtonStyled {...rest} {...optionalProps}>
            {children}
        </Classified.ButtonStyled>
    );
};

const ButtonMemo = memo(Button);

export { ButtonMemo as Button };
