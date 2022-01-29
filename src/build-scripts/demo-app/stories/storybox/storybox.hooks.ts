/* eslint react-hooks/exhaustive-deps: 0 */
import { useContext, useEffect, useState, useRef } from 'react';
import {
    BooleanControl,
    ButtonControl,
    CheckboxControl,
    NumberControl,
    RadioControl,
    StringControl,
    UseControl,
} from '@demo-app/stories/storybox/storybox.type';
import { v4 as uuid } from 'uuid';
import { ControlsContext } from '@demo-app/stories/storybox/storybox.component';

export const useBooleanControl: UseControl<BooleanControl> = (control) => {
    const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
    const [value, setValue] = useState(control.defaultValue);
    const idRef = useRef<string>();

    useEffect(() => {
        if (idRef.current) updateControlValue(idRef.current, value);
    }, [value]);

    useEffect(() => {
        const id = uuid();
        idRef.current = id;
        createControl(id, { ...control, type: 'boolean', value, setValue, id });
        return () => deleteControl(id);
    }, []);

    useEffect(() => setValue(control.defaultValue), [control.defaultValue]);

    return [value, setValue];
};

export const useStringControl: UseControl<StringControl> = (control) => {
    const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
    const [value, setValue] = useState(control.defaultValue);
    const idRef = useRef<string>();

    useEffect(() => {
        if (idRef.current) updateControlValue(idRef.current, value);
    }, [value]);

    useEffect(() => {
        const id = uuid();
        idRef.current = id;
        createControl(id, { ...control, type: 'string', value, setValue, id });
        return () => deleteControl(id);
    }, []);

    useEffect(() => setValue(control.defaultValue), [control.defaultValue]);

    return [value, setValue];
};

export const useNumberControl: UseControl<NumberControl> = (control) => {
    const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
    const [value, setValue] = useState(control.defaultValue);
    const idRef = useRef<string>();

    useEffect(() => {
        if (idRef.current) updateControlValue(idRef.current, value);
    }, [value]);

    useEffect(() => {
        const id = uuid();
        idRef.current = id;
        createControl(id, { ...control, type: 'number', value, setValue, id });
        return () => deleteControl(id);
    }, []);

    useEffect(() => setValue(control.defaultValue), [control.defaultValue]);

    return [value, setValue];
};

export const useButtonControl: UseControl<ButtonControl, 'defaultValue'> = (control) => {
    const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
    const [value, setValue] = useState(0);
    const idRef = useRef<string>();

    useEffect(() => {
        if (idRef.current) updateControlValue(idRef.current, value);
    }, [value]);

    useEffect(() => {
        const id = uuid();
        idRef.current = id;
        createControl(id, {
            ...control,
            type: 'button',
            value,
            setValue,
            defaultValue: 0,
            id,
        });
        return () => deleteControl(id);
    }, []);

    return [value, setValue];
};

export const useRadioControl: UseControl<RadioControl> = (control) => {
    const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
    const [value, setValue] = useState(control.defaultValue);
    const idRef = useRef<string>();

    useEffect(() => {
        if (idRef.current) updateControlValue(idRef.current, value);
    }, [value]);

    useEffect(() => {
        const id = uuid();
        idRef.current = id;
        createControl(id, {
            ...control,
            type: 'radio',
            value,
            setValue,
            defaultValue: control.defaultValue,
            id,
        });
        return () => deleteControl(id);
    }, []);

    useEffect(() => setValue(control.defaultValue), [control.defaultValue]);

    return [value, setValue];
};

export const useCheckboxControl: UseControl<CheckboxControl> = (control) => {
    const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
    const [value, setValue] = useState(control.defaultValue);
    const idRef = useRef<string>();

    useEffect(() => {
        if (idRef.current) updateControlValue(idRef.current, value);
    }, [value]);

    useEffect(() => {
        const id = uuid();
        idRef.current = id;
        createControl(id, {
            ...control,
            type: 'checkbox',
            value,
            setValue,
            defaultValue: control.defaultValue,
            id,
        });
        return () => deleteControl(id);
    }, []);

    useEffect(() => setValue(control.defaultValue), [control.defaultValue]);

    return [value, setValue];
};
