// 写法一
function m1({ x = 0, y = 0 } = {}) {
  return [x, y];
}

// 写法二
function m2({ x, y } = { x: 0, y: 0 }) {
  return [x, y];
}

console.log(m1())
console.log(m2())

function a(x) {
  x = x || 1; // x的默认值为1
  console.log(x);
}
a(); // 1

function a(x = 1) {
  console.log(x);
}
a(); // 1

'use strict'
function a(x, x, y) {
  console.log(x, x, y)
}
a(1, 2, 3)

function a(x, x, y = 1) {
  console.log(x, x, y)
}
a(1, 2, 3)

function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}
foo()

let x = 99;
function foo(p = x + 1) {
  console.log(p);
}
foo() // 100
x++;
foo() // 101


function a(...values) {
  console.log(arguments)
  console.log(values)
}
console.log(a.bind().name)

a(1, 2, 3, 4, 5)
console.log(a.length)

console.log((new Function().bind()).name)

function /* foo comment */ foo () {}

console.log(foo.toString())