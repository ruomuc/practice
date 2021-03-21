// 类风格

function Foo (who) {
  this.me = who
}
Foo.prototype.identify = function () {
  return 'I am ' + this.me
}

Foo.prototype.speak = function () {
  console.log('Foo name is , ' + this.identify() + '.')
}

function Bar (who) {
  // ”继承“
  Foo.call(this, who)
}
Bar.prototype = Object.create(Foo.prototype)

Bar.prototype.speak = function () {
  console.log('Hello, ' + this.identify() + '.')
}

var b1 = new Bar('b1')
var b2 = new Bar('b2')
var f1 = new Foo('f1')

b1.speak()
b2.speak()
f1.speak()

Foo.prototype.identify = function () {
  return 'Foo modified identify  ' + this.me
}
b1.speak()

console.log(
  '=================================================================='
)

// 委托风格
Foo = {
  init: function (who) {
    this.me = who
  },
  identify: function () {
    return 'I am ' + this.me
  }
}

Bar = Object.create(Foo)
Bar.speak = function () {
  console.log('Hello, ' + this.identify() + '.')
}

var b1 = Object.create(Bar)
b1.init('b1')
var b2 = Object.create(Bar)
b2.init('b2')

b1.speak()
b2.speak()

