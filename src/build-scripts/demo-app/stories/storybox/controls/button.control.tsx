import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { ButtonControl } from '@demo-app/stories/storybox/storybox.type';
import { WrapperStyled, LabelStyled } from '@demo-app/stories/storybox/controls/common.styled';

const ButtonStyled = styled.button`
    cursor: pointer;
`;

export const RenderButtonControl: FC<ButtonControl> = ({ name, value, setValue }) => {
    const onChange = useCallback(() => setValue(value + 1), [setValue, value]);

    return (
        <WrapperStyled>
            <LabelStyled>{name}</LabelStyled>
            <ButtonStyled type="button" onClick={onChange}>
                Click!
            </ButtonStyled>
        </WrapperStyled>
    );
};
