import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import { DemoBaseStyled, StoryBox, useButtonControl, useNumberControl } from '@demo-app/storybox';
import { useBounds } from '@hooks/useBounds';

const RectangleStyled = styled.div`
    background: rgba(255, 255, 255, 0.2);
`;

const Story: FC<{ width: number; height: number }> = ({ width, height }) => {
    const ref = useRef<HTMLDivElement>(null);
    const info = useBounds(ref);

    return (
        <>
            <RectangleStyled ref={ref} style={{ width: `${width}px`, height: `${height}px` }}>
                bounds info: <br /> <br />
                bottom: {info.bottom} <br />
                height: {info.height} <br />
                left: {info.left} <br />
                right: {info.right} <br />
                top: {info.top} <br />
                width: {info.width} <br />
                x: {info.x} <br />
                y: {info.y} <br />
            </RectangleStyled>
        </>
    );
};

export const UseBoundsStories: FC = () => {
    const [key, setKey] = useState(1);
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

    const remount = () => setKey((prev) => prev + 1);

    useButtonControl({
        name: 'Remount',
        onClick: remount,
    });

    return (
        <StoryBox>
            <DemoBaseStyled>
                <Story width={width} height={height} key={key} />
            </DemoBaseStyled>
        </StoryBox>
    );
};
