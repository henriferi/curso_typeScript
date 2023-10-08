class User {
    name!: string;
    age!: number;
}

const matheus = new User()

console.log(matheus);

matheus.name = "Matheus";
matheus.age = 24;

console.log(matheus);


//2 - constructor

class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const joao = new NewUser("João", 22)

console.log(joao);

//const pedro = new NewUser(12);


// 3 - campos readonly


class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name;
    }
}

const fusca = new Car ("Fusca");

console.log(fusca);

// const uno = new Car ("Uno", 6);

fusca.name = "Fusquinha turbinado";

// fusca.wheels = 5;


// 4 - herança e super

class Machine {
    name

    constructor(name: string) {
        this.name = name;
    }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
    guns

    constructor(name:string, guns: number) {
        super(name);
        this.guns = guns;
    }
}

  
const destroyer = new KillerMachine("Destroyer", 4);

console.log(trator);
console.log(destroyer);


// 5 - métodos


class Dwarf {
    name

    constructor(name: string) {
        this.name = name;
    }

    greeting() {
        console.log("Hey Stranger!");
    }
}

const jimmy = new Dwarf("Jimmy");

console.log(jimmy.name);

jimmy.greeting(); 


// 6 - this 

class Truck {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model;
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`)
    }
}


const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);

volvo.showDetails();
scania.showDetails();


// 7 - getters 


class Person {
    name
    surname


    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + " " + this.surname;
    }
}

const matheusBattisti = new Person("Matheus", "Battisti");
console.log(matheusBattisti.name);

console.log(matheusBattisti.fullName);


// 8 - Setters

class Coords {

    x!: number;
    y!: number;

    set fillX(x: number) {
        if(x === 0) {
            return
        }

        this.x = x 

        console.log("X inserido com sucesso");
    }

    set fillY(y: number) {
        if(y === 0) {
            return
        }

        this.y = y 

        console.log("Y inserido com sucesso");
    }

    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`
    }

}

const myCoords = new Coords();

myCoords.fillX = 10;
myCoords.fillY = 5;

console.log(myCoords);
console.log(myCoords.getCoords);


// 9 - implements

interface showTitle {
    itemTitle(): string;
}

class blogPost implements showTitle {
    
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O título do post é: ${this.title}`
    }

}

const myPost = new blogPost("Hello World");

console.log(myPost);


// 10 - generic class
class Item<T, U> {
    first 
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é : ${this.first}`
    }
    get showSecond() {
        return `O Second é : ${this.second}`
    }
}

const newItem = new Item("Caixa", "Surpresa");

console.log(newItem.showFirst);
console.log(newItem.showSecond);

console.log(newItem);


