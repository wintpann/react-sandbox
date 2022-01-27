export const noop = (): void => undefined;

export const isNullable = <T>(value: T): value is Exclude<T, null> => value == null;
