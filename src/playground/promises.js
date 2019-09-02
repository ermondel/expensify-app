const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      file: 'readme',
      time: '1567002450'
    });
  }, 1500);
});

console.log('before');

promise
  .then(data => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is my other promise');
      }, 1500);
    });
  })
  .then(data => {
    console.log('2', data);
  })
  .catch(error => {
    console.log(error);
  });

console.log('after');
