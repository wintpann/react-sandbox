export const arrayOf = <T>(count: number, mapFn: (index: number) => T): T[] =>
    new Array(count).fill(null).map((_, index) => mapFn(index));
