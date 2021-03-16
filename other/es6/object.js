const book = {}
Object.defineProperties(book, {
  _a: {
    a: 1
  },
  test: {},
  _year: {
    value: 2004,
    writable: true,
    enumerable: true
  }, edition: {
    value: 1,
    writable: true
  }, year: {    //定义访问器属性
    get: function () {
      return this._year;
    },
    set: function (newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
      }
    }
  }
})
console.log(book)


function shape() {
  this.x = 0;
  this.y = 0;
}

shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
}

const s = new shape();
console.log(s.__proto__);

var a = {};
console.log(a);
console.log(a.__proto__, Object.prototype);
console.log(a.__proto__ === Object.prototype);

const b = {
  a: 1,
  c(count) {
    this.a = count
  }
}
b.c(10);
console.log(b);
const bb = Object.create(b);
console.log(bb);
console.log(bb.__proto__);
console.log(bb.a);
bb.c(100);
console.log(bb.a);
console.log(bb.__proto__);
