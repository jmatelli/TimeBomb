import React, { useState } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { pipe, entries, map } from 'lodash/fp';
import { Button, Modal, Input } from '../../ui';
import { faUser, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/pro-duotone-svg-icons';
import useForm from '../../utils/hooks/useForm';
import { db } from '../../utils/firebase';

const ViewContent = styled.div`
  display: flex;
  height: calc(100vh - 50px);
  justify-content: center;
  align-items: center;
`;

const ViewField = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const isFormValid = (form) => (setForm) => {
  let errors = 0;
  pipe(
    entries,
    map(([field, fieldValue]) => {
      if (!fieldValue.input) {
        setForm((form) => ({ ...form, [field]: { input: '', error: 'Thie field is empty.' } }));
        errors++;
      }
    }),
  )(form);
  return !!errors;
};

const CreateRoomModal = ({ onClose }) => {
  const { form, onChange, setForm } = useForm({
    playerName: { input: '', error: null },
    roomName: { input: '', error: null },
    nbPlayers: { input: '', error: null },
  });
  const [isRequestLoading, setRequestLoading] = useState(false);

  const handleSubmit = async () => {
    // TODO: Create an entry in firestore for /players
    try {
      if (isFormValid(form)(setForm)) return;
      setRequestLoading(true);
      await db.collection('players').add({
        playerName: form.playerName.input,
        roomName: form.roomName.input,
        nbPlayers: form.nbPlayers.input,
      });
      setRequestLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title="Create a new Game"
      actions={
        <Button onClick={handleSubmit} loading={isRequestLoading} type="success">
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
          error={form.playerName.error}
          icon={faUser}
          label="Player name:"
          name="playerName"
          onChange={onChange}
          placeholder="Ex: JohnDoe123"
          type="text"
          value={form.playerName.input}
        />
      </ViewField>
      <ViewField>
        <Input
          error={form.roomName.error}
          icon={faGamepad}
          label="Room name:"
          name="roomName"
          onChange={onChange}
          placeholder="Ex: UltraGameXYZ"
          type="text"
          value={form.roomName.input}
        />
      </ViewField>
      <ViewField>
        <Input
          error={form.nbPlayers.error}
          icon={faUsers}
          label="Number of players:"
          name="nbPlayers"
          onChange={onChange}
          placeholder="Ex: 3"
          type="number"
          value={form.nbPlayers.input}
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
