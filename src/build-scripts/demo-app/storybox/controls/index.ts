import { FC, createElement } from 'react';
import { Control } from '@demo-app/storybox/storybox.type';
import { RenderStringControl } from '@demo-app/storybox/controls/string.control';
import { RenderButtonControl } from '@demo-app/storybox/controls/button.control';
import { RenderRadioControl } from '@demo-app/storybox/controls/radio.control';
import { RenderCheckboxControl } from '@demo-app/storybox/controls/checkbox.control';
import { RenderNumberControl } from '@demo-app/storybox/controls/number.control';
import { RenderBooleanControl } from '@demo-app/storybox/controls/boolean.control';
import { PropMap } from '@utils/type';

const controlMap: PropMap<Control, 'type', FC<any>> = {
    string: RenderStringControl,
    button: RenderButtonControl,
    radio: RenderRadioControl,
    checkbox: RenderCheckboxControl,
    number: RenderNumberControl,
    boolean: RenderBooleanControl,
};

export const RenderControl: FC<{ control: Control }> = ({ control }) => {
    const ControlComponent = controlMap[control.type];

    return createElement(ControlComponent, control);
};
