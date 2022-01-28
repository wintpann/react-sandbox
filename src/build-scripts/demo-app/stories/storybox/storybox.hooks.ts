/* eslint react-hooks/exhaustive-deps: 0 */
import { useContext, useEffect, useState } from 'react';
import {
    ButtonControl,
    CheckboxControl,
    RadioControl,
    StringControl,
    UseControl,
} from '@demo-app/stories/storybox/storybox.type';
import { ControlsContext } from '@demo-app/stories/storybox/storybox.component';

export const useStringControl: UseControl<StringControl> = (control) => {
    const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
    const [value, setValue] = useState(control.defaultValue);

    useEffect(() => updateControlValue(control.name, value), [value]);

    useEffect(() => {
        createControl(control.name, { ...control, type: 'string', value, setValue });
        return () => deleteControl(control.name);
    }, []);

    return { value };
};

export const useButtonControl: UseControl<ButtonControl, 'defaultValue'> = (control) => {
    const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
    const [value, setValue] = useState(0);

    useEffect(() => updateControlValue(control.name, value), [value]);

    useEffect(() => {
        createControl(control.name, {
            ...control,
            type: 'button',
            value,
            setValue,
            defaultValue: 0,
        });
        return () => deleteControl(control.name);
    }, []);

    return { value };
};

export const useRadioControl: UseControl<RadioControl> = (control) => {
    const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
    const [value, setValue] = useState(control.defaultValue);

    useEffect(() => updateControlValue(control.name, value), [value]);

    useEffect(() => {
        createControl(control.name, {
            ...control,
            type: 'radio',
            value,
            setValue,
            defaultValue: control.defaultValue,
        });
        return () => deleteControl(control.name);
    }, []);

    return { value };
};

export const useCheckboxControl: UseControl<CheckboxControl> = (control) => {
    const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
    const [value, setValue] = useState(control.defaultValue);

    useEffect(() => updateControlValue(control.name, value), [value]);

    useEffect(() => {
        createControl(control.name, {
            ...control,
            type: 'checkbox',
            value,
            setValue,
            defaultValue: control.defaultValue,
        });
        return () => deleteControl(control.name);
    }, []);

    return { value };
};
