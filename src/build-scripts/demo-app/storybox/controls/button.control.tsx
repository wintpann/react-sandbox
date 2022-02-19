import React, { FC } from 'react';
import styled from 'styled-components';
import { ButtonControl } from '@demo-app/storybox/storybox.type';
import { WrapperStyled, LabelStyled } from '@demo-app/storybox/controls/common.styled';

const ButtonStyled = styled.button`
    cursor: pointer;
`;

export const RenderButtonControl: FC<ButtonControl> = ({ name, value, setValue }) => {
    const onChange = () => setValue(value + 1);

    return (
        <WrapperStyled>
            <LabelStyled>{name}</LabelStyled>
            <ButtonStyled type="button" onClick={onChange}>
                Click!
            </ButtonStyled>
        </WrapperStyled>
    );
};
