import styled from 'styled-components';
import { flexMixin } from '@utils/styled';

const HEADER_HEIGHT = 40;

export const AppStyled = styled.div`
    width: 100%;
    height: calc(100% - ${HEADER_HEIGHT}px);
    ${flexMixin({ wrap: 'wrap' })}
`;

export const LinksStyled = styled.div`
    ${flexMixin()}
    height: ${HEADER_HEIGHT}px;
`;

export const LinkStyled = styled.div`
    a {
        display: block;
        color: indianred;
        text-decoration: none;
        text-transform: uppercase;
        margin: 5px;
        border-radius: 5px;
        padding: 5px;
    }
`;
