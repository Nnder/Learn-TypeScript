"use strict";
class Typesript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `${name} typescript version ${this.version}`;
    }
}
// class Car {
//     readonly model: string
//     readonly numberOfWheel: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }
class Car {
    constructor(model) {
        this.model = model;
        this.numberOfWheel = 4;
    }
}
// модификаторы
class Animal {
    constructor() {
        this.voice = '';
        this.color = 'black';
    }
    go() {
        console.log('go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
// абстрактные классы
class Component {
}
class AppComponent extends Component {
    render() {
        console.log('Render');
    }
    info() {
        return "this is info";
    }
}
