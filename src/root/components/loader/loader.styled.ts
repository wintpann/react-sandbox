import styled from 'styled-components';
import { LoaderStyledProps } from '@components/loader/loader.type';

export const LoaderStyled = styled.div<LoaderStyledProps>`
    position: relative;
    ${(props) => `
        width: ${props.size}px;
        height: ${props.size}px;
    `}
`;
