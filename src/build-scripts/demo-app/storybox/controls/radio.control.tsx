import React, { ChangeEventHandler, FC } from 'react';
import styled from 'styled-components';
import { RadioControl } from '@demo-app/storybox/storybox.type';
import { WrapperStyled, LabelStyled } from '@demo-app/storybox/controls/common.styled';

const RadioLabelStyled = styled.span`
    padding-right: 10px;
`;

const ButtonsGroupStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const RadioButtonStyled = styled.label`
    padding: 10px;
    margin: 5px;
    border: 1px solid #7b5858;
    border-radius: 10px;
    cursor: pointer;
    text-transform: capitalize;
`;

export const RenderRadioControl: FC<RadioControl> = ({ name, value, setValue, options }) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value);

    return (
        <WrapperStyled>
            <LabelStyled>{name}</LabelStyled>
            <ButtonsGroupStyled>
                {options.map((option) => (
                    <RadioButtonStyled key={option}>
                        <RadioLabelStyled>{option}</RadioLabelStyled>
                        <input
                            type="radio"
                            checked={option === value}
                            value={option}
                            onChange={onChange}
                        />
                    </RadioButtonStyled>
                ))}
            </ButtonsGroupStyled>
        </WrapperStyled>
    );
};
