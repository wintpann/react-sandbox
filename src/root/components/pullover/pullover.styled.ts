import styled, { css } from 'styled-components';
import { PulloverIconStyledProps, PulloverStyledProps } from '@components/pullover/pullover.type';
import { ifStyle, mapPropCss, transitionMixin } from '@utils/styled';

const getIconPositionCss = mapPropCss<PulloverIconStyledProps, 'position'>({
    top: ({ iconSize, isBadgeOpen, duration, shownIconOffset, hiddenIconOffset }) => css`
        left: 50%;
        transform: translateX(-50%);
        ${ifStyle(
            isBadgeOpen,
            css`
                bottom: -${iconSize + shownIconOffset}px;
                opacity: 1;
            `,
            css`
                bottom: ${hiddenIconOffset}px;
                opacity: 0;
            `,
        )}
        ${transitionMixin({ props: ['bottom', 'opacity'], duration })}
    `,
    right: ({ iconSize, isBadgeOpen, duration, shownIconOffset, hiddenIconOffset }) => css`
        top: 50%;
        transform: translateY(-50%);

        ${ifStyle(
            isBadgeOpen,
            css`
                left: -${iconSize + shownIconOffset}px;
                opacity: 1;
            `,
            css`
                left: ${hiddenIconOffset}px;
                opacity: 0;
            `,
        )}
        ${transitionMixin({ props: ['left', 'opacity'], duration })}
    `,
    left: ({ iconSize, isBadgeOpen, duration, shownIconOffset, hiddenIconOffset }) => css`
        top: 50%;
        transform: translateY(-50%);

        ${ifStyle(
            isBadgeOpen,
            css`
                right: -${iconSize + shownIconOffset}px;
                opacity: 1;
            `,
            css`
                right: ${hiddenIconOffset}px;
                opacity: 0;
            `,
        )}
        ${transitionMixin({ props: ['right', 'opacity'], duration })}
    `,
    bottom: ({ iconSize, isBadgeOpen, duration, shownIconOffset, hiddenIconOffset }) => css`
        left: 50%;
        transform: translateX(-50%);
        ${ifStyle(
            isBadgeOpen,
            css`
                top: -${iconSize + shownIconOffset}px;
                opacity: 1;
            `,
            css`
                top: ${hiddenIconOffset}px;
                opacity: 0;
            `,
        )}
        ${transitionMixin({ props: ['top', 'opacity'], duration })}
    `,
});

const getPulloverPositionCss = mapPropCss<PulloverStyledProps, 'position'>({
    top: ({ height, isOpen, duration }) => css`
        bottom: 100%;
        right: 0;
        left: 0;

        ${ifStyle(
            isOpen,
            css`
                bottom: calc(100% - ${height}px);
            `,
        )}

        ${transitionMixin({ props: ['bottom', 'opacity'], duration })}
    `,
    right: ({ width, isOpen, duration }) => css`
        left: 100%;
        top: 0;
        bottom: 0;

        ${ifStyle(
            isOpen,
            css`
                left: calc(100% - ${width}px);
            `,
        )}

        ${transitionMixin({ props: ['left', 'opacity'], duration })}
    `,
    left: ({ width, isOpen, duration }) => css`
        right: 100%;
        top: 0;
        bottom: 0;

        ${ifStyle(
            isOpen,
            css`
                right: calc(100% - ${width}px);
            `,
        )}

        ${transitionMixin({ props: ['right', 'opacity'], duration })}
    `,
    bottom: ({ height, isOpen, duration }) => css`
        top: 100%;
        right: 0;
        left: 0;

        ${ifStyle(
            isOpen,
            css`
                top: calc(100% - ${height}px);
            `,
        )}

        ${transitionMixin({ props: ['top', 'opacity'], duration })}
    `,
});

export const PulloverStyled = styled.div<PulloverStyledProps>`
    position: absolute;
    ${({ idleOpacity, isOpen }) => css`
        opacity: ${idleOpacity};
        ${ifStyle(
            isOpen,
            css`
                opacity: 1;
            `,
        )}
    `}
    ${getPulloverPositionCss('position')}
`;

export const PulloverIcon = styled.div<PulloverIconStyledProps>`
    position: absolute;
    z-index: 0;
    ${getIconPositionCss('position')}
`;

export const PulloverWrapperStyled = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
`;

export const PulloverContentStyled = styled.div`
    position: relative;
    z-index: 1;
    height: 100%;
`;
