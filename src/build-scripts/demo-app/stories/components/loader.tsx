import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Loader } from '@components/loader/loader.component';
import * as Styled from '@components/loader/loader.styled';

const DemoStyled = styled.div`
    ${Styled.LoaderStyled} {
        margin: 10px;
    }
`;

export const LoaderStories: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <DemoStyled>
            <button type="button" onClick={() => setIsLoading((value) => !value)}>
                Click
            </button>
            <Loader isShown={isLoading} type="default" />
            <Loader isShown={isLoading} type="clock" />
            <Loader isShown={isLoading} type="neon" />
            <Loader isShown={isLoading} type="atom" />
        </DemoStyled>
    );
};
