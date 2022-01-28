import React, { FC } from 'react';
import { StoryBox } from '@demo-app/stories/storybox/storybox.component';
import {
    useButtonControl,
    useStringControl,
    useRadioControl,
    useCheckboxControl,
} from '@demo-app/stories/storybox/storybox.hooks';

export const MockStory: FC = () => {
    const { value: stringControl } = useStringControl({
        defaultValue: 'John',
        name: 'firstName',
        minLength: 0,
        maxLength: 1000,
    });
    const { value: timesClicked } = useButtonControl({
        name: 'timesClicked',
    });
    const { value: radioControl } = useRadioControl({
        name: 'radioControl',
        options: ['true', 'false'],
        defaultValue: 'true',
    });
    const { value: checkboxControl } = useCheckboxControl({
        name: 'checkboxControl',
        options: ['green', 'blue', 'yellow'],
        defaultValue: ['green'],
    });

    return (
        <StoryBox>
            <div>string control: {stringControl}</div>
            <div>button control (times clicked): {timesClicked}</div>
            <div>radio control: {radioControl}</div>
            <div>checkbox control: {checkboxControl.join(', ')}</div>
        </StoryBox>
    );
};
