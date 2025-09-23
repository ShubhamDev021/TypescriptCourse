class Person {
    // Shorthand constructor
    constructor(public name: string, private age: number) {}

    greet() : string {
        return `Hi ${this.name}, i am ${this.age} years old`;
    }
}

let person1 = new Person('Shubham', 15);
console.log(person1.greet());

// Accessind public and private property
console.log(`Name: ${person1.name}`);
// console.log(`Age: ${person1.age}`);     // Error: Property 'age' is private and only accessible within class 'Person'.