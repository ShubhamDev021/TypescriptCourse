// Generic function
function identity<T>(value: T) : T {
    return value;
}

console.log(identity<string>('Shubham'));
console.log(identity<number>(5));