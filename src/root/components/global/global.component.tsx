import React, { FC, memo } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '@theme/themes/default.theme';
import { GlobalStyled } from '@components/global/global.styled';
import { GlobalProps } from '@components/global/global.type';
import '@components/global/normalize.css';
import '@components/global/common.css';

const Global: FC<GlobalProps> = ({
    children,
    classes,
    theme = DefaultTheme,
}) => (
    <ThemeProvider theme={theme}>
        <GlobalStyled className={classes?.container}>{children}</GlobalStyled>
    </ThemeProvider>
);

const GlobalMemo = memo(Global);

export { GlobalMemo as Global };
