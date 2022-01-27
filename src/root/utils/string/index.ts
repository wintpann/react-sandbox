export const camelspace = (input: string): string =>
    input.replace(/[a-z][A-Z]/g, (str) => `${str[0]} ${str[1]}`);
