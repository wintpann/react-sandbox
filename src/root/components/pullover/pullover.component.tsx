import React, { FC, memo, useMemo, useRef, useEffect } from 'react';
import { FiChevronDown, FiChevronUp, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { PulloverProps } from '@components/pullover/pullover.type';
import { classify, getProp } from '@utils/styled';
import * as Styled from '@components/pullover/pullover.styled';
import { PropMap } from '@utils/type';
import { useBounds } from '@hooks/useBounds';
import { useCancelledState } from '@hooks/useCancelledState';
import { useDebouncedValue } from '@hooks/useDebouncedValue';

const Classified = classify(Styled, ['PulloverContentStyled']);

const IconsMap: PropMap<Required<PulloverProps>, 'position', IconType> = {
    top: FiChevronDown,
    bottom: FiChevronUp,
    right: FiChevronLeft,
    left: FiChevronRight,
};

const Pullover: FC<PulloverProps> = ({ children, onShow, onHide, ...rest }) => {
    const { Icon, ...optionalProps } = useMemo(() => {
        const position = getProp('top', rest.position);
        const duration = getProp(500, rest.duration);
        const icon = getProp(IconsMap[position], rest.icon as IconType);
        const iconSize = getProp(30, rest.iconSize);
        const closePause = getProp(500, rest.closePause);
        const idleOpacity = getProp(0.3, rest.idleOpacity);
        const shownIconOffset = getProp(0, rest.shownIconOffset);
        const hiddenIconOffset = getProp(0, rest.hiddenIconOffset);

        return {
            position,
            duration,
            Icon: icon,
            iconSize,
            closePause,
            idleOpacity,
            shownIconOffset,
            hiddenIconOffset,
        };
    }, [rest]);

    const contentRef = useRef<HTMLDivElement>(null);
    const { width, height } = useBounds(contentRef);

    const {
        value: isOpen,
        immediateChange,
        debouncedChange,
        cancelDebouncedChange,
    } = useCancelledState(false, optionalProps.closePause);

    const isBadgeOpen = useDebouncedValue(!isOpen, optionalProps.duration - 100);

    useEffect(() => {
        const isPanelOpen = !isBadgeOpen;

        if (onShow && isPanelOpen) onShow();
        if (onHide && !isPanelOpen) onHide();
    }, [isBadgeOpen, onHide, onShow]);

    const open = () => {
        cancelDebouncedChange();
        immediateChange(true);
    };

    const close = () => debouncedChange(false);

    // TODO add mobile events support
    return (
        <Classified.PulloverWrapperStyled>
            <Classified.PulloverStyled
                {...optionalProps}
                width={width}
                height={height}
                isOpen={isOpen}
                onMouseLeave={close}
                onMouseOver={open}
            >
                <Classified.PulloverContentStyled ref={contentRef}>
                    {children}
                </Classified.PulloverContentStyled>
                <Classified.PulloverIcon
                    {...optionalProps}
                    isOpen={isOpen}
                    isBadgeOpen={isBadgeOpen}
                >
                    <Icon size={optionalProps.iconSize} />
                </Classified.PulloverIcon>
            </Classified.PulloverStyled>
        </Classified.PulloverWrapperStyled>
    );
};

const PulloverMemo = memo(Pullover);
export { PulloverMemo as Pullover };
