//type guard
function sum(a: number | string, b: number | string) {

    if(typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    }
}

sum(12,5) 