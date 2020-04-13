import React from 'react';
import Input from './index';
import { action } from '@storybook/addon-actions';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

export default {
  component: Input,
  title: 'Input',
};

const ViewContent = styled.div`
  padding: 10px;
`;

export const input = () => (
  <ViewContent>
    <Input type="text" placeholder="First name" onChange={action('onChange')} />
  </ViewContent>
);

export const withLabel = () => (
  <ViewContent>
    <Input type="text" label="First name:" placeholder="First name" onChange={action('onChange')} />
  </ViewContent>
);

export const withIcon = () => (
  <ViewContent>
    <Input type="text" icon={faUser} placeholder="First name" onChange={action('onChange')} />
  </ViewContent>
);

export const withLabelAndIcon = () => (
  <ViewContent>
    <Input type="text" icon={faUser} label="First name:" placeholder="First name" onChange={action('onChange')} />
  </ViewContent>
);

export const withError = () => (
  <ViewContent>
    <Input
      type="text"
      icon={faUser}
      placeholder="First name"
      onChange={action('onChange')}
      error="This field is not valid."
    />
  </ViewContent>
);
