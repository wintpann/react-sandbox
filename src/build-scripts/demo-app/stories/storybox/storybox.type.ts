export interface BaseControl<T> {
    type: string;
    name: string;
    defaultValue: T;
    value: T;
    setValue: (newValue: T) => void;
}

export interface StringControl extends BaseControl<string> {
    type: 'string';
    maxLength?: number;
    minLength?: number;
}

export interface ButtonControl extends BaseControl<number> {
    type: 'button';
}

export type Control = StringControl | ButtonControl;

export type UseControl<T, ControlType extends Control, OmitTypes extends string = ''> = (
    control: Omit<ControlType, 'type' | 'id' | 'value' | 'setValue' | OmitTypes>,
) => {
    value: T;
};

export type ControlsContextType = {
    controls: Record<string, Control>;
    createControl: (name: string, control: Control) => void;
    updateControlValue: (name: string, value: Control['value']) => void;
    deleteControl: (name: string) => void;
};
