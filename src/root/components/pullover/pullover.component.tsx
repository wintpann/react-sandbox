import React, { FC, memo, useCallback, useMemo, useRef } from 'react';
import {
    BsFillArrowDownCircleFill,
    BsFillArrowUpCircleFill,
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from 'react-icons/bs';
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
    top: BsFillArrowDownCircleFill,
    bottom: BsFillArrowUpCircleFill,
    right: BsFillArrowLeftCircleFill,
    left: BsFillArrowRightCircleFill,
};

const Pullover: FC<PulloverProps> = ({ children, ...rest }) => {
    const { Icon, ...optionalProps } = useMemo(() => {
        const position = getProp('top', rest.position);
        const duration = getProp(500, rest.duration);
        const icon = getProp(IconsMap[position], rest.icon as IconType);
        const iconSize = getProp(20, rest.iconSize);
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

    const open = useCallback(() => {
        cancelDebouncedChange();
        immediateChange(true);
    }, [immediateChange, cancelDebouncedChange]);

    const close = useCallback(() => {
        debouncedChange(false);
    }, [debouncedChange]);

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
