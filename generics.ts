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

// Generic class
class Box<T> {
  constructor(public contents: T) {}

  getContents(): T {
    return this.contents;
  }
}

const numberBox = new Box<number>(100);
console.log(numberBox.getContents());

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContents());