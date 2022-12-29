var isFetching = true;
var int = 12;
var str = "";
var numberArray = [1, 1, 2, 3, 5, 8];
var numberArray2 = [1, 1, 2, 3, 5, 8];
var words = ["hello", "typescript"];
// Tuple
var contact = ['One', 1235];
// Any
var variable = 42;
variable = "String";
// function
function sayName(name) {
    console.log(name);
}
sayName("Name");
// Never для бесконечных функций и функций котороые выдают ошибку
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = "admin";
var id1 = 123;
var id2 = "string";
