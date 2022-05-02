import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Button } from './App';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
`;

ReactDOM.render(
  <StrictMode>
    <App />
    <BigButton as="a">new CTA</BigButton>
  </StrictMode>,
  document.getElementById('root')
);
