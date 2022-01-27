import throttle from 'lodash/throttle';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';

export const useThrottledState = <S>(
    initialState: S | (() => S),
    wait = 500,
): [S, Dispatch<SetStateAction<S>>] => {
    const [state, setState] = useState(initialState);
    const setStateDebounced = useMemo(() => throttle(setState, wait), [wait]);
    return [state, setStateDebounced];
};
