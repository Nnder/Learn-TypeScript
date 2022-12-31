"use strict";
const isFetching = true;
const int = 12;
const str = "";
const numberArray = [1, 1, 2, 3, 5, 8];
const numberArray2 = [1, 1, 2, 3, 5, 8];
const words = ["hello", "typescript"];
// Tuple
const contact = ['One', 1235];
// Any
let variable = 42;
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
const login = "admin";
const id1 = 123;
const id2 = "string";
