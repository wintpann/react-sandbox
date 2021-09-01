import styled from 'styled-components';

export const GlobalStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;

    ::-webkit-scrollbar,
    & *::-webkit-scrollbar {
        width: 16px;
    }

    ::-webkit-scrollbar-thumb,
    & *::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.3);
        background-clip: padding-box;
        border: 5px solid transparent;
    }

    ::-webkit-scrollbar-corner,
    & *::-webkit-scrollbar-corner {
        display: none;
    }

    ${({ theme }) => `
        background: ${theme.background};
        color: ${theme.color};
        font-family: ${theme.font.family};
        font-weight: ${theme.font.weight};
        font-size: ${theme.font.size.default};
    `}
`;
