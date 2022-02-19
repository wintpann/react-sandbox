/* eslint react-hooks/exhaustive-deps: 0 */
import { useContext, useEffect, useState, useRef } from 'react';
import {
    BooleanControl,
    ButtonControl,
    CheckboxControl,
    Control,
    NumberControl,
    RadioControl,
    StringControl,
    UseControl,
} from '@demo-app/storybox/storybox.type';
import { v4 as uuid } from 'uuid';
import { ControlsContext } from '@demo-app/storybox/storybox.component';

const createGenericControlHook = <T extends Control>(type: T['type']): UseControl<T> => {
    const useGenericControl: UseControl<T> = (control) => {
        const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
        const [value, setValue] = useState(control.defaultValue);
        const idRef = useRef<string>();

        useEffect(() => {
            if (idRef.current) updateControlValue(idRef.current, value);
        }, [value]);

        useEffect(() => {
            const id = uuid();
            idRef.current = id;
            createControl(id, { ...control, type, value, setValue, id } as T);
            return () => deleteControl(id);
        }, []);

        useEffect(() => setValue(control.defaultValue), [control.defaultValue]);

        return [value, setValue];
    };

    return useGenericControl;
};

export const useBooleanControl = createGenericControlHook<BooleanControl>('boolean');

export const useStringControl = createGenericControlHook<StringControl>('string');

export const useNumberControl = createGenericControlHook<NumberControl>('number');

export const useRadioControl = createGenericControlHook<RadioControl>('radio');

export const useCheckboxControl = createGenericControlHook<CheckboxControl>('checkbox');

export const useButtonControl: UseControl<ButtonControl, 'defaultValue'> = (control) => {
    const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
    const [value, setValue] = useState(0);
    const idRef = useRef<string>();

    useEffect(() => {
        if (idRef.current) {
            updateControlValue(idRef.current, value);
            control.onClick?.();
        }
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
