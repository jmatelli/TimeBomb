import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/pro-duotone-svg-icons';
import Button from '../Button';

const ViewHeader = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ViewNavigation = styled.nav`
  display: flex;
  padding: 10px;
`;

const ViewTitle = styled.h1`
  font-size: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`;

const Header = ({ location: { pathname } }) => (
  <ViewHeader>
    <ViewNavigation>
      {pathname !== '/' && (
        <Button type="primary" to="/" flat outline size="small">
          <FontAwesomeIcon icon={faHome} />
        </Button>
      )}
    </ViewNavigation>
    <ViewTitle>Time Bomb</ViewTitle>
  </ViewHeader>
);

Header.propTypes = {
  location: t.object,
};

export default withRouter(Header);
