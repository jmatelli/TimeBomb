import React, { Fragment, useState, useEffect } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { db } from '../../utils/firebase';

const ViewTitle = styled.h2`
  font-size: 18px;
`;

const RoomContent = ({ room: { roomName, players, nbPlayers } }) => (
  <ViewTitle>
    Room {roomName}: {players.length}/{nbPlayers} players
  </ViewTitle>
);

RoomContent.propTypes = {
  room: t.shape({
    nbPlayers: t.number,
    full: t.bool,
    players: t.array,
    roomName: t.string,
  }),
};

const Room = ({
  match: {
    params: { roomId },
  },
}) => {
  const [room, setRoom] = useState({});
  const [isRoomLoaded, setRoomLoaded] = useState(false);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const room = await db.collection('rooms').doc(roomId).get();
        setRoom(room.data());
        setRoomLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRoom();
  });

  return <Fragment>{isRoomLoaded && <RoomContent room={room} />}</Fragment>;
};

Room.propTypes = {
  match: t.object,
};

export default withRouter(Room);
