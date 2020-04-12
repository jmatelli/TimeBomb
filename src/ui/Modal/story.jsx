import React from 'react';
import Modal from './index';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

export default {
  component: Modal,
  title: 'Modal',
};

export const base = () => (
  <Modal
    actions={
      <Button type="success" onClick={action('onClick')}>
        Submit
      </Button>
    }
    title="Modal title"
    onClose={action('onClose')}
  >
    test
  </Modal>
);
