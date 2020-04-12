import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Header } from './ui';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fad390;
    font-family: Arial, sans-serif;
  }
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
  </Fragment>
);

export default App;
