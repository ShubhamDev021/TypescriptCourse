var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hi ".concat(this.name, ", i am ").concat(this.age, " years old");
    };
    return Person;
}());
var person1 = new Person('Shubham', 15);
console.log(person1.greet());
// Accessind public and private property
console.log("Name: ".concat(person1.name));
// console.log(`Age: ${person1.age}`);     // Error: Property 'age' is private and only accessible within class 'Person'.
