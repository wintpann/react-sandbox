import React, { FC } from 'react';
import { Global } from '@components/global/global.component';
import { ButtonStories } from '@demo-app/stories/components/button';
import * as Styled from '@demo-app/app.styled';
import { LoaderStories } from '@demo-app/stories/components/loader';

export const App: FC = () => (
    <Global>
        <Styled.AppStyled>
            <ButtonStories />
            <LoaderStories />
        </Styled.AppStyled>
    </Global>
);
