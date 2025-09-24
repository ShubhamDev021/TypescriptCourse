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
// Generic class
var Box = /** @class */ (function () {
    function Box(contents) {
        this.contents = contents;
    }
    Box.prototype.getContents = function () {
        return this.contents;
    };
    return Box;
}());
var numberBox = new Box(100);
console.log(numberBox.getContents());
var stringBox = new Box("Hello");
console.log(stringBox.getContents());
