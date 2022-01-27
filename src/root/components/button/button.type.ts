import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    appearance?: 'default' | 'primary' | 'link' | 'danger' | 'success';
    size?: 'large' | 'medium' | 'small';
};

export type ButtonStyledProps = Pick<Required<ButtonProps>, 'appearance' | 'size'>;
