import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';
import colors from '../colors';

const ViewButton = styled.button`
  border: ${({ outline, type }) => (outline ? `1px solid ${colors[type].base}` : 'none')};
  border-radius: 3px;
  background-clip: padding-box;
  cursor: pointer;
  color: white;
  color: ${({ outline, type }) => (outline ? colors[type].base : 'white')};
  font-weight: bold;
  background-color: ${({ outline, type }) => (outline ? 'white' : colors[type].base)};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  padding: 0;
  position: relative;
  overflow: hidden;
  ${({ margin }) => margin && `margin: ${margin};`}
  &:hover {
    background-color: ${({ outline, type }) => (outline ? colors[type].extraLight : colors[type].dark)};
  }
  transition: 0.5s;
`;

const ViewIcon = styled.span`
  display: flex;
  height: 100%;
  padding: ${({ size }) => (size === 'large' ? `11px` : '8px')};
  margin: 0;
  background-color: ${({ outline, type }) => (outline ? colors[type].extraLight : colors[type].light)};
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  color: ${({ outline, type }) => (outline ? colors[type].base : 'white')};
`;

const ViewChildren = styled.span`
  display: flex;
  padding: ${({ size }) => (size === 'large' ? `10px 20px` : `7px 15px`)};
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
`;

const Button = ({
  children,
  loading = false,
  margin,
  onClick,
  outline = false,
  size = 'normal',
  title,
  type = 'default',
}) => (
  <ViewButton title={title} margin={margin} type={type} onClick={onClick} outline={outline}>
    {loading && (
      <ViewIcon outline={outline} type={type} size={size}>
        <FontAwesomeIcon icon={faSpinnerThird} spin />
      </ViewIcon>
    )}
    <ViewChildren size={size}>{children}</ViewChildren>
  </ViewButton>
);

Button.propTypes = {
  children: t.node,
  loading: t.bool,
  margin: t.string,
  onClick: t.func.isRequired,
  outline: t.bool,
  size: t.oneOf(['small', 'normal', 'large']),
  title: t.string,
  type: t.string,
};

export default Button;
