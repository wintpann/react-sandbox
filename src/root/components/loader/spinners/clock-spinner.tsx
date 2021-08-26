import { FC } from 'react';
import styled from 'styled-components';
import { SpinnerProps } from '@components/loader/loader.type';

export const ClockSpinner: FC<SpinnerProps> = styled.div<SpinnerProps>`
    ${(props) => {
        const clockSize = props.size;
        const clockRadius = Math.floor(clockSize / 2);
        const clockMinuteLength = Math.floor(clockSize * 0.4);
        const clockHourLength = Math.floor(clockSize * 0.2);
        const clockThickness = Math.floor(clockSize * 0.05);
        const clockMinuteTop = Math.floor(clockRadius * 0.12);
        const clockHourTop = Math.floor(clockMinuteTop + clockHourLength);
        const clockColor = '#fff';

        return `
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: ${clockSize}px;
            height: ${clockSize}px;
            border: ${clockThickness}px solid ${clockColor};
            border-radius: 50%;
            
            &:before, &:after {
                position: absolute;
                content: "";
                top: ${clockMinuteTop}px;
                width: ${clockThickness}px;
                background: ${clockColor};
                border-radius: 10px;
                transform-origin: center calc(100% - ${clockThickness / 2}px);
                animation: spin infinite linear;
            }
            
            &:before {
                height: ${clockMinuteLength}px;
                animation-duration: 2s;
            }
            
            &:after {
                top: ${clockHourTop}px;
                height: ${clockHourLength}px;
                animation-duration: 15s;
            }
            
            @keyframes spin {
                to {
                    transform: rotate(1turn);
                }
            }
    `;
    }}
`;
