import { FC, createElement } from 'react';
import { Control } from '@demo-app/stories/storybox/storybox.type';
import { RenderStringControl } from '@demo-app/stories/storybox/controls/string.control';
import { RenderButtonControl } from '@demo-app/stories/storybox/controls/button.control';
import { RenderRadioControl } from '@demo-app/stories/storybox/controls/radio.control';
import { RenderCheckboxControl } from '@demo-app/stories/storybox/controls/checkbox.control';
import { RenderNumberControl } from '@demo-app/stories/storybox/controls/number.control';
import { PropMap } from '@utils/type';

const controlMap: PropMap<Control, 'type', FC<any>> = {
    string: RenderStringControl,
    button: RenderButtonControl,
    radio: RenderRadioControl,
    checkbox: RenderCheckboxControl,
    number: RenderNumberControl,
};

export const RenderControl: FC<{ control: Control }> = ({ control }) => {
    const ControlComponent = controlMap[control.type];

    return createElement(ControlComponent, control);
};
