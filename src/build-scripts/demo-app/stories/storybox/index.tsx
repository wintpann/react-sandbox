import React, { FC } from 'react';
import { StoryBox } from '@demo-app/stories/storybox/storybox.component';
import {
    useButtonControl,
    useStringControl,
    useRadioControl,
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

    return (
        <StoryBox>
            <div>somebodys name: {firsName}</div>
            <div>times clicked {timesClicked}</div>
            <div>true or false: {trueOrFalse}</div>
        </StoryBox>
    );
};
