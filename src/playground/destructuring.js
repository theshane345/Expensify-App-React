//
//object destructuring
//


// const person = {
//     name:'Shane',
//     age: 67,
//     location: {
//         city: 'kilkenny',
//         temp: 92
//     }
// };

// const{name:firstname = 'Anonymous', age} = person;
// console.log(`${firstname} is ${age}`)

// const{city, temp:temperature} = person.location;
// if(city && temperature){
//     console.log(`its ${temperature} degrees in ${city}`)
// }


// const book = {
//     title:'Ego is the enemy',
//     author:'Ryan Holliday',
//     publisher:{
//         name:'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//
//Array Desturctuing
//

// const address = ['1299 S Juniper Street', 'Kilkenny', 'Leinster','R95 P3XD'];
// const [street,city,province,eircode] = address;
// console.log(`You are in Co. ${city}, ${province}`);

const item = ['Coffee(Hot)','€2.50', '€3.00','€3.75']
const [type,small,med,large] = item;

console.log(`A medium ${type} costs ${med}`)

