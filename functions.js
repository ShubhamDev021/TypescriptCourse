// Function with required parameters
function add(a, b) {
    return a + b;
}
var sum = add(2, 3);
console.log('Sum:', sum);
// Function with optional parameters
function greet(name, age) {
    if (age) {
        return "Hello ".concat(name, ", you are ").concat(age, " years old");
    }
    else {
        return "Hello ".concat(name);
    }
}
console.log(greet('Shubham'));
console.log(greet('Ayush', 22));
