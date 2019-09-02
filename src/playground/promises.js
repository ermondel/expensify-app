const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      file: 'readme',
      time: '1567002450'
    });
    // reject('Error message');
  }, 1500);
});

console.log('before');

promise
  .then(data => {
    console.log('1', data);
    return 'some data';
  })
  .then(data => {
    console.log('2', data);
  })
  .catch(error => {
    console.log(error);
  });

console.log('after');
