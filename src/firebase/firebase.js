import * as firebase from 'firebase';

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().on(
  'value',
  snapshot => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  },
  error => {
    console.log('Error with data fetching.', error);
  }
);

setTimeout(() => {
  database.ref('name').set('Mike');
}, 2500);

// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   error => {
//     console.log('Error with data fetching.', error);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(1);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(3);
// }, 10500);

// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(error => {
//     console.log('Error fetching data', error);
//   });

// database
//   .ref()
//   .set({
//     name: 'erm',
//     age: 1,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'San Francisco',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(error => {
//     console.log('This failed.', error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

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
