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
var userResponse = {
    data: { id: 1, name: "Shubham" },
    status: 200
};
console.log("User ID: ".concat(userResponse.data.id));
console.log("User Name: ".concat(userResponse.data.name));
