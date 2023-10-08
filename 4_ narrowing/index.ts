// type guard

function sum(a: number | string, b: number | string) {
    if(typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if(typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Impossivel realizar a ação");
    }
}

sum("4", "5");
sum(4,5);
sum("2", 4);

//2- chegando se valor existe

function operations(arr: number[], operation?: string | undefined) {
    if(operation) {
        if(operation === "sum") {
            const sum = arr.reduce((i,total) => i + total)
            console.log(sum);
        } else if(operation === "mutiply") {
            const mutiply = arr.reduce((i,total) => i * total)
            console.log(mutiply);
        }

    } else {
        console.log("Por favor, defina uma operação");
    }
}

operations([1,2,3]);
operations([1,2,3], "sum");
operations([1,2,3,7], "mutiply");

// 3 - instance of 

class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name:string) {
        super(name)
    }
}

const jhon = new User("Jhon");
const paul = new SuperUser("Paul");

function userGreeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}

userGreeting(jhon);
userGreeting(paul);
