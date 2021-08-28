import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Loader } from '@components/loader/loader.component';
import { LoaderStyled } from '@components/loader/loader.styled';

const DemoStyled = styled.div`
    ${LoaderStyled} {
        margin: 10px;
    }
`;

export const LoaderStories: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <DemoStyled>
            <button type="button" onClick={() => setIsLoading((value) => !value)}>Click</button>
            <Loader isLoading={isLoading} type="default" />
            <Loader isLoading={isLoading} type="clock" />
            <Loader isLoading={isLoading} type="neon" />
            <Loader isLoading={isLoading} type="atom" />
        </DemoStyled>
    );
};
