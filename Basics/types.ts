const isFetching: boolean = true;
const int: number = 12;
const str: string = "";

const numberArray: number[] = [1,1,2,3,5,8];
const numberArray2: Array<number> = [1,1,2,3,5,8];

const words: string[] = ["hello", "typescript"];

// Tuple

const contact: [string, number] = ['One', 1235];

// Any

let variable: any = 42;
variable = "String";

// function

function sayName(name: string): void {
    console.log(name);
}

sayName("Name");

// Never для бесконечных функций и функций котороые выдают ошибку
function throwError(message: string): never{
    throw new Error(message);
}

function  infinite(): never{
    while (true){

    }
}

// Type создание alias для типов

type Login = string
const login: Login = "admin";

type ID = string | number;
const id1: ID = 123;
const id2: ID = "string";

type SomeType = string | null | undefined;

