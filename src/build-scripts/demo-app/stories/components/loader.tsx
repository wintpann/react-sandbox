import React, { FC } from 'react';
import {
    DemoBaseStyled,
    StoryBox,
    useNumberControl,
    useRadioControl,
} from '@demo-app/stories/storybox';
import { Loader } from '@components/loader/loader.component';
import { LoaderProps } from '@components/loader/loader.type';

export const LoaderStories: FC = () => {
    const [isShown] = useRadioControl({
        name: 'isShown',
        options: ['true', 'false'],
        defaultValue: 'true',
    });

    const [type] = useRadioControl({
        name: 'type',
        options: ['default', 'clock', 'neon', 'atom'],
        defaultValue: 'default',
    });

    const [size] = useNumberControl({
        name: 'size',
        min: 20,
        max: 300,
        defaultValue: 200,
        appearance: 'range',
    });

    const [duration] = useNumberControl({
        name: 'duration',
        min: 20,
        max: 300,
        defaultValue: 50,
        appearance: 'range',
    });

    const [timing] = useRadioControl({
        name: 'timing',
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
        name: 'entry',
        options: ['scale', 'opacity'],
        defaultValue: 'scale',
    });

    return (
        <StoryBox>
            <DemoBaseStyled>
                <Loader
                    isShown={isShown === 'true'}
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
