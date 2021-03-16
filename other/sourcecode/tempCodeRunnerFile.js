

const delegates = require('delegates');

var obj = {}
obj.request = {
  foo: (foo) => {
    return foo;
  },
  phone: 'iphone11'
}
Object.defineProperty(obj.request, 'setter', {
  set: function (value) {
    this.phone = value;
  },
  enumerable: true
})
delegates(obj, 'request').setter('setter');
obj.setter = 'iphone12';
console.log(obj.request.phone);