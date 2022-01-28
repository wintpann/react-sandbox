import React, { ChangeEventHandler, FC, KeyboardEventHandler, useCallback } from 'react';
import styled from 'styled-components';
import { NumberControl } from '@demo-app/stories/storybox/storybox.type';
import { WrapperStyled, LabelStyled } from '@demo-app/stories/storybox/controls/common.styled';
import { camelspace } from '@utils/string';
import { PropMap } from '@utils/type';

const InputStyled = styled.input`
    flex: 1;
    padding: 5px;
    border: none;
    outline: none;
`;

const appearanceMap: PropMap<Required<NumberControl>, 'appearance', string> = {
    input: 'text',
    range: 'range',
};

const WashRegex = {
    integer: /[^0-9-]/g,
    decimal: /[^0-9.-]/,
};

export const RenderNumberControl: FC<NumberControl> = ({
    name,
    value,
    setValue,
    min,
    max,
    step = 1,
    integerOnly,
    appearance = 'input',
}) => {
    const onChange = useCallback(
        (updated: number | string) => {
            const washRegex = integerOnly ? WashRegex.integer : WashRegex.decimal;
            const newValue = String(updated).replace(washRegex, '');
            const castedValue = Number(newValue);

            if (max && castedValue > max) return;
            if (min && castedValue < min) return;

            setValue(castedValue);
        },
        [integerOnly, max, min, setValue],
    );

    const onInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            onChange(e.target.value);
        },
        [onChange],
    );

    const onKeyDown: KeyboardEventHandler = useCallback(
        (e) => {
            if (e.key === 'ArrowUp') {
                onChange(value + step);
            } else if (e.key === 'ArrowDown') {
                onChange(value - step);
            }
        },
        [onChange, step, value],
    );

    return (
        <WrapperStyled>
            <LabelStyled>{camelspace(name)}</LabelStyled>
            <InputStyled
                type={appearanceMap[appearance]}
                step={step}
                value={value}
                onChange={onInputChange}
                onKeyDown={onKeyDown}
            />
        </WrapperStyled>
    );
};
