import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Button from './index';

const Margin = styled.div`
  margin: 10px;
`;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ViewContent = styled.div`
  width: 50%;
  padding: 10px;
  margin: 10px;
`;

const ViewOutlineContent = styled.div`
  width: 50%;
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
  <ViewContainer>
    <ViewContent>
      <h4>Basic primary button</h4>
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
      <h4>Flat basic primary button</h4>
      <Margin>
        <Button flat type="primary" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="primary" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="primary" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <h4>Basic loading primary button</h4>
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
      <h4>Flat basic loading primary button</h4>
      <Margin>
        <Button flat type="primary" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="primary" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="primary" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewContent>
    <ViewOutlineContent>
      <h4>Outlined primary buttons</h4>
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
      <h4>Flat outlined primary buttons</h4>
      <Margin>
        <Button outline flat type="primary" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline flat type="primary" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button outline flat type="primary" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <h4>Outlined loading primary button</h4>
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
      <h4>Flat outlined loading primary button</h4>
      <Margin>
        <Button flat outline type="primary" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="primary" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="primary" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewOutlineContent>
  </ViewContainer>
);

export const secondary = () => (
  <ViewContainer>
    <ViewContent>
      <h4>Basic secondary button</h4>
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
      <h4>Basic flat secondary button</h4>
      <Margin>
        <Button flat type="secondary" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="secondary" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="secondary" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <h4>Basic loading secondary button</h4>
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
      <h4>Basic flat loading secondary button</h4>
      <Margin>
        <Button flat type="secondary" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="secondary" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="secondary" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewContent>
    <ViewOutlineContent>
      <h4>Outlined secondary button</h4>
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
      <h4>Outlined flat secondary button</h4>
      <Margin>
        <Button flat outline type="secondary" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="secondary" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="secondary" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <h4>Oulined loading secondary button</h4>
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
      <h4>Oulined flat loading secondary button</h4>
      <Margin>
        <Button flat outline type="secondary" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="secondary" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="secondary" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewOutlineContent>
  </ViewContainer>
);

export const success = () => (
  <ViewContainer>
    <ViewContent>
      <h4>Basic success button</h4>
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
      <h4>Basic flat success button</h4>
      <Margin>
        <Button flat type="success" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="success" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="success" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <h4>Basic loading success button</h4>
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
      <h4>Basic flat loading success button</h4>
      <Margin>
        <Button flat type="success" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="success" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="success" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewContent>
    <ViewOutlineContent>
      <h4>Outlined success button</h4>
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
      <h4>Outlined flat success button</h4>
      <Margin>
        <Button flat outline type="success" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="success" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="success" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <h4>Outlined loading success button</h4>
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
      <h4>Outlined flat loading success button</h4>
      <Margin>
        <Button flat outline type="success" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="success" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="success" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewOutlineContent>
  </ViewContainer>
);

export const info = () => (
  <ViewContainer>
    <ViewContent>
      <h4>Basic info button</h4>
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
      <h4>Basic flat info button</h4>
      <Margin>
        <Button flat type="info" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="info" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="info" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <h4>Basic loading info button</h4>
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
      <h4>Basic flat loading info button</h4>
      <Margin>
        <Button flat type="info" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="info" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="info" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewContent>
    <ViewOutlineContent>
      <h4>Outlined info button</h4>
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
      <h4>Outlined flat info button</h4>
      <Margin>
        <Button flat outline type="info" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="info" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="info" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <h4>Outlined loading info button</h4>
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
      <h4>Outlined flat loading info button</h4>
      <Margin>
        <Button flat outline type="info" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="info" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="info" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewOutlineContent>
  </ViewContainer>
);

export const warning = () => (
  <ViewContainer>
    <ViewContent>
      <h4>Basic warning button</h4>
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
      <h4>Basic flat warning button</h4>
      <Margin>
        <Button flat type="warning" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="warning" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="warning" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <h4>Basic loading warning button</h4>
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
      <h4>Basic flat loading warning button</h4>
      <Margin>
        <Button flat type="warning" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="warning" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="warning" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewContent>
    <ViewOutlineContent>
      <h4>Outlined warning button</h4>
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
      <h4>Outlined flat warning button</h4>
      <Margin>
        <Button flat outline type="warning" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="warning" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="warning" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <h4>Outlined loading warning button</h4>
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
      <h4>Outlined flat loading warning button</h4>
      <Margin>
        <Button flat outline type="warning" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="warning" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="warning" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewOutlineContent>
  </ViewContainer>
);

export const danger = () => (
  <ViewContainer>
    <ViewContent>
      <h4>Basic danger button</h4>
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
      <h4>Basic flat danger button</h4>
      <Margin>
        <Button flat type="danger" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="danger" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="danger" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <h4>Basic loading danger button</h4>
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
      <h4>Basic flat loading danger button</h4>
      <Margin>
        <Button flat type="danger" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="danger" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat type="danger" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewContent>
    <ViewOutlineContent>
      <h4>Outlined danger button</h4>
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
      <h4>Outlined flat danger button</h4>
      <Margin>
        <Button flat outline type="danger" size="small" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="danger" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="danger" size="large" onClick={action('clicked')}>
          hello button
        </Button>
      </Margin>
      <h4>Outlined loading danger button</h4>
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
      <h4>Outlined flat loading danger button</h4>
      <Margin>
        <Button flat outline type="danger" size="small" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="danger" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
      <Margin>
        <Button flat outline type="danger" size="large" loading onClick={action('clicked')}>
          Hello Button
        </Button>
      </Margin>
    </ViewOutlineContent>
  </ViewContainer>
);
