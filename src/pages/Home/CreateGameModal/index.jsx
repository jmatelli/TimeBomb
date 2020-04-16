import React, { useState } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { pipe, entries, map } from 'lodash/fp';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers, faGamepadAlt } from '@fortawesome/pro-duotone-svg-icons';
import useForm from '../../../utils/hooks/useForm';
import { db } from '../../../utils/firebase';
import { Button, Input, Modal } from '../../../ui';

const ViewField = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const ViewHiddenSubmitButton = styled.button`
  display: none;
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
  return !errors;
};

const ROOM_EXISTS_ERROR = 'Sorry but a room with this name already exists.';

const CreateGameModal = ({ history, onClose }) => {
  const {
    form: { playerName, roomName, nbPlayers },
    onChange,
    setForm,
  } = useForm({
    playerName: { input: '', error: null },
    roomName: { input: '', error: null },
    nbPlayers: { input: '', error: null },
  });
  const [isRequestLoading, setRequestLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Create an entry in firestore for /players
    try {
      if (!isFormValid({ playerName, roomName, nbPlayers })(setForm)) return;
      setRequestLoading(true);
      const player = await db.collection('players').add({
        playerName: playerName.input,
        roomName: roomName.input,
      });
      const roomExists = await db.collection('rooms').where('roomName', '==', roomName.input).get();
      if (roomExists.size) {
        setForm((form) => ({ ...form, roomName: { input: form.roomName.input, error: ROOM_EXISTS_ERROR } }));
        setRequestLoading(false);
        throw new Error(ROOM_EXISTS_ERROR);
      }
      const room = await db.collection('rooms').add({
        roomName: roomName.input,
        nbPlayers: +nbPlayers.input,
        full: false,
        players: [player.id],
      });
      setRequestLoading(false);
      history.push(`/rooms/${room.id}`);
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
      <form onSubmit={handleSubmit}>
        <ViewField>
          <Input
            error={playerName.error}
            icon={faUser}
            label="Player name:"
            name="playerName"
            onChange={onChange}
            placeholder="Ex: JohnDoe123"
            type="text"
            value={playerName.input}
          />
        </ViewField>
        <ViewField>
          <Input
            error={roomName.error}
            icon={faGamepadAlt}
            label="Room name:"
            name="roomName"
            onChange={onChange}
            placeholder="Ex: UltraGameXYZ"
            type="text"
            value={roomName.input}
          />
        </ViewField>
        <ViewField>
          <Input
            error={nbPlayers.error}
            icon={faUsers}
            label="Number of players:"
            name="nbPlayers"
            onChange={onChange}
            placeholder="Ex: 3"
            type="number"
            value={nbPlayers.input}
          />
        </ViewField>
        <ViewHiddenSubmitButton type="submit">Submit</ViewHiddenSubmitButton>
      </form>
    </Modal>
  );
};

CreateGameModal.propTypes = {
  onClose: t.func,
  history: t.object,
};

export default withRouter(CreateGameModal);
