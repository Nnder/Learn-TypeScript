class Typesript {
    version: string
    constructor(version: string) {
        this.version = version;
    }

    info(name: string){
        return `${name} typescript version ${this.version}`
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
    readonly numberOfWheel: number = 4

    constructor(readonly model: string) {

    }
}

// модификаторы

class Animal {
    protected voice: string = ''
    public color: string = 'black'
    private go(){
        console.log('go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string){
        this.voice = voice;
    }
}

const cat = new Cat();


// абстрактные классы

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render() {
        console.log('Render')
    }

    info(): string {
        return "this is info";
    }
}