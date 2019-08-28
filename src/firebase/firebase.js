import * as firebase from 'firebase';

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
  name: 'erm',
  age: 1,
  isSingle: true,
  location: {
    city: 'San Francisco',
    country: 'United States'
  }
});

// database.ref().set('This is my data.');

database.ref('age').set(4);
database.ref('location/city').set('San Jose');
database.ref('attributes').set({
  height: 2,
  weight: 2
});

console.log('database ok');
