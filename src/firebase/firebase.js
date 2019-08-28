import * as firebase from 'firebase';

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database
  .ref()
  .set({
    name: 'erm',
    age: 1,
    stressLevel: 6,
    job: {
      title: 'Software developer',
      company: 'Google'
    },
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

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

// database.ref().update({
//   job: 'Manager',
//   'location/city': 'Los Angeles'
// });

// database.ref('isSingle').set(null);

// database.ref('age').set(4);
// database.ref('location/city').set('San Jose');

// database
//   .ref('attributes')
//   .set({
//     height: 3,
//     weight: 3
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(error => {
//     console.log('This failed.', error);
//   });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch(error => {
//     console.log(error);
//   });
