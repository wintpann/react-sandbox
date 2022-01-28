import React, { FC } from 'react';
import { StoryBox } from '@demo-app/stories/storybox/storybox.component';
import {
    useButtonControl,
    useStringControl,
    useRadioControl,
    useCheckboxControl,
} from '@demo-app/stories/storybox/storybox.hooks';

export const MockStory: FC = () => {
    const { value: firsName } = useStringControl({
        defaultValue: 'John',
        name: 'firstName',
        minLength: 0,
        maxLength: 1000,
    });
    const { value: timesClicked } = useButtonControl({
        name: 'timesClicked',
    });
    const { value: trueOrFalse } = useRadioControl({
        name: 'trueOrFalse',
        options: ['true', 'false'],
        defaultValue: 'true',
    });
    const { value: primeColors } = useCheckboxControl({
        name: 'primeColors',
        options: ['green', 'blue', 'yellow'],
        defaultValue: ['green'],
    });

    return (
        <StoryBox>
            <div>somebodys name: {firsName}</div>
            <div>times clicked {timesClicked}</div>
            <div>true or false: {trueOrFalse}</div>
            <div>prime colors: {primeColors.join(', ')}</div>
        </StoryBox>
    );
};
