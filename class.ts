class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() : string {
        return `Hi ${this.name}, i am ${this.age} years old`;
    }
}

let person1 = new Person('Shubham', 15);
console.log(person1.greet());