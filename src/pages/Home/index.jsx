import React, { useState } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { Button, Modal, Input } from '../../ui';
import { faUser, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/pro-duotone-svg-icons';
import useInput from '../../utils/hooks/useInput';

const ViewContent = styled.div`
  display: flex;
  height: calc(100vh - 50px);
  justify-content: center;
  align-items: center;
`;

const ViewField = styled.div`
  margin: 10px 0;
`;

const CreateRoomModal = ({ onClose }) => {
  const [playerName, errorPlayerName, onChangePlayerName] = useInput('')('name');
  const [roomName, errorRoomName, onChangeRoomName] = useInput('')('name');
  const [nbPlayers, errorNbPlayers, onChangeNbPlayers] = useInput('')('number');

  const handleSubmit = () => {
    // TODO: Create an entry in firestore for /players
  };

  return (
    <Modal
      title="Create a new Game"
      actions={
        <Button onClick={handleSubmit} type="success">
          Create
        </Button>
      }
      onClose={onClose}
    >
      <div>
        To create a game you need to give us your player name, choose a name for the room and indicate how many people
        are going to play.
      </div>
      <ViewField>
        <Input
          icon={faUser}
          onChange={onChangePlayerName}
          type="text"
          value={playerName}
          placeholder="Ex: JohnDoe123"
          label="Player name:"
          error={errorPlayerName}
        />
      </ViewField>
      <ViewField>
        <Input
          icon={faGamepad}
          onChange={onChangeRoomName}
          type="text"
          value={roomName}
          placeholder="Ex: UltraGameXYZ"
          label="Room name:"
          error={errorRoomName}
        />
      </ViewField>
      <ViewField>
        <Input
          icon={faUsers}
          onChange={onChangeNbPlayers}
          type="number"
          value={nbPlayers}
          placeholder="Ex: 3"
          label="Number of players:"
          error={errorNbPlayers}
        />
      </ViewField>
    </Modal>
  );
};

CreateRoomModal.propTypes = {
  onClose: t.func,
};

const Home = () => {
  const [isModalOpen, showModal] = useState(false);

  return (
    <ViewContent>
      <Button type="primary" onClick={() => showModal(true)}>
        Create Game
      </Button>
      {isModalOpen && <CreateRoomModal onClose={() => showModal(false)} />}
    </ViewContent>
  );
};

export default Home;
