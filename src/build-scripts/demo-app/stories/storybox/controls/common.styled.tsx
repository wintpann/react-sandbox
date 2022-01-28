import styled from 'styled-components';

export const WrapperStyled = styled.div`
    margin: 0 20px;
    padding: 20px 0;
    &:not(:last-of-type) {
        border-bottom: 1px solid #2c2a2f;
    }
    display: flex;
`;

export const LabelStyled = styled.label`
    margin-right: 10px;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    flex: 0 0 150px;
`;
