export interface User {
    id: number,
    name: string,
    isAdmin?: boolean,  //optional property
}

export interface Product {
    readonly id: number,
    name: string,
    price: number,
}