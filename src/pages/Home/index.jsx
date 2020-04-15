import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../ui';
import CreateGameModal from './CreateGameModal';

const ViewContent = styled.div`
  display: flex;
  height: calc(100vh - 50px);
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [isModalOpen, showModal] = useState(false);

  return (
    <ViewContent>
      <Button type="primary" onClick={() => showModal(true)}>
        Create Game
      </Button>
      {isModalOpen && <CreateGameModal onClose={() => showModal(false)} />}
    </ViewContent>
  );
};

export default Home;
