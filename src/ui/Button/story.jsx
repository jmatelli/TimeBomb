import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';

export default {
  component: Button,
  title: 'Button',
};

export const primary = () => (
  <Button type="primary" onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const success = () => (
  <Button type="success" onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const info = () => (
  <Button type="info" onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const warning = () => (
  <Button type="warning" onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const danger = () => (
  <Button type="danger" onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const loading = () => (
  <Button type="primary" loading onClick={action('clicked')}>
    Hello Button
  </Button>
);
