// Generic function
function identity(value) {
    return value;
}
console.log(identity('Shubham'));
console.log(identity(5));
// Generic with array
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(['apple', 'banana', 'grapes']));
console.log(getFirstElement([5, 2, 3, 1]));
