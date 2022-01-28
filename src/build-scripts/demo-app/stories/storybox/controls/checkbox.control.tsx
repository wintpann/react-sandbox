import React, { ChangeEventHandler, FC, useCallback } from 'react';
import styled from 'styled-components';
import { CheckboxControl } from '@demo-app/stories/storybox/storybox.type';
import { WrapperStyled, LabelStyled } from '@demo-app/stories/storybox/controls/common.styled';
import { camelspace } from '@utils/string';

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
    border: 1px solid #58647b;
    border-radius: 10px;
    cursor: pointer;
    text-transform: capitalize;
`;

export const RenderCheckboxControl: FC<CheckboxControl> = ({ name, value, setValue, options }) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            const { checked } = e.target;

            if (checked) {
                setValue([...value, e.target.value]);
            } else {
                setValue(value.filter((item) => item !== e.target.value));
            }
        },
        [setValue, value],
    );

    return (
        <WrapperStyled>
            <LabelStyled>{camelspace(name)}</LabelStyled>
            <ButtonsGroupStyled>
                {options.map((option) => (
                    <CheckboxButtonStyled key={option}>
                        <CheckboxLabelStyled>{option}</CheckboxLabelStyled>
                        <input
                            type="checkbox"
                            checked={value.includes(option)}
                            value={option}
                            onChange={onChange}
                        />
                    </CheckboxButtonStyled>
                ))}
            </ButtonsGroupStyled>
        </WrapperStyled>
    );
};
