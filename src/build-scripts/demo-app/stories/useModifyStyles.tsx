import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { DemoBaseStyled, StoryBox, useButtonControl } from '@demo-app/storybox';
import { StyleModifier, useModifyStyles } from '@utils/deprecated/useModifyStyles';

const RectangleStyled = styled.div`
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.3s;
`;

const styles: Array<StyleModifier> = [
    ['padding', '20px', 'replace'],
    ['background', 'green', 'replace'],
    ['border-radius', '10px', 'replace'],
];

export const UseModifyStylesStories: FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const [append, remove] = useModifyStyles(ref.current, styles);

    useButtonControl({
        name: 'Append fake styles',
        onClick: append,
    });

    useButtonControl({
        name: 'Remove fake styles',
        onClick: remove,
    });

    return (
        <StoryBox>
            <DemoBaseStyled>
                <RectangleStyled ref={ref} style={{ padding: '5px' }}>
                    imagine if its kinda node that we cant control via props or classnames <br />
                    check devtools to see how styles changing <br />
                    it considers initial styles from style attribute and computed by classnames
                    <br />
                    this is very unstable and deprecated and its shit! dont use it
                    <br /> <br />
                    default styles: <br />
                    background: rgba(255, 255, 255, 0.2); (from classname) <br />
                    transition: all 0.3s; (from classname) <br />
                    padding: 5px; (from style attribute) <br /> <br />
                    fake styles: <br />
                    background: green <br />
                    border-radius: 10px; <br />
                    padding: 20px;
                </RectangleStyled>
            </DemoBaseStyled>
        </StoryBox>
    );
};
