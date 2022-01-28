import React, { ChangeEventHandler, FC, useCallback } from 'react';
import styled from 'styled-components';
import { StringControl } from '@demo-app/stories/storybox/storybox.type';
import { WrapperStyled, LabelStyled } from '@demo-app/stories/storybox/controls/common.styled';
import { camelspace } from '@utils/string';

const InputStyled = styled.input`
    flex: 1;
    padding: 5px;
    border: none;
    outline: none;
`;

export const RenderStringControl: FC<StringControl> = ({
    name,
    value,
    setValue,
    minLength,
    maxLength,
}) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            const updated: string = e.target.value;
            if (maxLength && updated.length > maxLength) return;
            if (minLength && updated.length < minLength) return;

            setValue(updated);
        },
        [maxLength, minLength, setValue],
    );

    return (
        <WrapperStyled>
            <LabelStyled>{camelspace(name)}</LabelStyled>
            <InputStyled type="text" value={value} onChange={onChange} />
        </WrapperStyled>
    );
};
