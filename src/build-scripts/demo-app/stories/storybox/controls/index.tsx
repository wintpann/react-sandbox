import React, { FC } from 'react';
import { Control } from '@demo-app/stories/storybox/storybox.type';
import { RenderStringControl } from '@demo-app/stories/storybox/controls/string.control';
import { RenderButtonControl } from '@demo-app/stories/storybox/controls/button.control';
import { RenderRadioControl } from '@demo-app/stories/storybox/controls/radio.control';

export const RenderControl: FC<{ control: Control }> = ({ control }) => {
    switch (control.type) {
        case 'string':
            return <RenderStringControl {...control} />;
        case 'button':
            return <RenderButtonControl {...control} />;
        case 'radio':
            return <RenderRadioControl {...control} />;
        default:
            return null;
    }
};
