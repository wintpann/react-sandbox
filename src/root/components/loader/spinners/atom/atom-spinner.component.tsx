import React, { FC } from 'react';
import { SpinnerProps } from '@components/loader/loader.type';
import * as Styled from '@components/loader/spinners/atom/atom-spinner.styled';
import { classify } from '@utils/styled';

const Classified = classify(Styled);

export const AtomSpinner: FC<SpinnerProps> = (props) => (
    <Classified.AtomWrapperStyled {...props}>
        <Classified.AtomInnerStyled />
        <Classified.AtomInnerStyled />
        <Classified.AtomInnerStyled />
    </Classified.AtomWrapperStyled>
);
