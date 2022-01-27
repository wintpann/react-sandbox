export const camelspace = (input: string): string =>
    input.replace(/[a-z][A-Z]/g, (str) => `${str[0]} ${str[1]}`);

export const uid = (length = 20): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
