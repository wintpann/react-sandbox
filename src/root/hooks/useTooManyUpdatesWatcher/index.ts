/* eslint react-hooks/rules-of-hooks: 0 */
/* eslint react-hooks/exhaustive-deps: 0 */

import { useCallback, useEffect, useRef } from 'react';

type UpdatesData = {
    timesUpdated: number;
    interval: number | undefined;
};

type Updater = () => void;

const initialUpdatesData: UpdatesData = {
    timesUpdated: 0,
    interval: undefined,
};

export const useTooManyUpdatesWatcher = (
    trigger: () => void,
    intervalMS = 1000,
    times = 10,
): Updater => {
    const updatesData = useRef<UpdatesData>(initialUpdatesData);

    const updater = useCallback(() => {
        updatesData.current.timesUpdated++;
    }, []);

    useEffect(() => {
        updatesData.current.interval = window.setInterval(() => {
            if (updatesData.current.timesUpdated > times) {
                trigger();
            }
            updatesData.current.timesUpdated = 0;
        }, intervalMS);

        return () => {
            clearInterval(updatesData.current.interval);
            updatesData.current = initialUpdatesData;
        };
    }, [intervalMS, times, trigger]);

    return updater;
};
