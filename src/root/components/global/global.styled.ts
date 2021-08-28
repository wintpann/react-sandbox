import styled from 'styled-components';

export const GlobalStyled = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    ${({ theme }) => `
        background: ${theme.background};
        color: ${theme.color};
        font-family: ${theme.font.family};
        font-weight: ${theme.font.weight};
        font-size: ${theme.font.size.default};
    `}
`;
