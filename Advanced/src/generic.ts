const cars: string[] = ['Ford', 'Audi'];
const cars2: Array<string> = ['Ford', 'Audi'];

const promise = new Promise<string>(resolve => {
    setTimeout(()=>{
        resolve('Promise resolved')
    },2000)
})

promise.then(data=>{
    console.log(data)
})

function mergeObjects<T extends object, R extends object>(a:T, b:R): T & R{
    return Object.assign({}, a,b);
}

const merged = mergeObjects({name: 'A'}, {age: 26})
const merged2 = mergeObjects({model: 'A'}, {modelAge: 26})
// const merged3 = mergeObjects('aaa', "bbbb")
console.log(merged.age);
// console.log(merged3);


interface ILength{
    length: number
}

function withCount<T extends ILength>(value:T): {value: T, count:string}{
    return{
        value,
        count: `In this object ${value.length}`,
    }
}

console.log(withCount('Hello typescript'));
console.log(withCount({length: 20}));

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R){
    return obj[key];
}

console.log(getObjectValue({gg:20}, 'gg'))
//console.log(getObjectValue({gg:20}, 'dds'))


class Collection<T>{
    constructor(private _items: T[] = []) {

    }
    add(item: T){
        this._items.push(item)
    }
    remove(item: T){
        this._items = this._items.filter(i=> i!=item)
    }
    getItems(): T[]{
        return this._items;
    }
}

const strings = new Collection<string>(['I', 'Am', 'Array']);
strings.add('!');
strings.remove("Am");
console.log(strings);

const numbers = new Collection([1,2,3,4]);
numbers.add(2);

const objects = new Collection([{a:1}, {b:2}]);



interface Car {
    model: string,
    year: number
}

function createAndValidate(model:string, year:number):Car {
    const car: Partial<Car> = {};

    if(model.length > 3){
        car.model = model;
        car.year = year;
    }

    return car as Car
}


const cars5: Readonly<Array<string>> = ['ford', 'Audi'];
//cars.shift();

const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020,
}

//ford.model = 'Ferrari'