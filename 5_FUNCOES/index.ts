// 1 - void

function withoutReturn(): void {
    console.log("Esta função não tem retorno!");
}

withoutReturn()


// 2 callback como argumento
function greeting(name: string):string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName:string) {
    console.log("Preparando a função!")

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, "Henrique")


//3 - generic function

function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1,2,3]))
console.log(firstElement(["a","b","c"]))
//console.log(firstElement("Teste"))    Não funciona pq a função espera um array

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Matheus"}, {age: 30, job: "Programmer"})

console.log(newObject)


function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest

    if(+a > +b) {
        biggest = a 
    } else {
        biggest = b 
    }
    
    return biggest
}

console.log(biggestNumber(5,3))
console.log(biggestNumber("5", "3"))


function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArrays<number | string>([1,2,3], ["teste", "testando"]))


// 6- parametros opcionais
function modernGreeting(name: string, greet?: string) {

    if(greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }

    return `Olá ${name}, tudo bem?`;
}

console.log(modernGreeting("Henrique"));
console.log(modernGreeting("Henrique", "Sheik"));