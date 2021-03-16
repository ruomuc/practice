console.log('=========数组解构赋值=======')
let arrA = [1, 2, 3]
let [a, b, c] = arrA
console.log(a, b, c)

let arrB = [1, [2, 3], 4]
let [a1, [b1, c1], d1] = arrB
console.log(a1, b1, c1, d1)

let [a, b, [c]] = [0, 1, [3]]
console.log(a, b, c) // 0 1

let [a, b, c] = [0, 1];
console.log(a, b, c) // 0 1 undefined

let [a, ...b] = [0, 1, 2, 3]
console.log(a, b)

function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(first, second, third, fourth, fifth, sixth)

let [a = 1] = [];
console.log(a); // 1

let [b = 1] = [null];
console.log(b); // null

let [c = 1] = [undefined];
console.log(c); // 1

let [x = y, y = 1] = [undefined, 1];
console.log(x, y);

let [x = 1, y = x] = [10];
console.log(x, y);

function f() {
  return 10
}

let [x = f()] = [undefined];
console.log(x);

function f() {
  return 10;
}

let [x = f()] = [];
console.log(x);

console.log('=========对象解构赋值=======')
let objB = { o1: 11, o2: 22, o3: 33 }
let { o1, o2, o3 } = objB
console.log(o1, o2, o3)

let { a, b, c } = { a: 1, b: 2, c: 3 }
console.log(a, b, c); // 1 2 3

let { c, b, a } = { a: 1, b: 2, c: 3 }
console.log(a, b, c); // 1 2 3

let { a, c, b } = { a: 1 }
console.log(a, b, c); // 1 undefined undefined

let { a: obj1, b: obj2, c: obj3 } = { a: 1, b: 2, c: 3 }
console.log(obj1, obj2, obj3); // 1 2 3

let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};
let { p: [x, { y: obj2 }] } = obj;
console.log(x, obj2);

let { a, b = 12 } = { a: 1 }
console.log(a, b)

let { a: obj1, b: obj2 = 12 } = { a: 11, b: undefined }
console.log(obj1, obj2)

let { a: obj1, b: obj2 = obj1 } = { a: 12 }
console.log(obj1, obj2)

const [a, b, c, d, e] = 'hello';
console.log(a, b, c, d, e)

const { 0: a, 1: b, 2: c, 3: d, 4: e, length: len } = 'hello';
console.log(a, b, c, d, e, len)

console.log('=========数值和布尔值=======')

let { __proto__: s } = Object(123);
console.log(s === Number.prototype); // true
console.log(s);

let { __proto__: s } = Object(true);
console.log(s === Boolean.prototype) // true
console.log(s);

console.log('=========函数参数=======')

function a([x, y = 1], { z, c }) {
  console.log(x, y, z, c)
}
a([1, 2], { z: 3, c: 4 })