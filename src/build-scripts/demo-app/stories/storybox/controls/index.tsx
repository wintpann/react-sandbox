import React, { FC } from 'react';
import { Control } from '@demo-app/stories/storybox/storybox.type';
import { RenderStringControl } from '@demo-app/stories/storybox/controls/string.control';
import { RenderButtonControl } from '@demo-app/stories/storybox/controls/button.control';
import { RenderRadioControl } from '@demo-app/stories/storybox/controls/radio.control';
import { RenderCheckboxControl } from '@demo-app/stories/storybox/controls/checkbox.control';
import { RenderNumberControl } from '@demo-app/stories/storybox/controls/number.control';

export const RenderControl: FC<{ control: Control }> = ({ control }) => {
    switch (control.type) {
        case 'string':
            return <RenderStringControl {...control} />;
        case 'button':
            return <RenderButtonControl {...control} />;
        case 'radio':
            return <RenderRadioControl {...control} />;
        case 'checkbox':
            return <RenderCheckboxControl {...control} />;
        case 'number':
            return <RenderNumberControl {...control} />;
        default:
            return null;
    }
};
