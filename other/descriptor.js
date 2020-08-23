const { values } = require('lodash')

function A (name) {
  this.name = name
}

const a1 = new A('zm')
console.log(a1)
console.log(Object.getOwnPropertyDescriptor(a1, 'name'))
console.log(Object.getOwnPropertyDescriptors(a1))

const obj = {
  b: 2
}
Object.defineProperty(obj, 'a', {
  enumerable: true,
  get: () => {
    console.log(`get value:${this.name}`)
    return this.name
  },
  set: value => {
    console.log(`set value:${value}`)
    this.name = value
  }
})
console.log(Object.getOwnPropertyDescriptor(obj, 'a').set(100))
console.log(Object.getOwnPropertyDescriptors(obj))
console.log(obj.a)
console.log(Object.keys(obj))

const log = (target, name, descriptor) => {
  var oldValue = descriptor.value
  descriptor.value = function () {
    console.log(`Calling ${name} with`, arguments)
    return oldValue.apply(this, arguments)
  }
  return descriptor
}

const aaa = [{ a: 1 }, { b: 2 }]
const set = new Set(aaa)
const unique = [...set]
console.log(aaa[0] == unique[0])

const obj = {}
Object.defineProperty(obj, 'prop', {
  value: 42,
  writable: true
})
console.log(obj) // {prop: 42}
obj.prop = 43 // {prop: 43}

// 外部变量
let value = 'a'
Object.defineProperty(this, 'a', {
  get () {
    let result = value
    if (value === 'a') {
      value = 'b'
    } else if (value === 'b') {
      value = 'c'
    }
    return result
  }
})
console.log(this.a + this.a + this.a)

// 内部变量
Object.defineProperty(this, 'a', {
  get () {
    this._v = this._v || 'a'
    if (this._v === 'a') {
      this._v = 'b'
      return 'a'
    } else if (this._v === 'b') {
      this._v = 'c'
      return 'b'
    } else {
      return this._v
    }
  }
})

console.log(a + a + a)

a = 1
console.log(global)