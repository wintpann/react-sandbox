import styled from 'styled-components';
import { SpinnerProps } from '@components/loader/loader.type';

export const ClockSpinnerStyled = styled.div<SpinnerProps>`
    ${(props) => {
        const clockSize = props.size;
        const clockRadius = clockSize / 2;
        const clockMinuteLength = clockSize * 0.4;
        const clockHourLength = clockSize * 0.2;
        const clockThickness = clockSize * 0.05;
        const clockMinuteTop = clockRadius * 0.12;
        const clockHourTop = clockMinuteTop + clockHourLength;
        const duration = props.duration * 0.05;
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
                animation: spin infinite ${props.animation};
            }
            
            &:before {
                height: ${clockMinuteLength}px;
                animation-duration: ${duration}s;
            }
            
            &:after {
                top: ${clockHourTop}px;
                height: ${clockHourLength}px;
                animation-duration: ${duration * 7.5}s;
            }
            
            @keyframes spin {
                to {
                    transform: rotate(1turn);
                }
            }
    `;
    }}
`;
