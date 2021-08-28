export type BackdropProps = {
    isShown: boolean;
    type?: 'blur' | 'black' | 'white' | 'black-blur' | 'white-blur';
    blur?: number;
}

export type BackdropStyledProps = Required<BackdropProps>
