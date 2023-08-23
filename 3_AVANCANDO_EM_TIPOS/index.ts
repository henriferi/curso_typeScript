/* function soma(a:number, b:number) {
    console.log(a + b); 
}

soma(4,9); */


/* function advanceGreeting(firstName: string, lastName?: string) {

    if(lastName !== undefined) {
        return`Olá, ${firstName} ${lastName}, tudo bem?`;
    }

    return`Olá, ${firstName}, tudo bem?`;

}


console.log(advanceGreeting("Henrique", "Fernandes"));
console.log(advanceGreeting("Henrique")); */

//INTERFACE

interface Point {
    x: number;
    y: number;
    z: number;
}

function showCoords(obj: Point) {
    console.log(`x:${obj.x} y: ${obj.y} z: ${obj.z}`)

}

const coordObj:Point = {
    x:10,
    y:15,
    z:20
} 

showCoords(coordObj);


