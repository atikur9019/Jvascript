// Has parameter and Has return
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
// has parameter and no return
function add2(a, b) {
    console.log(a + b);
}

add2(10, 10);
// no parameter and has return
function primeNumber() {
     return 13;
}

let value = primeNumber();
console.log(value);
// no parameter and no return
function sayHello() {
    console.log("Hello world!");
}

sayHello();

// function with default parameter