let persons = {
    name: 'Atikur Rhaman',
    age: 14,
    location: {
        city: 'Dhaka',
        zip: 1216,
        country: 'Bangladesh',
    },
    sayHello: function () {
        console.log('Hello Atikur');
    },
};

// let str = 'city';

// // console.log(persons.location.city);;
// console.log(persons.location[str]);


persons.sayHello(); // Meteor