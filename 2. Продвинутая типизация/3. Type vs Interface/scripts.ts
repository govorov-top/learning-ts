/** Type vs Interface **/

// Aliases - type
// 1. primitives, unions, intersections
// type Window - can't be created

// Interfaces - interface
// 1. When we want to expand interface in future
// 2. Class with implements

interface IProduct {
    price : number,
    isNew : boolean,
    isSale : boolean,
    title : string
}

interface IVehicle {
    wheels: number,
    year: number,
    brand: string
}

interface ICar extends Product, Vehicle{
    type: string,
    model: string
}


type Product = {
    price : number,
    isNew : boolean,
    isSale : boolean,
    title : string
}

type Vehicle = {
    wheels: number,
    year: number,
    brand: string
}

type Car = {
    type: string,
    model: string
} & Product & Vehicle;

export {}