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
    background: rgba(106, 72, 106, 0.1);
`;

export const StoryPanelStyled = styled.div<{ width: number }>`
    height: 100%;
    width: ${({ width }) => width}%;
    background: rgba(91, 156, 156, 0.1);
`;
