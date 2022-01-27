import { toast } from 'react-toastify';

type Message = string | string[];

type Log = (message: Message) => void;

const getMessage = (msg: Message): string => (Array.isArray(msg) ? msg.join(' ') : msg);

export const warn: Log = (message) => toast.warn(getMessage(message));

export const error: Log = (message) => toast.error(getMessage(message));

export const info: Log = (message) => toast.info(getMessage(message));
