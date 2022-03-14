import { toast } from 'react-toastify';

type Message = string | string[];

type Log = (message: Message) => void;

const getMessage = (msg: Message): string => (Array.isArray(msg) ? msg.join(' ') : msg);

const warn: Log = (message) => toast.warn(getMessage(message));

const error: Log = (message) => toast.error(getMessage(message));

const info: Log = (message) => toast.info(getMessage(message));

export const Logger = {
    warn,
    error,
    info,
};
