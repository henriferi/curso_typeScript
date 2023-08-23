/* function soma(a:number, b:number) {
    console.log(a + b);
}

soma(4,9); */
function showCoords(obj) {
    console.log("x:".concat(obj.x, " y: ").concat(obj.y, " z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
