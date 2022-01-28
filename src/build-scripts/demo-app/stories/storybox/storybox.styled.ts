import styled from 'styled-components';

export const BoxStyled = styled.div`
    width: 80%;
    height: 60%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
`;

export const ControlsPanelStyled = styled.div<{ width: number }>`
    height: 100%;
    width: ${({ width }) => width}%;
    background: rgb(56, 56, 56);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const StoryPanelStyled = styled.div<{ width: number }>`
    height: 100%;
    width: ${({ width }) => width}%;
    background: rgb(68, 68, 68);
`;
