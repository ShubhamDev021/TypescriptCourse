import { User } from "./interfaces/user";

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