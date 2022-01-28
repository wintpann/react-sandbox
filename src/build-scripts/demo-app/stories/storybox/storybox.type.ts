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

export interface RadioControl extends BaseControl<string> {
    type: 'radio';
    options: string[];
}

export type Control = StringControl | ButtonControl | RadioControl;

export type UseControl<ControlType extends Control, OmitTypes extends string = ''> = (
    control: Omit<ControlType, 'type' | 'id' | 'value' | 'setValue' | OmitTypes>,
) => {
    value: ControlType['value'];
};

export type ControlsContextType = {
    controls: Record<string, Control>;
    createControl: (name: string, control: Control) => void;
    updateControlValue: (name: string, value: Control['value']) => void;
    deleteControl: (name: string) => void;
};
