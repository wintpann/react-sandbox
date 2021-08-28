import styled from 'styled-components';
import { BackdropStyledProps } from '@components/backdrop/backdrop.type';
import { PropCss } from '@utils/type';
import { ifStyle, transitionMixin } from '@utils/styled';

const getBackdropTypeCss: PropCss<
    BackdropStyledProps,
    BackdropStyledProps,
    'type'
> = {
    blur: ({ isShown, blur }) => `
        backdrop-filter: blur(0);
        ${ifStyle(isShown)`
            backdrop-filter: blur(${blur}px);
        `}
    `,
    black: ({ isShown }) => `
        ${ifStyle(isShown)`
            background-color: rgba(0, 0, 0, 0.3);
        `}
    `,
    white: ({ isShown }) => `
        ${ifStyle(isShown)`
            background-color: rgba(255, 255, 255, 0.3);
        `}
    `,
    'black-blur': ({ isShown, blur }) => `
        backdrop-filter: blur(0);
        ${ifStyle(isShown)`
            backdrop-filter: blur(${blur}px);
            background-color: rgba(0, 0, 0, 0.3);
        `}
    `,
    'white-blur': ({ isShown, blur }) => `
        backdrop-filter: blur(0);
        ${ifStyle(isShown)`
            backdrop-filter: blur(${blur}px);
            background-color: rgba(255, 255, 255, 0.3);
        `}
    `,
};

export const BackdropStyled = styled.div<BackdropStyledProps>`
    ${(props) => {
        const duration = 0.3;

        return `
            position: static;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
    
            ${transitionMixin({ props: ['backdrop-filter', 'background-color'], duration })}
    
            @keyframes disappear {
                0% {
                    position: absolute;
                }
                100% {
                    position: static;
                }
            }
            
            ${ifStyle(props.isShown)`
                position: absolute;
            `}
            
            ${ifStyle(!props.isShown)`
                animation: disappear ${duration}s;
            `}
            
            ${getBackdropTypeCss[props.type](props)}
        `;
    }}
`;
