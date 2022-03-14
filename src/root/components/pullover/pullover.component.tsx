import React, { FC, memo, useRef, useEffect } from 'react';
import { FiChevronDown, FiChevronUp, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { PulloverProps } from '@components/pullover/pullover.type';
import { classify } from '@utils/styled';
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

const Pullover: FC<PulloverProps> = ({
    children,
    onShow,
    onHide,
    position = 'top',
    duration = 500,
    Icon = IconsMap[position],
    iconSize = 30,
    closePause = 500,
    idleOpacity = 0.3,
    shownIconOffset = 0,
    hiddenIconOffset = 0,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const { width, height } = useBounds(contentRef);

    const {
        value: isOpen,
        immediateChange,
        debouncedChange,
        cancelDebouncedChange,
    } = useCancelledState(false, closePause);

    const isBadgeOpen = useDebouncedValue(!isOpen, duration - 100);

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
                width={width}
                height={height}
                isOpen={isOpen}
                onMouseLeave={close}
                onMouseOver={open}
                position={position}
                iconSize={iconSize}
                idleOpacity={idleOpacity}
                duration={duration}
            >
                <Classified.PulloverContentStyled ref={contentRef}>
                    {children}
                </Classified.PulloverContentStyled>
                <Classified.PulloverIcon
                    isOpen={isOpen}
                    isBadgeOpen={isBadgeOpen}
                    position={position}
                    iconSize={iconSize}
                    idleOpacity={idleOpacity}
                    duration={duration}
                    shownIconOffset={shownIconOffset}
                    hiddenIconOffset={hiddenIconOffset}
                >
                    <Icon size={iconSize} />
                </Classified.PulloverIcon>
            </Classified.PulloverStyled>
        </Classified.PulloverWrapperStyled>
    );
};

const PulloverMemo = memo(Pullover);
export { PulloverMemo as Pullover };
