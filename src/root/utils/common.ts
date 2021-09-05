export const noop = (): void => undefined;

export const isNullable = <T>(value: T): value is Exclude<T, null> => value == null;

export const isDev = process?.env?.NODE_ENV === 'development';

export const devOnly = <T extends (...args: any[]) => void> (callback: T): T => {
    const devOnlyCallback = (...args: any[]): void => {
        if (isDev) {
            callback(...args);
        }
    };
    return devOnlyCallback as T;
};
