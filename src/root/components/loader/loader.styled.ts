import styled from 'styled-components';
import { LoaderStyledProps } from '@components/loader/loader.type';
import { PropCss } from '@utils/type';
import { ifStyle, transitionMixin } from '@utils/styled';

const getEntryCss: PropCss<
    Required<LoaderStyledProps>,
    LoaderStyledProps,
    'entry'
> = {
    rough: ({ isShown }) => `
        & > * {
            display: none;
        }
        ${ifStyle(isShown)`
            & > * {
                display: block;
            }
        `}
    `,
    opacity: ({ isShown }) => `
        opacity: 0;
        ${ifStyle(isShown)`
            opacity: 1;
        `}
    `,
    scale: ({ isShown }) => `
        transform: scale(0.2);
        opacity: 0;
        ${ifStyle(isShown)`
            transform: scale(1);
            opacity: 1;
        `}
    `,
};

export const LoaderStyled = styled.div<LoaderStyledProps>`
    position: relative;
    ${(props) => `
        width: ${props.size}px;
        height: ${props.size}px;

        ${transitionMixin({ props: ['transform', 'opacity'], duration: 0.3 })}
        
        ${getEntryCss[props.entry](props)}
    `}
`;
