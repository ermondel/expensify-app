//
// Object destructuring
//

// const person = {
//     name: 'Archimedes',
//     age: 64,
//     location: {
//         city: 'Syracuse',
//         temp: 92
//     }
// }

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = [ '1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147' ];
// const [ , city, state = 'New York' ] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$4.70', '$5.95'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
