import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';
import { TinyColor } from '@ctrl/tinycolor';

const BACKGROUND_BY_TYPE = {
  default: '#595959',
  primary: '#0a3d62',
  secondary: '#595959',
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
  background: ${({ type }) => (type ? BACKGROUND_BY_TYPE[type] : BACKGROUND_BY_TYPE.default)};
  font-size: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 10px;
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: ${({ type }) =>
      type
        ? new TinyColor(BACKGROUND_BY_TYPE[type]).darken().toHexString()
        : new TinyColor(BACKGROUND_BY_TYPE.default).darken(20).toHexString()};
  }
`;

const ViewIcon = styled.span`
  display: flex;
  height: 100%;
  padding: 11px;
  margin: 0;
  background: ${({ type }) => new TinyColor(BACKGROUND_BY_TYPE[type]).lighten().toHexString()};
`;

const ViewChildren = styled.span`
  display: flex;
  padding: ${({ loading }) => (loading ? `10px 20px 10px 15px` : `10px 20px`)};
`;

const Button = ({ type, loading, children }) => (
  <ViewButton type={type}>
    {loading && (
      <ViewIcon type={type}>
        <FontAwesomeIcon icon={faSpinnerThird} spin swapOpacity />
      </ViewIcon>
    )}
    <ViewChildren loading={loading}>{children}</ViewChildren>
  </ViewButton>
);

Button.propTypes = {
  type: t.string,
  loading: t.bool,
  children: t.node,
};

export default Button;
