import React, { FC, memo } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '@theme/themes/default.theme';
import { GlobalStyled } from '@components/global/global.styled';
import { GlobalProps } from '@components/global/global.type';

const Global: FC<GlobalProps> = ({ children, theme = DefaultTheme }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyled>{children}</GlobalStyled>
    </ThemeProvider>
);

const GlobalMemo = memo(Global);

export { GlobalMemo as Global };
