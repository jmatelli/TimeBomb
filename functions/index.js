const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.createRoom = functions.firestore.document('players/{playerId}').onCreate((snap) => {
  const { roomName, nbPlayers } = snap.data();
  db.collection('rooms').add({
    roomName,
    nbPlayers,
    players: [snap.id],
  });
});
