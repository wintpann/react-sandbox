import React, { FC } from 'react';
import { StoryBox } from '@demo-app/storybox/storybox.component';
import {
    useButtonControl,
    useStringControl,
    useRadioControl,
    useCheckboxControl,
    useNumberControl,
    useBooleanControl,
} from '@demo-app/storybox/storybox.hooks';
import styled from 'styled-components';

const checkboxDefaults = ['green'];

const MockStory: FC = () => {
    const [stringControl] = useStringControl({
        defaultValue: 'John',
        name: 'String control',
        minLength: 0,
        maxLength: 1000,
    });
    const [numberControl] = useNumberControl({
        defaultValue: 3,
        name: 'Number control',
        max: 100,
        min: -5,
        step: 1,
        integerOnly: true,
    });
    const [numberRangeControl] = useNumberControl({
        defaultValue: 3,
        name: 'Number range control',
        max: 100,
        min: -5,
        step: 1,
        integerOnly: true,
        appearance: 'range',
    });
    const [timesClicked] = useButtonControl({
        name: 'Times clicked',
    });
    const [radioControl] = useRadioControl({
        name: 'Radio control',
        options: ['true', 'false'],
        defaultValue: 'true',
    });
    const [checkboxControl] = useCheckboxControl({
        name: 'Checkbox control',
        options: ['green', 'blue', 'yellow'],
        defaultValue: checkboxDefaults,
    });
    const [booleanControl] = useBooleanControl({
        name: 'Boolean control',
        defaultValue: true,
    });

    return (
        <StoryBox>
            <div>Mock story</div>
            <br />
            <div>boolean control: {booleanControl}</div>
            <div>string control: {stringControl}</div>
            <div>number control: {numberControl}</div>
            <div>number range control: {numberRangeControl}</div>
            <div>button control (times clicked): {timesClicked}</div>
            <div>radio control: {radioControl}</div>
            <div>checkbox control: {checkboxControl.join(', ')}</div>
        </StoryBox>
    );
};

const DemoBaseStyled = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export {
    useNumberControl,
    useCheckboxControl,
    useButtonControl,
    useStringControl,
    useRadioControl,
    StoryBox,
    MockStory,
    DemoBaseStyled,
};
