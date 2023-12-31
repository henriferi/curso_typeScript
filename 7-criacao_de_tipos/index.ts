//1- generics

function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5));
console.log(showData("testando generic"));

// 2 - constraint em generic

function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Porta", cor: "Branca"}
const otherProduct = {price: 19.9}

console.log(showProductName(myObj));
//console.log(showProductName(otherProduct));


//3 - generics com interface

interface MyObject<T,U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar:Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"};
const myPen: Pen = {name: "Caneta BIC", wheels: false, engine: false, color: "Azul"};

console.log(myCar);
console.log(myPen);

// 4 - type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
} 

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'));


// 5 - keyof type operator
type Character = {name: string, age: number, hasDriveLicense: boolean} 

type C = keyof Character 

function showCharName(obj: Character, name: C):string {
    return `${obj[name]}`
}

const myChar: Character = {
    name: "Matheus",
    age: 30,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))

// 6 - typeof type operator
const userName: string = "Henrique";

const userName2: typeof userName = "João";

type x = typeof userName;

const userName4: x = "Joaquim";

//7 - indexed access type

type Truck = {km: number, kg: number, description: string}

type Km = Truck['km'];

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para poucas carga"
}

function showKm(km: Km) {
    console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km);

// 8 - conditional types

interface A {}

interface B extends A {}

type myType = B extends A ? number : string

const someVar:myType = 5 