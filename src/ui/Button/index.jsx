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
  background: ${({ type }) => (type ? colors[type].base : colors.default.base)};
  font-size: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 10px;
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: ${({ type }) => (type ? colors[type].dark : colors.default.dark)};
  }
`;

const ViewIcon = styled.span`
  display: flex;
  height: 100%;
  padding: 11px;
  margin: 0;
  background: ${({ type }) => colors[type].light};
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
