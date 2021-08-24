import React, { FC } from 'react';
import { Global } from '@components/global/global.component';
import { ButtonStories } from '@demo-app/stories/components/button';
import { AppStyled } from '@demo-app/app.styled';

export const App: FC = () => (
    <Global>
        <AppStyled>
            <ButtonStories />
        </AppStyled>
    </Global>
);
