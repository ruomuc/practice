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