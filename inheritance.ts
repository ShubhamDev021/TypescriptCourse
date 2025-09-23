class Animal {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} is barking`);
  }
}

const dog = new Dog("Tommy");
dog.move(); // Tommy is moving
dog.bark(); // Tommy is barking