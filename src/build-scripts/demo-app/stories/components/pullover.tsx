import React, { FC } from 'react';
import styled from 'styled-components';
import { Pullover } from '@components/pullover/pullover.component';

const DemoStyled = styled.div`
    width: 500px;
    height: 300px;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
`;

const Content = styled.div`
    background: dimgrey;
    padding: 40px;
    width: 100%;
    height: 100%;
`;

export const PulloverStories: FC = () => (
    <DemoStyled>
        <Pullover position="top" iconSize={20}>
            <Content>some content here</Content>
        </Pullover>
    </DemoStyled>
);
