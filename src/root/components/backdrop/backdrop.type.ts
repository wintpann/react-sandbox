export type BackdropProps = {
    isShown: boolean;
    type?: 'blur' | 'black' | 'white' | 'black-blur' | 'white-blur';
    blur?: number;
    useVignette?: boolean;
}

export type ParentStyles = {
    borderRadius: number,
}

export type BackdropStyledProps = Required<BackdropProps> & ParentStyles;
