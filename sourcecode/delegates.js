const delegates = require('delegates');

var obj = {}
obj.request = {
  foo: (foo) => {
    return foo;
  },
  phone: 'iphone11',
  get getter1() {
    return 'hello';
  }
}
// delegates(obj, 'request').method('foo')
// console.log(obj.foo('aaa'));
// console.log(obj.request.foo('bbb'));

Object.defineProperty(obj.request, 'getter', {
  get: function () {
    return this.phone;
  },
  enumerable: true
})
// delegates(obj, 'request').getter('getter');
// delegates(obj, 'request').getter('getter1');
// console.log(obj.getter);
// console.log(obj.getter1);


Object.defineProperty(obj.request, 'setter', {
  set: function (value) {
    this.phone = value;
  },
  enumerable: true
})
// delegates(obj, 'request').setter('setter');
// obj.setter = 'iphone12';
// console.log(obj.request.phone);


// delegates.auto(obj, obj.request, 'request');