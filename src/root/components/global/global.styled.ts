import styled from 'styled-components';

export const GlobalStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;

    ${({ theme }) => `
        background: ${theme.background};
        color: ${theme.color};
        font-family: ${theme.font.family};
        font-weight: ${theme.font.weight};
        font-size: ${theme.font.size.default};
    `}
`;
