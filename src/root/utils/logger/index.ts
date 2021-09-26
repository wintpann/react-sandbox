import { devOnly } from '@utils/common';

type Message = string | string[]

type Log = (message: Message) => void;

const getMessage = (msg: Message): string => (Array.isArray(msg) ? msg.join(' ') : msg);

export const warn = devOnly<Log>((message) => {
    const msg = getMessage(message);
    // eslint-disable-next-line no-console
    console.warn(`Darcula [Warning]: ${msg}. (This is a dev-only message)`);
});

export const error = devOnly<Log>((message) => {
    const msg = getMessage(message);
    // eslint-disable-next-line no-console
    console.error(`Darcula [Error]: ${msg}. (This is a dev-only message)`);
});
