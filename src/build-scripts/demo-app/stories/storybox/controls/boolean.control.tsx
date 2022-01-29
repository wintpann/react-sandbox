import React, { ChangeEventHandler, FC, useCallback } from 'react';
import styled from 'styled-components';
import { BooleanControl } from '@demo-app/stories/storybox/storybox.type';
import { WrapperStyled, LabelStyled } from '@demo-app/stories/storybox/controls/common.styled';

const CheckboxLabelStyled = styled.span`
    padding-right: 10px;
`;

const ButtonsGroupStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CheckboxButtonStyled = styled.label`
    padding: 10px;
    margin: 5px;
    border: 1px solid #7b7448;
    border-radius: 10px;
    cursor: pointer;
    text-transform: capitalize;
`;

export const RenderBooleanControl: FC<BooleanControl> = ({ name, value, setValue }) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => setValue(e.target.checked),
        [setValue],
    );

    return (
        <WrapperStyled>
            <LabelStyled>{name}</LabelStyled>
            <ButtonsGroupStyled>
                <CheckboxButtonStyled>
                    <CheckboxLabelStyled>{value ? 'true' : 'false'}</CheckboxLabelStyled>
                    <input type="checkbox" checked={value} onChange={onChange} />
                </CheckboxButtonStyled>
            </ButtonsGroupStyled>
        </WrapperStyled>
    );
};
