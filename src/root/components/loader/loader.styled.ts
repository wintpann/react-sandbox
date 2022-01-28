import styled, { css } from 'styled-components';
import { LoaderStyledProps } from '@components/loader/loader.type';
import { ifStyle, transitionMixin, mapPropCss } from '@utils/styled';

const getEntryCss = mapPropCss<LoaderStyledProps, 'entry'>({
    opacity: ({ isShown }) => css`
        opacity: 0;
        ${ifStyle(
            isShown,
            css`
                opacity: 1;
            `,
        )}
    `,
    scale: ({ isShown }) => css`
        transform: scale(0.2);
        opacity: 0;
        ${ifStyle(
            isShown,
            css`
                transform: scale(1);
                opacity: 1;
            `,
        )}
    `,
});

export const LoaderStyled = styled.div<LoaderStyledProps>`
    position: relative;
    ${(props) => css`
        width: ${props.size}px;
        height: ${props.size}px;

        ${transitionMixin({ props: ['transform', 'opacity'], duration: 300 })}
    `}
    ${getEntryCss('entry')}
`;
