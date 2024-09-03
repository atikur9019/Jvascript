let person = {
    name: 'Atikur',
    sayHello: function() {
        console.log('Hello ' + this.name);
    },
};

person.sayHello();

// method -> Object
// function -> global, window