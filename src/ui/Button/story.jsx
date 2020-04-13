import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Button from './index';

const Margin = styled.div`
  margin: 10px;
`;

const ViewContent = styled.div`
  padding: 10px;
  margin: 10px;
`;

const ViewOutlineContent = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: white;
`;

export default {
  component: Button,
  title: 'Button',
};

export const primary = () => (
  <Fragment>
    <ViewContent>
      <Margin>
        <Button type="primary" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button type="primary" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button type="primary" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button type="primary" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button type="primary" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button type="primary" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewContent>
    <ViewOutlineContent>
      <Margin>
        <Button outline type="primary" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="primary" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="primary" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="primary" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="primary" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="primary" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewOutlineContent>
  </Fragment>
);

export const secondary = () => (
  <Fragment>
    <Margin>
      <Button type="secondary" size="small" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="secondary" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="secondary" size="large" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="secondary" size="small" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <Margin>
      <Button type="secondary" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <Margin>
      <Button type="secondary" size="large" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <ViewOutlineContent>
      <Margin>
        <Button outline type="secondary" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="secondary" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="secondary" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="secondary" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="secondary" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="secondary" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewOutlineContent>
  </Fragment>
);

export const success = () => (
  <Fragment>
    <Margin>
      <Button type="success" size="small" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="success" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="success" size="large" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="success" size="small" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <Margin>
      <Button type="success" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <Margin>
      <Button type="success" size="large" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <ViewOutlineContent>
      <Margin>
        <Button outline type="success" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="success" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="success" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="success" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="success" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="success" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewOutlineContent>
  </Fragment>
);

export const info = () => (
  <Fragment>
    <Margin>
      <Button type="info" size="small" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="info" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="info" size="large" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="info" size="small" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <Margin>
      <Button type="info" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <Margin>
      <Button type="info" size="large" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <ViewOutlineContent>
      <Margin>
        <Button outline type="info" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="info" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="info" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="info" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="info" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="info" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewOutlineContent>
  </Fragment>
);

export const warning = () => (
  <Fragment>
    <Margin>
      <Button type="warning" size="small" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="warning" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="warning" size="large" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="warning" size="small" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <Margin>
      <Button type="warning" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <Margin>
      <Button type="warning" size="large" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <ViewOutlineContent>
      <Margin>
        <Button outline type="warning" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="warning" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="warning" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="warning" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="warning" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="warning" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewOutlineContent>
  </Fragment>
);

export const danger = () => (
  <Fragment>
    <Margin>
      <Button type="danger" size="small" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="danger" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="danger" size="large" onClick={action('clicked')}>
        hello button
      </Button>
    </Margin>
    <Margin>
      <Button type="danger" size="small" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <Margin>
      <Button type="danger" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <Margin>
      <Button type="danger" size="large" loading onClick={action('clicked')}>
        Hello Button
      </Button>
    </Margin>
    <ViewOutlineContent>
      <Margin>
        <Button outline type="danger" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="danger" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="danger" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="danger" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="danger" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button outline type="danger" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewOutlineContent>
  </Fragment>
);
