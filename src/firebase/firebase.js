import * as firebase from 'firebase';

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

firebase
  .database()
  .ref()
  .set({
    name: 'erm'
  });
