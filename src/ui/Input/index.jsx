import React from 'react';
import t from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { TinyColor } from '@ctrl/tinycolor';

const borderColor = new TinyColor('white').darken(30);

const ViewContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const ViewInput = styled.input`
  border: 1px solid ${borderColor};
  background: white;
  color: black;
  border-radius: ${({ icon }) => (icon ? `0 3px 3px 0` : `3px`)};
  padding: 10px;
  font-size: 16px;
`;

const ViewIcon = styled.span`
  display: flex;
  width: 35px;
  border: 1px solid ${borderColor};
  border-right: none;
  border-radius: 3px 0 0 3px;
  background: ${new TinyColor('white').darken(10)};
  color: ${new TinyColor('white').darken(50)};
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Input = ({ onChange, placeholder, value, icon, type }) => (
  <ViewContent>
    {icon && (
      <ViewIcon>
        <FontAwesomeIcon icon={icon} />
      </ViewIcon>
    )}
    <ViewInput type={type} icon={icon} placeholder={placeholder} value={value} onChange={onChange} />
  </ViewContent>
);

Input.propTypes = {
  onChange: t.func.isRequired,
  placeholder: t.string,
  value: t.string,
  icon: t.any,
  type: t.string,
};

export default Input;
