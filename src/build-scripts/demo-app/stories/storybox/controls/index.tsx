import React, { FC } from 'react';
import { Control } from '@demo-app/stories/storybox/storybox.type';
import { RenderStringControl } from '@demo-app/stories/storybox/controls/string.control';

export const RenderControl: FC<{ control: Control }> = ({ control }) => {
    switch (control.type) {
        case 'string':
            return <RenderStringControl {...control} />;
        default:
            return null;
    }
};
