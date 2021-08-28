import React, { FC, memo } from 'react';
import { ThemeProvider } from 'styled-components';

import { DefaultTheme } from '@theme/themes/default.theme';
import * as Styled from '@components/global/global.styled';
import { GlobalProps } from '@components/global/global.type';

import '@components/global/normalize.css';
import '@components/global/common.css';
import { classify } from '@utils/styled';

const Classified = classify(Styled);

const Global: FC<GlobalProps> = ({
    children,
    theme = DefaultTheme,
}) => (
    <ThemeProvider theme={theme}>
        <Classified.GlobalStyled>
            {children}
        </Classified.GlobalStyled>
    </ThemeProvider>
);

const GlobalMemo = memo(Global);

export { GlobalMemo as Global };
