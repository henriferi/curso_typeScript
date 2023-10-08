//1- generics
function showData(arg) {
    return "O dado \u00E9: ".concat(arg);
}
console.log(showData(5));
console.log(showData("testando generic"));
// 2 - constraint em generic
function showProductName(obj) {
    return "O nome do produto \u00E9: ".concat(obj.name);
}
var myObj = { name: "Porta", cor: "Branca" };
var otherProduct = { price: 19.9 };
console.log(showProductName(myObj));
var myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
var myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return "A chave ".concat(key, " est\u00E1 presente no objeto e tem o valor de ").concat(obj[key]);
}
var server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
