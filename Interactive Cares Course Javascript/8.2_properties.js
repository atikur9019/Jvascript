let person = {
    name: 'Atikur Rhaman',
    age: 14,
    sayHello: function () {
        console.log('Hello World');
    },
};

// person.sayHello();
person.sayHello = function () {
    console.log('Hello Atikur');
};

person.add = function (a, b) {
    return a + b;
};


// person.age = 15; // add/update person.element
// delete person.age; // delete person.element

// let fullName = person.name; 

// console.log(fullName);

// console.log(person.add(5, 10));

let str  = 'add';

console.log(person[str](5, 6));
