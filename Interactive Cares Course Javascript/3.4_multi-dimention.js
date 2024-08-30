let arr = [
    ['Atikur', 'Saver', 14], 
    ['John', 'New York', 99],
    ['Jane', 'Dhaka', 45, ['reading', 'movie']],
];

// console.log(arr[2][3][1].length);


for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {
        
        console.log(arr[i][j]);
    }
};