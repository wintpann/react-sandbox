import styled from 'styled-components';
import { ButtonStyledProps } from '@components/button/button.type';
import { PropCss } from '@utils/type';
import { flexMixin, ifStyle, transitionMixin } from '@utils/styled';

const getButtonTypeCss: PropCss<ButtonStyledProps, 'appearance'> = {
    default: () => '',
    primary: () => `
        background-color: #45a8fa;
        border-color: #2a323b;
        text-shadow: 0 0 5px #393939;
        
        &:hover {
            background-color: #45c9fa;
        }
        
        &:active {
            box-shadow: 0 0 2px 1px #1c5a8f;
            background-color: #45a8fa;
        }
    `,
    link: () => `
        border: none;
        background: none;
        border-radius: 0;
        min-width: fit-content;
        text-decoration: underline;
        color: #45a8fa;
        
        &:hover {
            background-color: inherit;
            color: #0bdcff;
            text-shadow: 0 0 1px #0fbedb;
        }
        
        &:active {
            box-shadow: none;
            color: #45a8fa;
        }
    `,
    danger: () => `
        background-color: #c42424;
        
        &:hover {
            background-color: #d43131;
        }
        
        &:active {
            box-shadow: 0 0 5px #e71313;
            background-color: #c42424;
        }
    `,
    success: () => `
        background-color: #24c428;
        text-shadow: 0 0 5px #393939;
        
        &:hover {
            background-color: #52d531;
        }
        
        &:active {
            box-shadow: 0 0 2px #13e71b;
            background-color: #24c428;
        }
    `,
};

const getButtonSizeCss: PropCss<ButtonStyledProps, 'size'> = {
    large: () => `
        min-width: 170px;
    `,
    medium: () => `
        min-width: 100px;
    `,
    small: () => `
        height: 30px;
        min-width: 60px;
    `,
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
    ${flexMixin()}
    ${transitionMixin({
        props: ['background-color', 'box-shadow', 'color'],
        duration: 0.1,
    })}
    
    cursor: pointer;
    border: none;
    background: none;
    padding: 0 15px;
    height: 40px;

    ${(props) => `
        color: ${props.theme.color};
        border-radius: ${props.theme.border.radius};
        border: 1px solid ${props.theme.border.color};

        &:hover {
            background-color: ${props.theme.actions.hover};
        }

        &:active {
            box-shadow: 0 0 2px 1px ${props.theme.shadow.color};
            border-color: ${props.theme.border.color};
        }

        ${getButtonTypeCss[props.appearance](props)}
        ${getButtonSizeCss[props.size](props)}
        
        ${ifStyle(props.disabled)`
            user-select: none;
            opacity: 0.5;
            pointer-events: none;
        `}
    `}
`;
