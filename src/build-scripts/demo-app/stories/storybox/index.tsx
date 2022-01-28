import React, { FC } from 'react';
import { StoryBox } from '@demo-app/stories/storybox/storybox.component';
import {
    useButtonControl,
    useStringControl,
    useRadioControl,
    useCheckboxControl,
    useNumberControl,
} from '@demo-app/stories/storybox/storybox.hooks';

export const MockStory: FC = () => {
    const [stringControl] = useStringControl({
        defaultValue: 'John',
        name: 'stringControl',
        minLength: 0,
        maxLength: 1000,
    });
    const [numberControl] = useNumberControl({
        defaultValue: 3,
        name: 'numberControl',
        max: 100,
        min: -5,
        step: 1,
        integerOnly: true,
    });
    const [numberRangeControl] = useNumberControl({
        defaultValue: 3,
        name: 'numberRangeControl',
        max: 100,
        min: -5,
        step: 1,
        integerOnly: true,
        appearance: 'range',
    });
    const [timesClicked] = useButtonControl({
        name: 'timesClicked',
    });
    const [radioControl] = useRadioControl({
        name: 'radioControl',
        options: ['true', 'false'],
        defaultValue: 'true',
    });
    const [checkboxControl] = useCheckboxControl({
        name: 'checkboxControl',
        options: ['green', 'blue', 'yellow'],
        defaultValue: ['green'],
    });

    return (
        <StoryBox>
            <div>Mock story</div>
            <br />
            <div>string control: {stringControl}</div>
            <div>number control: {numberControl}</div>
            <div>number range control: {numberRangeControl}</div>
            <div>button control (times clicked): {timesClicked}</div>
            <div>radio control: {radioControl}</div>
            <div>checkbox control: {checkboxControl.join(', ')}</div>
        </StoryBox>
    );
};
