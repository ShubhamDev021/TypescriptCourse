// Function with required parameters
function add(a: number, b: number) : number {
    return a + b;
}
let sum: number = add(2, 3);
console.log('Sum:', sum);

// Function with optional parameters
function greet(name: string, age?: number) : string {
    if (age) {
        return `Hello ${name}, you are ${age} years old`;
    } else {
        return `Hello ${name}`;
    }
}
console.log(greet('Shubham'));
console.log(greet('Ayush', 22));

// Function with default parameters
function multiply(a: number, b: number = 2) : number {
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 3));