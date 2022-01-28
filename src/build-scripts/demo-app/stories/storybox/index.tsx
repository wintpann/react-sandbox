import React, { FC } from 'react';
import { StoryBox } from '@demo-app/stories/storybox/storybox.component';
import { useStringControl } from '@demo-app/stories/storybox/storybox.hooks';

export const MockStory: FC = () => {
    const { value } = useStringControl({ defaultValue: 'John Doe', name: 'firstname' });

    return (
        <StoryBox>
            <div>something {value}</div>
        </StoryBox>
    );
};
