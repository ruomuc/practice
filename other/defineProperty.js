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

// for...in
function A () {
  this.a = 1
}
A.prototype.b = 2

var a = new A()

for (const iterator of a) {
  console.log(iterator)
}

var arr = [11, 22]
arr.name = 12313
for (const key in arr) {
  console.log(key)
}
for (const iterator of Object.keys(arr)) {
  console.log(iterator)
}

for (const iterator of arr) {
  console.log(iterator)
}

// forEach
let list = ['a', 'b', 'c', 'd']

list.forEach((item, idx) => {
  if (item === 'a') {
    list.splice(1, 0, 'e')
  }
  console.log(item)
})