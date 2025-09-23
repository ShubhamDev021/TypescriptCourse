import { ID } from "./types/types";

let myName: string = "Shubham";
let myAge: number = 25;
let isDeveloper: boolean = true;
let score: number[] = [81, 86, 75];
let hobbies: string[] = ['coding', 'gaming'];
let biodata: [string, number] = [myName, myAge];
console.log('myName:', myName);
console.log('myAge:', myAge);
console.log('isDeveloper:', isDeveloper);
console.log('score:', score);
console.log('hobbies:', hobbies);
console.log('biodata:', biodata);

let randomType: any = "hello";
console.log('randomType:', randomType);

randomType = 123;
console.log('randomType:', randomType);

randomType = true;
console.log('randomType:', randomType);

// Assigning multiple types to a variable or say Union types
let value: ID;
value = "Hello";
console.log(`value: ${value}`);
value = 24;
console.log(`value: ${value}`);

// any type
let data: any = "Hello";
data = 123;
console.log(`data: ${data}`);
data = true;
console.log(`data: ${data}`);