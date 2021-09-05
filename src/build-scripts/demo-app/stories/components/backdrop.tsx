import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Backdrop } from '@components/backdrop/backdrop.component';

const ContentStyled = styled.div``;

const DemoStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 300px;
    height: 200px;
    padding: 20px;
    overflow: hidden;
    background: rgb(63,161,147);
    button, input {
        width: 100px;
        position: relative;
        z-index: 100;
    }
`;

export const BackdropStories: FC = () => {
    const [isShownBlur, setIsShownBlur] = useState(false);
    const [isShownBlack, setIsShownBlack] = useState(false);
    const [isShownWhite, setIsShownWhite] = useState(false);
    const [radius, setRadius] = useState('50');

    return (
        <DemoStyled style={{ borderRadius: `${radius}px` }}>
            <input
                type="range"
                min={0}
                max={50}
                step={1}
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
            />
            <button type="button" onClick={() => setIsShownBlur((value) => !value)}>
                {isShownBlur ? 'hide blur' : 'show blur'}
            </button>
            <Backdrop isShown={isShownBlur} />

            <button type="button" onClick={() => setIsShownBlack((value) => !value)}>
                {isShownBlack ? 'hide black' : 'show black'}
            </button>
            <Backdrop isShown={isShownBlack} type="black" />

            <button type="button" onClick={() => setIsShownWhite((value) => !value)}>
                {isShownWhite ? 'hide white' : 'show white'}
            </button>
            <Backdrop isShown={isShownWhite} type="white" />

            <ContentStyled>
                some content goes here
                some content goes here
                some content goes here
            </ContentStyled>
        </DemoStyled>
    );
};
