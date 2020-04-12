import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fad390;
    font-family: Arial, sans-serif;
  }
`;

addDecorator((storyFn) => (
  <Fragment>
    <GlobalStyle />
    {storyFn()}
  </Fragment>
));
