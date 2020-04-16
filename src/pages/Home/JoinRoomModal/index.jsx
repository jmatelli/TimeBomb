import React, { useState } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { pipe, entries, map } from 'lodash/fp';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGamepadAlt } from '@fortawesome/pro-duotone-svg-icons';

import { Button, Input, Modal } from '../../../ui';
import { db } from '../../../utils/firebase';
import useForm from '../../../utils/hooks/useForm';

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

const ROOM_DOESNT_EXISTS_ERROR = 'There are no game existing with this name.';

const JoinGameModal = ({ history, onClose }) => {
  const {
    form: { playerName, roomName },
    onChange,
    setForm,
  } = useForm({
    playerName: { input: '', error: null },
    roomName: { input: '', error: null },
  });
  const [isRequestLoading, setRequestLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!isFormValid({ playerName, roomName })(setForm)) return;
      setRequestLoading(true);
      const { docs: rooms, size } = await db.collection('rooms').where('roomName', '==', roomName.input).get();
      if (!size) {
        setRequestLoading(false);
        setForm((form) => ({ ...form, roomName: { input: form.roomName.input, error: ROOM_DOESNT_EXISTS_ERROR } }));
        throw new Error(ROOM_DOESNT_EXISTS_ERROR);
      }
      const room = rooms[0];
      const roomData = room.data();
      const player = await db.collection('players').add({
        playerName: playerName.input,
        roomName: roomName.input,
      });
      await db
        .collection('rooms')
        .doc(room.id)
        .set({
          ...roomData,
          players: [...roomData.players, player.id],
        });
      setRequestLoading(false);
      history.push(`/rooms/${room.id}`);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Modal
      title="Join a game"
      actions={
        <Button type="success" loading={isRequestLoading} onClick={handleSubmit}>
          Submit
        </Button>
      }
      onClose={onClose}
    >
      <form onSubmit={handleSubmit}>
        <ViewField>
          <Input
            error={playerName.error}
            icon={faUser}
            label="Player name"
            name="playerName"
            onChange={onChange}
            value={playerName.input}
          />
        </ViewField>
        <ViewField>
          <Input
            error={roomName.error}
            icon={faGamepadAlt}
            label="Room name"
            name="roomName"
            onChange={onChange}
            value={roomName.input}
          />
        </ViewField>
        <ViewHiddenSubmitButton type="submit">Submit</ViewHiddenSubmitButton>
      </form>
    </Modal>
  );
};

JoinGameModal.propTypes = {
  history: t.object,
  onClose: t.func,
};

export default withRouter(JoinGameModal);
