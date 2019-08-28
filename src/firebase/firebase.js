import * as firebase from 'firebase';

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database
  .ref()
  .set({
    name: 'erm',
    age: 1,
    isSingle: true,
    location: {
      city: 'San Francisco',
      country: 'United States'
    }
  })
  .then(() => {
    console.log('Data is saved');
  })
  .catch(error => {
    console.log('This failed.', error);
  });

// database.ref('age').set(4);
// database.ref('location/city').set('San Jose');

database
  .ref('attributes')
  .set({
    height: 3,
    weight: 3
  })
  .then(() => {
    console.log('Data is saved');
  })
  .catch(error => {
    console.log('This failed.', error);
  });
