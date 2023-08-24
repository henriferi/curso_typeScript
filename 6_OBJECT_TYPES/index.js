//1 Tipo de objeto para função com interface
function showProductDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e seu pre\u00E7o \u00E9 R$").concat(product.price));
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
var shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 129, isAvailable: true });
function showUserDetails(user) {
    console.log("O usu\u00E1rio tem o e-mail: ".concat(user.email));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(user.role));
    }
    else {
        console.log("Usuário padrão");
    }
}
var u1 = { email: "henrique@gmail.com" };
var u2 = { email: "joao@email.com", role: "Admin" };
showUserDetails(u1);
showUserDetails(u2);
var fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
fusca.brand = "Gol";
//fusca.wheels = 5;   Não posso alterar pois é somente leitura.
console.log(fusca);
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
var henrique = {
    name: "Henrique",
    age: 20
};
console.log(henrique);
var henrique2 = {
    name: "Henrique2",
    age: 20,
    superpowers: ["não voar", "voar",]
};
console.log(henrique2);
var arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
//7 readOnlyArray
var myArray = ["Maçã", "Laranja", "Banana"];
//myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach(function (item) {
    console.log("Fruta: " + item);
});
myArray = myArray.map(function (item) {
    return "Fruta: ".concat(item);
});
console.log(myArray);
