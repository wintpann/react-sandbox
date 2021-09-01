import React, { FC } from 'react';
import * as Styled from '@demo-app/app.styled';
import { Global } from '@components/global/global.component';
import { ButtonStories } from '@demo-app/stories/components/button';
import { LoaderStories } from '@demo-app/stories/components/loader';

export const App: FC = () => (
    <Global>
        <Styled.AppStyled>
            <ButtonStories />
            <LoaderStories />
        </Styled.AppStyled>
    </Global>
);
