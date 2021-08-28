import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Backdrop } from '@components/backdrop/backdrop.component';

const ContentStyled = styled.div`
    width: 500px;
`;

const DemoStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 20px;
    padding: 20px;
    overflow: hidden;
    button {
        width: 100px;
        position: relative;
        z-index: 100;
    }
`;

export const BackdropStories: FC = () => {
    const [isShownBlur, setIsShownBlur] = useState(false);
    const [isShownBlack, setIsShownBlack] = useState(false);
    const [isShownWhite, setIsShownWhite] = useState(false);
    return (
        <DemoStyled>
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
                some content goes here
                some content goes here
                some content goes here
                some content goes here
                some content goes here
            </ContentStyled>
        </DemoStyled>
    );
};
