import { useCallback, useRef, useState } from 'react';
import { Lazy } from 'fp-ts/function';

export const useCancelledState = <T>(
    initialValue: T,
    waitTime = 500,
): {
    cancelDebouncedChange: Lazy<void>;
    value: T;
    immediateChange: (newValue: T) => void;
    debouncedChange: (newValue: T) => void;
} => {
    const timeoutRef = useRef(0);

    const [value, setValue] = useState(initialValue);

    const debouncedChange = useCallback(
        (newValue: T) => {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = window.setTimeout(() => setValue(newValue), waitTime);
        },
        [waitTime],
    );

    const immediateChange = useCallback((newValue: T) => {
        setValue(newValue);
    }, []);

    const cancelDebouncedChange = useCallback(() => {
        window.clearTimeout(timeoutRef.current);
    }, []);

    return { cancelDebouncedChange, debouncedChange, immediateChange, value };
};
