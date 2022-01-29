import { FC, ReactNode } from 'react';

export type PulloverProps = {
    position?: 'top' | 'right' | 'bottom' | 'left';
    icon?: FC<{ iconSize: number }>;
    iconSize?: number;
    duration?: number;
    closePause?: number;
    idleOpacity?: number;
    children: ReactNode;
    shownIconOffset?: number;
    hiddenIconOffset?: number;
    onShow?: () => void;
    onHide?: () => void;
};

export type PulloverIconStyledProps = Pick<
    Required<PulloverProps>,
    'position' | 'iconSize' | 'idleOpacity' | 'duration' | 'shownIconOffset' | 'hiddenIconOffset'
> & { isOpen: boolean; isBadgeOpen: boolean };

export type PulloverStyledProps = Pick<
    Required<PulloverProps>,
    'position' | 'iconSize' | 'idleOpacity' | 'duration'
> & {
    width: number;
    height: number;
    isOpen: boolean;
};
