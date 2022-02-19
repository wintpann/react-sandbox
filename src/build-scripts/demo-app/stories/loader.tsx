import React, { FC } from 'react';
import { DemoBaseStyled, StoryBox, useNumberControl, useRadioControl } from '@demo-app/storybox';
import { Loader } from '@components/loader/loader.component';
import { LoaderProps } from '@components/loader/loader.type';
import { useBooleanControl } from '@demo-app/storybox/storybox.hooks';

export const LoaderStories: FC = () => {
    const [isShown] = useBooleanControl({
        name: 'Is shown',
        defaultValue: true,
    });

    const [type] = useRadioControl({
        name: 'Type',
        options: ['default', 'clock', 'neon', 'atom'],
        defaultValue: 'default',
    });

    const [size] = useNumberControl({
        name: 'Size',
        min: 20,
        max: 300,
        defaultValue: 200,
        appearance: 'range',
    });

    const [duration] = useNumberControl({
        name: 'Duration',
        min: 20,
        max: 300,
        defaultValue: 50,
        appearance: 'range',
    });

    const [timing] = useRadioControl({
        name: 'Timing',
        options: [
            'linear',
            'ease',
            'ease-in-out',
            'ease-in-out-sign',
            'ease-in-out-cubic',
            'ease-in-out-slow-fast',
            'ease-in-out-fast',
            'ease-out-fast',
        ],
        defaultValue: 'ease',
    });

    const [entry] = useRadioControl({
        name: 'Entry',
        options: ['scale', 'opacity'],
        defaultValue: 'scale',
    });

    return (
        <StoryBox>
            <DemoBaseStyled>
                <Loader
                    isShown={isShown}
                    type={type as LoaderProps['type']}
                    size={size as LoaderProps['size']}
                    duration={duration as LoaderProps['duration']}
                    timing={timing as LoaderProps['timing']}
                    entry={entry as LoaderProps['entry']}
                />
            </DemoBaseStyled>
        </StoryBox>
    );
};
