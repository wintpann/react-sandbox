import React, { FC } from 'react';
import { Global } from '@components/global/global.component';
import { ButtonStories } from '@demo-app/stories/components/button';
import { AppStyled } from '@demo-app/app.styled';
import { LoaderStories } from '@demo-app/stories/components/loader';

export const App: FC = () => (
    <Global>
        <AppStyled>
            <ButtonStories />
            <LoaderStories />
        </AppStyled>
    </Global>
);
