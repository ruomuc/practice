const Example = (function () {
  var _private = Symbol('private');

  class Example {
    constructor() {
      this[_private] = 'private';
    }
    getName() {
      return this[_private];
    }
  }

  return Example;
})();

var ex = new Example();

console.log(ex.getName()); // private
console.log(ex.name); // undefined


console.log(0.3 - (0.1 + 0.2) < Number.EPSILON)

console.log(0.1 + 0.2 == 0.3)
console.log(0.1 + 0.2 === 0.3)
console.log(Object.is(0.1, 0.2))

console.log(require.cache)