import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { DemoBaseStyled, StoryBox, useNumberControl, useRadioControl } from '@demo-app/storybox';
import { Logger } from '@utils/logger';
import throttle from 'lodash/throttle';
import { useResizeObserver } from '@hooks/useResizeObserver';

const RectangleStyled = styled.div`
    background: rgba(255, 255, 255, 0.2);
`;

const onResize = throttle(() => Logger.info('Resize!'), 500);

export const UseResizeObserverStories: FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [height] = useNumberControl({
        name: 'Height',
        min: 100,
        max: 400,
        appearance: 'range',
        defaultValue: 200,
    });

    const [width] = useNumberControl({
        name: 'Width',
        min: 100,
        max: 400,
        appearance: 'range',
        defaultValue: 200,
    });

    const [background] = useRadioControl({
        name: 'Background',
        options: ['red', 'green', 'blue'],
        defaultValue: 'red',
    });

    useResizeObserver(onResize, ref);

    return (
        <StoryBox>
            <DemoBaseStyled>
                <RectangleStyled
                    ref={ref}
                    style={{ width: `${width}px`, height: `${height}px`, background }}
                >
                    listening for resize
                </RectangleStyled>
            </DemoBaseStyled>
        </StoryBox>
    );
};
