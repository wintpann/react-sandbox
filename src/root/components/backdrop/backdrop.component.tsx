import React, { FC, memo, useMemo } from 'react';
import { BackdropProps } from '@components/backdrop/backdrop.type';
import * as Styled from '@components/backdrop/backdrop.styled';
import { classify, getProp } from '@utils/styled';

const Classified = classify(Styled);

const Backdrop: FC<BackdropProps> = (props) => {
    const defaultProps = useMemo(() => ({
        type: getProp('black-blur', props.type),
        blur: getProp(5, props.blur),
    }), [props.type, props.blur]);

    return <Classified.BackdropStyled {...props} {...defaultProps} />;
};

const BackdropMemo = memo(Backdrop);

export { BackdropMemo as Backdrop };
