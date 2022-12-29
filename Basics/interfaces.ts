interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

// readonly только для чтения
// ? необязательный

const rect1: Rect = {
    id: "123",
    size:{
        width: 12,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '1235',
    size: {
        width: 16,
        height: 6
    }
}
rect2.color = '#512';

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// Interface inheritance

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: "1255",
    size:{
        width: 20,
        height: 20,
    },
    getArea(): number {
        return this.size.height * this.size.width;
    }
}

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void{
        this.time = date;
    }
}


interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
}