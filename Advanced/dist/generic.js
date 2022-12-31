"use strict";
const cars = ['Ford', 'Audi'];
const cars2 = ['Ford', 'Audi'];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
});
promise.then(data => {
    console.log(data);
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'A' }, { age: 26 });
const merged2 = mergeObjects({ model: 'A' }, { modelAge: 26 });
// const merged3 = mergeObjects('aaa', "bbbb")
console.log(merged.age);
function withCount(value) {
    return {
        value,
        count: `In this object ${value.length}`,
    };
}
console.log(withCount('Hello typescript'));
console.log(withCount({ length: 20 }));
function getObjectValue(obj, key) {
    return obj[key];
}
console.log(getObjectValue({ gg: 20 }, 'gg'));
//console.log(getObjectValue({gg:20}, 'dds'))
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i != item);
    }
    getItems() {
        return this._items;
    }
}
const strings = new Collection(['I', 'Am', 'Array']);
strings.add('!');
strings.remove("Am");
console.log(strings);
const numbers = new Collection([1, 2, 3, 4]);
numbers.add(2);
const objects = new Collection([{ a: 1 }, { b: 2 }]);
function createAndValidate(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
        car.year = year;
    }
    return car;
}
const cars5 = ['ford', 'Audi'];
//cars.shift();
const ford = {
    model: 'Ford',
    year: 2020,
};
//ford.model = 'Ferrari'
//# sourceMappingURL=generic.js.map