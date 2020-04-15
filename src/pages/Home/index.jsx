import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../ui';
import CreateGameModal from './CreateGameModal';
import JoinGameModal from './JoinRoomModal';

const ViewContent = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  justify-content: center;
  align-items: center;

  & > button {
    margin: 10px 0;
  }
`;

const Home = () => {
  const [isCreateModalOpen, showCreateModal] = useState(false);
  const [isJoinModalOpen, showJoinModal] = useState(false);

  return (
    <ViewContent>
      <Button type="primary" onClick={() => showCreateModal(true)}>
        Create Game
      </Button>
      <Button onClick={() => showJoinModal(true)}>Join Game</Button>
      {isCreateModalOpen && <CreateGameModal onClose={() => showCreateModal(false)} />}
      {isJoinModalOpen && <JoinGameModal onClose={() => showJoinModal(false)} />}
    </ViewContent>
  );
};

export default Home;
