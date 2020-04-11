import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

const BACKGROUND_BY_TYPE = {
  primary: '#0a3d62',
  success: '#78e08f',
  info: '#82ccdd',
  warning: '#fa983a',
  danger: '#eb2f06',
};

const ViewButton = styled.button`
  border: none;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  background: ${({ type }) => BACKGROUND_BY_TYPE[type]};
  font-size: 16px;
  padding: 10px 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
`;

const Button = ({ type, children }) => <ViewButton type={type}>{children}</ViewButton>;

Button.propTypes = {
  type: t.string,
  children: t.node,
};

export default Button;
