"use strict";
// readonly только для чтения
// ? необязательный
const rect1 = {
    id: "123",
    size: {
        width: 12,
        height: 30
    },
    color: '#ccc'
};
const rect2 = {
    id: '1235',
    size: {
        width: 16,
        height: 6
    }
};
rect2.color = '#512';
const rect3 = {};
const rect4 = {};
const rect5 = {
    id: "1255",
    size: {
        width: 20,
        height: 20,
    },
    getArea() {
        return this.size.height * this.size.width;
    }
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
};
