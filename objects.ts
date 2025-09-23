import { Product, User } from "./interfaces/interfaces";

// Using interface in objects
let user1: User = {
    id: 1,
    name: 'Shubham',
    isAdmin: true,
}

let user2: User = {
    id: 2,
    name: 'Ayush'
}

console.log('user 1: ', user1);
console.log('user 2: ', user2);

// Functions with objects
function printUser(user: User): void {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
}

printUser(user1);
printUser(user2);

// Cannot modify readonly properties
let product1: Product = {
    id: 1,
    name: 'iPhone 16',
    price: 52000,
}
console.log(`Id of ${product1.name} is ${product1.id}`);

// Error: Cannot assign to 'id' because it is a read-only property
// product1.id = 2;
console.log(`New Id of ${product1.name} is ${product1.id}`);