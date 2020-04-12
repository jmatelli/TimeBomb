import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';
import colors from '../colors';

const ViewButton = styled.button`
  border: none;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  background: ${({ type }) => (type ? colors[type].base : colors.default.base)};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  padding: 0;
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: ${({ type }) => (type ? colors[type].dark : colors.default.dark)};
  }
`;

const ViewIcon = styled.span`
  display: flex;
  height: 100%;
  padding: ${({ size }) => (size === 'large' ? `11px` : '8px')};
  margin: 0;
  background: ${({ type }) => colors[type].light};
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
`;

const ViewChildren = styled.span`
  display: flex;
  padding: ${({ size }) => (size === 'large' ? `10px 20px` : `7px 15px`)};
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
`;

const Button = ({ type = 'primary', size = 'normal', loading = false, children }) => (
  <ViewButton type={type}>
    {loading && (
      <ViewIcon type={type} size={size}>
        <FontAwesomeIcon icon={faSpinnerThird} spin />
      </ViewIcon>
    )}
    <ViewChildren loading={loading} size={size}>
      {children}
    </ViewChildren>
  </ViewButton>
);

Button.propTypes = {
  type: t.string,
  size: t.oneOf(['small', 'normal', 'large']),
  loading: t.bool,
  children: t.node,
};

export default Button;
