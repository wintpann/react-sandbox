import { Theme } from 'src/root/theme/theme.type';

export const DefaultTheme: Theme = {
    color: '#f2f2f2',
    background: '#1e2025',
    font: {
        family: '"Lato", sans-serif',
        weight: 'normal',
        size: {
            default: '16px',
            small: '12px',
            medium: '22px',
            big: '28px',
        },
    },
    border: {
        radius: '5px',
        color: '#35353e',
    },
    shadow: {
        color: '#35353e',
    },
    actions: {
        hover: 'rgba(120,120,120,0.1)',
        focus: 'rgba(30,30,40,0.2)',
    },
};
