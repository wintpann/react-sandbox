import React, { FC } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  margin: 10px;
  background: red;
`;

const App: FC = () => <StyledApp>eslint</StyledApp>;

export { App };
