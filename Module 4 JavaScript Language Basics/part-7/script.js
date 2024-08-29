// falsy and truthy values and equality operators

// falsy values: undefined, 0, '', null, NaN
// truthy values: Not falsy values

var height;

height = 20;

if (height || height === 0) {
   console.log('variable is defined');
} else {
    console.log('Variable has NOt bead defined.');
}

// equality operators

if (height === 20) {
    console.log('The == operator does type coercion.');
}