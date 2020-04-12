import React from 'react';
import Input from './index';
import { action } from '@storybook/addon-actions';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default {
  component: Input,
  title: 'Input',
};

export const text = () => <Input type="text" placeholder="First name" onChange={action('onChange')} />;
export const icon = () => <Input type="text" icon={faUser} placeholder="First name" onChange={action('onChange')} />;

