// readonly только для чтения
// ? необязательный
var rect1 = {
    id: "123",
    size: {
        width: 12,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '1235',
    size: {
        width: 16,
        height: 6
    }
};
rect2.color = '#512';
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: "1255",
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        return this.size.height * this.size.width;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
