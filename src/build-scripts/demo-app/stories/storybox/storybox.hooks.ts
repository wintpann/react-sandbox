/* eslint react-hooks/exhaustive-deps: 0 */
import { useContext, useEffect, useState } from 'react';
import { StringControl, UseControl } from '@demo-app/stories/storybox/storybox.type';
import { ControlsContext } from '@demo-app/stories/storybox/storybox.component';

export const useStringControl: UseControl<string, StringControl> = (control) => {
    const { deleteControl, updateControlValue, createControl } = useContext(ControlsContext);
    const [value, setValue] = useState(control.defaultValue);

    useEffect(() => updateControlValue(control.name, value), [value]);

    useEffect(() => {
        createControl(control.name, { ...control, type: 'string', value, setValue });
        return () => deleteControl(control.name);
    }, []);

    return { value };
};
