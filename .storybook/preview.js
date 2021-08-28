import React from 'react';
import {AppStyled} from '../src/build-scripts/demo-app/app.styled';
import { Global } from '../src/root/components/global/global.component';

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
        <Global>
            <AppStyled>
                <Story/>
            </AppStyled>
        </Global>
    ),
];
