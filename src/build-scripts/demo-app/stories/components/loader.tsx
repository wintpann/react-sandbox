import React, { FC } from 'react';
import styled from 'styled-components';
import { Loader } from '@components/loader/loader.component';
import { LoaderStyled } from '@components/loader/loader.styled';

const DemoStyled = styled.div`
    ${LoaderStyled} {
        margin: 10px;
    }
`;

export const LoaderStories: FC = () => (
    <DemoStyled>
        <Loader isLoading={false} />
    </DemoStyled>
);
