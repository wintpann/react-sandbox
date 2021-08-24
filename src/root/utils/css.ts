import classnames, { Argument } from 'classnames';
import { CLASSNAME_PREFIX } from '@constants/css';

export const getClassName = (
    componentName: Argument,
    ...args: Argument[]
): string => classnames(`${CLASSNAME_PREFIX}${componentName}`, ...args);
