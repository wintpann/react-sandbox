import styled from 'styled-components';
import { SpinnerProps } from '@components/loader/loader.type';

export const NeonInnerStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
`;

export const NeonWrapperStyled = styled.div<SpinnerProps>`
    ${(props) => {
        const atomSize = props.size;
        const offset = atomSize * 0.1;
        const duration = props.duration * 0.01;
        const blurs = [atomSize * 0.025, atomSize * 0.05, atomSize * 0.1, atomSize * 0.2];

        return `
            position: relative;
            width: ${atomSize}px;
            height: ${atomSize}px;
            border-radius: 50%;
            background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
            animation: animate ${duration}s ${props.animation} infinite;
            
            @keyframes animate {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
            
            &:after {
                content: '';
                position: absolute;
                top: ${offset}px;
                left: ${offset}px;
                right: ${offset}px;
                bottom: ${offset}px;
                background: #f1f1f1;
                border: solid white  ${offset}px;
                border-radius: 50%;
            }
            
            ${NeonInnerStyled}:nth-child(1) {
                filter: blur(${blurs[0]}px);
            }
            ${NeonInnerStyled}:nth-child(2) {
                filter: blur(${blurs[1]}px);
            }
            ${NeonInnerStyled}:nth-child(3) {
                filter: blur(${blurs[2]}px);
            }
            ${NeonInnerStyled}:nth-child(4) {
                filter: blur(${blurs[3]}px);
            }
        `;
    }}
`;
