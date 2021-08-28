import React, { FC } from 'react';
import { SpinnerProps } from '@components/loader/loader.type';
import * as Styled from '@components/loader/spinners/neon/neon-spinner.styled';
import { classify } from '@utils/styled';

const Classified = classify(Styled);

export const NeonSpinner: FC<SpinnerProps> = (props) => (
    <Classified.NeonWrapperStyled {...props}>
        <Classified.NeonInnerStyled />
        <Classified.NeonInnerStyled />
        <Classified.NeonInnerStyled />
        <Classified.NeonInnerStyled />
    </Classified.NeonWrapperStyled>
);
