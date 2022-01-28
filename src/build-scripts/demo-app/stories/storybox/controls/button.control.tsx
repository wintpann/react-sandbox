import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { ButtonControl } from '@demo-app/stories/storybox/storybox.type';
import { WrapperStyled, LabelStyled } from '@demo-app/stories/storybox/controls/common.styled';
import { camelspace } from '@utils/string';

const ButtonStyled = styled.button``;

export const RenderButtonControl: FC<ButtonControl> = ({ name, value, setValue }) => {
    const onChange = useCallback(() => setValue(value + 1), [setValue, value]);

    return (
        <WrapperStyled>
            <LabelStyled>{camelspace(name)}</LabelStyled>
            <ButtonStyled type="button" onClick={onChange}>
                CLICK ME
            </ButtonStyled>
        </WrapperStyled>
    );
};
