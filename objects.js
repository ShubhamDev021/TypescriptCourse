"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Using interface in objects
var user1 = {
    id: 1,
    name: 'Shubham',
    isAdmin: true,
};
var user2 = {
    id: 2,
    name: 'Ayush'
};
console.log('user 1: ', user1);
console.log('user 2: ', user2);
// Functions with objects
function printUser(user) {
    console.log("ID: ".concat(user.id, ", Name: ").concat(user.name));
}
printUser(user1);
printUser(user2);
