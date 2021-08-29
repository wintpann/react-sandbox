import React from 'react';
import { AppStyled } from '../src/build-scripts/demo-app/app.styled';
import { Global } from '../src/root/components/global/global.component';
import styled from 'styled-components';
import { GlobalStyled } from '../src/root/components/global/global.styled';

const StoryStyled = styled.div`
    ${GlobalStyled} {
        overflow: hidden;
    }
`;

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <StoryStyled>
            <Global>
                <AppStyled>
                    <Story/>
                </AppStyled>
            </Global>
        </StoryStyled>
    ),
];
