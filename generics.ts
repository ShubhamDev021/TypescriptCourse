// Generic function
function identity<T>(value: T) : T {
    return value;
}

console.log(identity<string>('Shubham'));
console.log(identity<number>(5));

// Generic with array
function getFirstElement<T>(arr: T[]) : T {
    return arr[0];
}

console.log(getFirstElement<string>(['apple', 'banana', 'grapes']));
console.log(getFirstElement<number>([5, 2, 3, 1]));