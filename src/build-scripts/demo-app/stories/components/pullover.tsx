import React, { FC } from 'react';
import styled from 'styled-components';
import {
    DemoBaseStyled,
    StoryBox,
    useNumberControl,
    useRadioControl,
    useStringControl,
} from '@demo-app/stories/storybox';
import { Pullover } from '@components/pullover/pullover.component';
import { PulloverProps } from '@components/pullover/pullover.type';

const DemoStyled = styled(DemoBaseStyled)`
    position: relative;
`;

const ContentStyled = styled.div`
    background: #4f4f52;
    padding: 20px;
    height: 100%;
`;

export const PulloverStories: FC = () => {
    const [position] = useRadioControl({
        name: 'position',
        options: ['top', 'right', 'bottom', 'left'],
        defaultValue: 'top',
    });
    const [iconSize] = useNumberControl({
        name: 'iconSize',
        min: 20,
        max: 100,
        appearance: 'range',
        defaultValue: 30,
    });
    const [duration] = useNumberControl({
        name: 'duration',
        min: 200,
        max: 2000,
        appearance: 'range',
        defaultValue: 300,
    });
    const [closePause] = useNumberControl({
        name: 'closePause',
        min: 200,
        max: 2000,
        appearance: 'range',
        defaultValue: 300,
    });
    const [idleOpacity] = useNumberControl({
        name: 'idleOpacity',
        min: 0.1,
        max: 1,
        appearance: 'range',
        step: 0.01,
        defaultValue: 0.5,
    });
    const [children] = useStringControl({
        name: 'children',
        defaultValue: 'Some content here',
    });
    const [shownIconOffset] = useNumberControl({
        name: 'shownIconOffset',
        min: -30,
        max: 30,
        appearance: 'range',
        defaultValue: 0,
    });
    const [hiddenIconOffset] = useNumberControl({
        name: 'hiddenIconOffset',
        min: -30,
        max: 30,
        appearance: 'range',
        defaultValue: 0,
    });

    return (
        <StoryBox>
            <DemoStyled>
                <Pullover
                    position={position as PulloverProps['position']}
                    iconSize={iconSize as PulloverProps['iconSize']}
                    duration={duration as PulloverProps['duration']}
                    closePause={closePause as PulloverProps['closePause']}
                    idleOpacity={idleOpacity as PulloverProps['idleOpacity']}
                    shownIconOffset={shownIconOffset as PulloverProps['shownIconOffset']}
                    hiddenIconOffset={hiddenIconOffset as PulloverProps['hiddenIconOffset']}
                >
                    <ContentStyled>{children}</ContentStyled>
                </Pullover>
            </DemoStyled>
        </StoryBox>
    );
};
