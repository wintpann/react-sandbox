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
            `,
            css`
                bottom: ${hiddenIconOffset}px;
            `,
        )}
        ${transitionMixin({ props: ['bottom'], duration })}
    `,
    right: ({ iconSize, isBadgeOpen, duration, shownIconOffset, hiddenIconOffset }) => css`
        top: 50%;
        transform: translateY(-50%);

        ${ifStyle(
            isBadgeOpen,
            css`
                left: -${iconSize + shownIconOffset}px;
            `,
            css`
                left: ${hiddenIconOffset}px;
            `,
        )}
        ${transitionMixin({ props: ['left'], duration })}
    `,
    left: ({ iconSize, isBadgeOpen, duration, shownIconOffset, hiddenIconOffset }) => css`
        top: 50%;
        transform: translateY(-50%);

        ${ifStyle(
            isBadgeOpen,
            css`
                right: -${iconSize + shownIconOffset}px;
            `,
            css`
                right: ${hiddenIconOffset}px;
            `,
        )}
        ${transitionMixin({ props: ['right'], duration })}
    `,
    bottom: ({ iconSize, isBadgeOpen, duration, shownIconOffset, hiddenIconOffset }) => css`
        left: 50%;
        transform: translateX(-50%);
        ${ifStyle(
            isBadgeOpen,
            css`
                top: -${iconSize + shownIconOffset}px;
            `,
            css`
                top: ${hiddenIconOffset}px;
            `,
        )}
        ${transitionMixin({ props: ['top'], duration })}
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
