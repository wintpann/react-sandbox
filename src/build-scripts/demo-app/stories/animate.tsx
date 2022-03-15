import React, { FC, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { DemoBaseStyled, StoryBox, useButtonControl, useRadioControl } from '@demo-app/storybox';
import { animate, BezierTiming } from '@utils/dom/animate';

const DemoStyled = styled(DemoBaseStyled)`
    position: relative;
`;

const RectangleStyled = styled.div`
    background: rgba(255, 255, 255, 0.2);
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
`;

const timing: Record<string, BezierTiming> = {
    ease: [0.25, 0.1, 0.25, 1],
    custom: [0.575, 1.36, 0.5, -0.33],
};

export const AnimateStories: FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const [timingKey] = useRadioControl({
        name: 'Timing function',
        options: ['ease', 'custom'],
        defaultValue: 'ease',
    });

    const toRight = useCallback(() => {
        const onChange = (value: number) => {
            if (!ref.current) return;
            ref.current.style.left = `${value}%`;
        };
        animate(onChange, [0, 100], 500, timing[timingKey as keyof typeof timing]);
    }, [timingKey]);

    const toLeft = useCallback(() => {
        const onChange = (value: number) => {
            if (!ref.current) return;
            ref.current.style.left = `${value}%`;
        };
        animate(onChange, [100, 0], 500, timing[timingKey as keyof typeof timing]);
    }, [timingKey]);

    useButtonControl({
        name: 'To right',
        onClick: toRight,
    });

    useButtonControl({
        name: 'To left',
        onClick: toLeft,
    });

    return (
        <StoryBox>
            <DemoStyled>
                <RectangleStyled ref={ref} />
            </DemoStyled>
        </StoryBox>
    );
};
