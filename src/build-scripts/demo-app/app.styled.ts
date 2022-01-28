import styled from 'styled-components';
import { flexMixin, transitionMixin } from '@utils/styled';

const HEADER_HEIGHT = 50;

export const AppStyled = styled.div`
    width: 100%;
    height: 100%;
    ${flexMixin({ wrap: 'wrap' })}
`;

export const LinksStyled = styled.div`
    ${flexMixin({ justify: 'flex-start' })}
    ${transitionMixin({ props: ['opacity'] })}
    height: ${HEADER_HEIGHT}px;
    background: rgb(45, 37, 43);
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const LinkStyled = styled.div`
    a {
        display: block;
        color: indianred;
        text-decoration: none;
        text-transform: uppercase;
        margin: 5px 10px;
        border-radius: 5px;
        padding: 5px;
        white-space: nowrap;
    }
`;
