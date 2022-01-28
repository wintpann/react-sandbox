import React, { FC, useCallback, ChangeEventHandler } from 'react';
import { Control, StringControl } from '@demo-app/stories/storybox/storybox.type';

export const RenderStringControl: FC<StringControl> = ({ name, value, setValue }) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            setValue(e.target.value);
        },
        [setValue],
    );

    return (
        <div>
            {name}
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
};

export const RenderControl: FC<{ control: Control }> = ({ control }) => {
    switch (control.type) {
        case 'string':
            return <RenderStringControl {...control} />;
        default:
            return null;
    }
};
