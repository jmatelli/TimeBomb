import React from 'react';
import styled from 'styled-components';

const ViewHeader = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Header = () => (
  <ViewHeader>
    <h1>TimeBomb</h1>
  </ViewHeader>
);

export default Header;
