import React, { FC } from 'react';
import styled from 'styled-components';
import { SpinnerProps } from '@components/loader/loader.type';

const AtomInnerStyled = styled.div``;

export const AtomWrapperStyled: FC<SpinnerProps> = styled.div<SpinnerProps>`
    ${(props) => {
        const atomSize = props.size;
        const atomColor = '#64bfe8';
        const atomThick = atomSize * 0.05;

        return `
            position: relative;
            width: ${atomSize}px;
            height: ${atomSize}px;
            
            ${AtomInnerStyled} {
                filter: blur(1px);
                position: absolute;
                content: '';
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border-bottom: ${atomThick}px solid ${atomColor};
                
                &:nth-child(1) {
                    animation: rotate1 1.15s linear infinite;
                    animation-delay: -0.8s;
                }
                
                &:nth-child(2) {
                    animation: rotate2 1.15s linear infinite;
                    animation-delay: -0.4s;
                }
                
                &:nth-child(3) {
                    animation: rotate3 1.15s linear infinite;
                    animation-delay: 0s;
                }
            }

            @keyframes rotate1 {
                from {
                    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0);
                }
                to {
                    transform: rotateX(35deg) rotateY(-45deg) rotateZ(1turn);
                }
            }
            
            @keyframes rotate2 {
                from {
                    transform: rotateX(50deg) rotateY(10deg) rotateZ(0);
                }
                to {
                    transform: rotateX(50deg) rotateY(10deg) rotateZ(1turn);
                }
            }
                
            @keyframes rotate3 {
                from {
                    transform: rotateX(35deg) rotateY(55deg) rotateZ(0);
                }
                to {
                    transform: rotateX(35deg) rotateY(55deg) rotateZ(1turn);
                }
            }
    `;
    }}
`;

export const AtomSpinner: FC<SpinnerProps> = (props) => (
    <AtomWrapperStyled {...props}>
        <AtomInnerStyled />
        <AtomInnerStyled />
        <AtomInnerStyled />
    </AtomWrapperStyled>
);
