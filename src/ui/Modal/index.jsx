import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import colors from '../colors';

const ViewBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ViewContent = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  z-index: 2;
  width: 750px;
  max-width: 100%;
`;

const ViewHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary.lighter};
  padding: 10px 10px 10px 20px;
`;

const ViewTitle = styled.h2`
  font-size: 18px;
  color: white;
  margin: 0;
`;

const ViewBody = styled.div`
  padding: 20px;
  background-color: white;
`;

const ViewFooter = styled.footer`
  background-color: ${colors.white.dark};
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Modal = ({ title, onClose, actions, children }) => (
  <ViewBackdrop>
    <ViewContent>
      <ViewHeader>
        <ViewTitle>{title}</ViewTitle>
        {onClose && (
          <Button size="small" onClick={onClose} type="primary">
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        )}
      </ViewHeader>
      <ViewBody>{children}</ViewBody>
      {actions && <ViewFooter>{actions}</ViewFooter>}
    </ViewContent>
  </ViewBackdrop>
);

Modal.propTypes = {
  title: t.string.isRequired,
  onClose: t.func,
  actions: t.node,
  children: t.node,
};

export default Modal;
