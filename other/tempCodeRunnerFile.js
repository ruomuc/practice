
// 委托风格
Foo = {
  init: function (who) {
    this.me = who
  },
  identify: function () {
    return 'I am ' + this.me
  },
  speak: function () {
    console.log('Foo name is ' + this.identify() + '.')
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

var f1 = Object.create(Foo)
f1.init('f1')
var f2 = Object.create(Foo)
f2.init('f2')

f1.speak()
f2.speak()
