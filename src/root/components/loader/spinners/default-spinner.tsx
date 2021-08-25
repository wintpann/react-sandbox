import { FC } from 'react';
import styled from 'styled-components';
import { SpinnerProps } from '@components/loader/loader.type';

export const DefaultSpinner: FC<SpinnerProps> = styled.div<SpinnerProps>`
    ${(props) => {
        const wrapperSize = props.size;
        const spinnerSize = wrapperSize * 0.6;
        const offset = `calc(50% - ${spinnerSize / 2}px)`;
        const firstLineDistance = `-${wrapperSize * 0.2}px`;
        const secondLineDistance = `${wrapperSize * 0.1}px`;
        const lineWidth = `${wrapperSize * 0.05}`;

        return `
            @keyframes spin{
                0% {transform: rotate(0deg);}
                100% {transform: rotate(360deg);}
            }
            
            position: absolute;
            top: ${offset};
            left: ${offset};
            height: ${spinnerSize}px;
            width: ${spinnerSize}px;
            border: ${lineWidth}px solid transparent;
            border-top-color: #A04668;
            border-radius: 50%;
            animation: spin 2s linear infinite;
            
            &:before, &:after{
                content:'';
                position: absolute;
                border: ${lineWidth}px solid transparent;
                border-radius: 50%;
            }
            
            &:before{
                border-top-color: #254E70;
                top: ${firstLineDistance};
                left: ${firstLineDistance};
                right: ${firstLineDistance};
                bottom: ${firstLineDistance};
                animation: spin 3s linear infinite;
            }
            
            &:after{
                border-top-color: #FFFBFE;
                top: ${secondLineDistance};
                left: ${secondLineDistance};
                right: ${secondLineDistance};
                bottom: ${secondLineDistance};
                animation: spin 4s linear infinite;
            }
        `;
    }}
`;
