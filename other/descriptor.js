const { values } = require("lodash");

function A(name) {
  this.name = name;
}

const a1 = new A('zm');
console.log(a1);
console.log(Object.getOwnPropertyDescriptor(a1, 'name'))
console.log(Object.getOwnPropertyDescriptors(a1))


const obj = {
  b: 2
}
Object.defineProperty(obj, 'a', {
  enumerable: true,
  get: () => {
    console.log(`get value:${this.name}`)
    return this.name;
  },
  set: value => {
    console.log(`set value:${value}`)
    this.name = value;
  }
})
console.log(Object.getOwnPropertyDescriptor(obj, 'a').set(100))
console.log(Object.getOwnPropertyDescriptors(obj))
console.log(obj.a)
console.log(Object.keys(obj))



const log = (target, name, descriptor) => {
  var oldValue = descriptor.value;
  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };
  return descriptor;
}

const aaa =[{a:1},{b:2}]
const set = new Set(aaa)
const unique = [...set]
console.log(aaa[0] == unique[0])