export type Theme = {
    background: string;
    color: string;
    font: {
        family: string;
        weight: string;
        size: {
            default: string;
            small: string;
            medium: string;
            big: string;
        };
    };
    border: {
        radius: string;
        color: string;
    };
    actions: {
        hover: string;
        focus: string;
    };
    shadow: {
        color: string;
    };
};
