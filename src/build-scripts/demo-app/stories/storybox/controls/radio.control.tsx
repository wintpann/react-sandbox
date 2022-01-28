import React, { ChangeEventHandler, FC, useCallback } from 'react';
import styled from 'styled-components';
import { RadioControl } from '@demo-app/stories/storybox/storybox.type';
import { WrapperStyled, LabelStyled } from '@demo-app/stories/storybox/controls/common.styled';
import { camelspace } from '@utils/string';

const RadioLabelStyled = styled.span`
    padding-right: 10px;
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
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            setValue(e.target.value);
        },
        [setValue],
    );

    return (
        <WrapperStyled>
            <LabelStyled>{camelspace(name)}</LabelStyled>
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
        </WrapperStyled>
    );
};
