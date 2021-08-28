import React, { FC } from 'react';
import { Button } from '@components/button/button.component';
import styled from 'styled-components';
import * as Styled from '@components/button/button.styled';

const DemoStyled = styled.div`
    ${Styled.ButtonStyled} {
        margin: 10px;
    }
`;

export const ButtonStories: FC = () => (
    <DemoStyled>
        <Button size="large" appearance="default">Change visibility</Button>
        <Button size="small" appearance="primary">Gists</Button>
        <Button size="medium" appearance="success">Create repo</Button>
        <Button size="large" appearance="danger">Delete repo</Button>
        <Button size="large" appearance="link">Check out docs</Button>
    </DemoStyled>
);
