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

// Generic interface
interface ApiResponse<T> {
    data: T,
    status: number,
}
const userResponse: ApiResponse<{ id: number; name: string }> = {
    data: { id: 1, name: "Shubham" },
    status: 200
}

console.log(`User ID: ${userResponse.data.id}`);
console.log(`User Name: ${userResponse.data.name}`);