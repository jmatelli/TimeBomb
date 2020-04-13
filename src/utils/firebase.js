import * as firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig.json';

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
