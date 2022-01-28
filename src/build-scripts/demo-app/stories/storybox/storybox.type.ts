export interface BaseControl<T> {
    type: string;
    name: string;
    defaultValue: T;
    value: T;
    setValue: (newValue: T) => void;
}

export interface StringControl extends BaseControl<string> {
    type: 'string';
    maxLength?: string;
    minLength?: string;
}

export type Control = StringControl;

export type UseControl<T, ControlType extends Control> = (
    control: Omit<ControlType, 'type' | 'id' | 'value' | 'setValue'>,
) => {
    value: T;
};

export type ControlsContextType = {
    controls: Record<string, Control>;
    createControl: (name: string, control: Control) => void;
    updateControlValue: (name: string, value: Control['value']) => void;
    deleteControl: (name: string) => void;
};
