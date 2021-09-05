import React, {
    FC,
    memo,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { BackdropProps, ParentStyles } from '@components/backdrop/backdrop.type';
import * as Styled from '@components/backdrop/backdrop.styled';
import { classify, getProp } from '@utils/styled';
import { useNodeMutationObserver } from '@hooks/useMutationObserver';
import { findFirstParentWith } from '@utils/dom';
import { error } from '@utils/logger';

const Classified = classify(Styled, ['BackdropStyled']);

const Backdrop: FC<BackdropProps> = (props) => {
    const defaultProps = useMemo(() => ({
        type: getProp('black-blur', props.type),
        blur: getProp(2, props.blur),
        useVignette: getProp(true, props.useVignette),
    }), [props.type, props.blur, props.useVignette]);

    const [parentStyles, setParentStyles] = useState<ParentStyles>({ borderRadius: 0 });

    const backdropRef = useRef<HTMLDivElement>(null);
    const relativeParentRef = useRef<HTMLElement | null>(null);

    const setRelativeParent = useCallback(() => {
        const [offset, parent] = findFirstParentWith(
            backdropRef.current,
            (node) => getComputedStyle(node).position === 'relative',
        );
        if (!parent) {
            error('Could not find relative parent for backdrop up to 10 nodes up');
        }

        if (offset > 1) {
            error([
                'Detected not direct relative parent for backdrop.',
                'Backdrop should have direct parent with relative position',
            ]);
        }

        relativeParentRef.current = parent;
    }, []);

    const applyParentStyles = useCallback(() => {
        if (!relativeParentRef.current) {
            return;
        }

        const computedStyles = getComputedStyle(relativeParentRef.current);

        setParentStyles({ borderRadius: parseInt(computedStyles.borderRadius, 10) });
    }, []);

    useEffect(() => {
        setRelativeParent();
        applyParentStyles();
    }, [applyParentStyles, setRelativeParent]);

    useNodeMutationObserver(applyParentStyles, relativeParentRef.current);

    return (
        <Classified.BackdropStyled
            ref={backdropRef}
            {...parentStyles}
            {...props}
            {...defaultProps}
        />
    );
};

const BackdropMemo = memo(Backdrop);

export { BackdropMemo as Backdrop };
