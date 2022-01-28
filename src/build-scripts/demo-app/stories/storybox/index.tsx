import React, { FC } from 'react';
import { StoryBox } from '@demo-app/stories/storybox/storybox.component';
import { useButtonControl, useStringControl } from '@demo-app/stories/storybox/storybox.hooks';

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

    return (
        <StoryBox>
            <div>somebodys name: {firsName}</div>
            <div>times clicked {timesClicked}</div>
        </StoryBox>
    );
};
