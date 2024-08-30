let num = [1, 2, 3, 4, 5, 6];
let person = ['Atikur', 'Rhaman', 'Atik'];

// for loop
// for (let i= 0; i < person.length; i++) {
//    console.log(person[i]);
// }

//forEach

num.forEach(function (item, index, arr) {
    console.log(item, index);
});