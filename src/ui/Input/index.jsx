import React from 'react';
import t from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { TinyColor } from '@ctrl/tinycolor';
import colors from '../colors';

const ViewContent = styled.div`
  width: 500px;
  max-width: 100%;
`;

const ViewInput = styled.input`
  border: none;
  background: white;
  color: black;
  padding: 10px;
  font-size: 16px;
  width: 100%;
`;

const ViewLabel = styled.label`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ error }) => (error ? colors.danger.base : colors.white.darker)};
  border-radius: ${({ error }) => (error ? '3px 3px 0 0' : '3px')};
  overflow: hidden;
  ${({ error }) =>
    error
      ? `
    box-shadow: 0 0 6px ${colors.danger.dark}
  `
      : ''}
`;

const ViewLabelText = styled.span`
  display: block;
  padding: 10px;
  background: ${colors.white.dark};
  border-right: 1px solid ${colors.white.darker};
  width: 300px;
  text-align: right;
  font-weight: bold;
  color: ${new TinyColor('white').darken(50)};
`;

const ViewIcon = styled.span`
  display: flex;
  width: 35px;
  border-right: 1px solid ${colors.white.darker};
  border-radius: 3px 0 0 3px;
  background: ${colors.white.dark};
  color: ${new TinyColor('white').darken(50)};
  padding: 10px;
  justify-content: center;
`;

const ViewIconLabel = styled.span`
  display: flex;
  width: 35px;
  color: ${new TinyColor('white').darken(50)};
  padding: 10px;
  background: white;
  align-items: center;
`;

const ViewError = styled.div`
  background-color: ${colors.danger.base};
  padding: 5px 10px;
  color: white;
  border-radius: 0 0 3px 3px;
`;

const Input = ({ name, onChange, label, placeholder, value, icon, type, error }) => (
  <ViewContent>
    <ViewLabel error={error}>
      {label && <ViewLabelText>{label}</ViewLabelText>}
      {!label && icon && (
        <ViewIcon>
          <FontAwesomeIcon icon={icon} />
        </ViewIcon>
      )}
      <ViewInput name={name} type={type} icon={icon} placeholder={placeholder} value={value} onChange={onChange} />
      {label && icon && (
        <ViewIconLabel>
          <FontAwesomeIcon icon={icon} />
        </ViewIconLabel>
      )}
    </ViewLabel>
    {error && <ViewError>{error}</ViewError>}
  </ViewContent>
);

Input.propTypes = {
  name: t.string,
  onChange: t.func.isRequired,
  label: t.string,
  placeholder: t.string,
  value: t.string,
  icon: t.any,
  type: t.string,
  error: t.string,
};

export default Input;
