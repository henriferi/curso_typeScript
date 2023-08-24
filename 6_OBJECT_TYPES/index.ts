//1 Tipo de objeto para função com interface

interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)

    if(product.isAvailable) {
        console.log("O produto está disponível")
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt);
showProductDetails({name: "Tenis", price: 129, isAvailable: true});


// 2 - propriedade opcional em interface


interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`)

    if(user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }else {
        console.log("Usuário padrão");
    }
}

const u1: User = {email: "henrique@gmail.com"}

const u2:User = {email: "joao@email.com", role: "Admin"}

showUserDetails(u1);
showUserDetails(u2);


// 3 - readonly

interface Car {
    brand: string,
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca);

fusca.brand = "Gol";
//fusca.wheels = 5;   Não posso alterar pois é somente leitura.

console.log(fusca);

//4 - index signature 

interface CoordObject {
    [index: string]: number;
}

let coords: CoordObject = {
    x: 10 
}

coords.y = 15

console.log(coords)


//5 - extending interfaces

interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const henrique:Human = {
    name: "Henrique",
    age: 20
}

console.log(henrique);

const henrique2:SuperHuman = {
    name: "Henrique2",
    age: 20,
    superpowers: ["não voar", "voar",]
}

console.log(henrique2)

// 6 - intersection types

interface Character { 
    name:string
}

interface Gun {
    type: string
    caliber: Number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold);



//7 readOnlyArray

let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

//myArray[3] = "Mamão"

console.log(myArray);

myArray.forEach((item) => {
    console.log("Fruta: " + item);
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray);



