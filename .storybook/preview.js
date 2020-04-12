import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyle } from '../src/ui';

addDecorator((storyFn) => (
  <Fragment>
    <GlobalStyle />
    {storyFn()}
  </Fragment>
));
