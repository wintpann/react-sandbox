import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';

export const useDebouncedValue = <T>(value: T, wait = 500): T => {
    const [state, setState] = useState(value);

    const updateDebounced = useMemo(() => debounce(setState, wait), [wait]);

    useEffect(() => {
        updateDebounced(value);
    }, [value, updateDebounced]);

    return state;
};
