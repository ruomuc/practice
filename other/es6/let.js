'use strict'
for (let i = 0; i < 6; i++) {
  console.log(i)
}

console.log('==========1')

for (let i = 0; i < 6; i++) {
  let i = 'a'
  console.log(i)
}
console.log('==========2')

for (let i = 0; i < 6; i++) {
  let i = 'a'
  {
    // console.log(i) // 报错，暂时性死区
    let i = 'b'
    console.log(i)
  }
}

console.log('============3')

var tmp = new Date();

function f() {
  console.log(tmp);
  var tmp = 'hello world';
}

f(); // undefined

console.log('============4')

// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  // f();
}());

console.log('============5')

let a = { a: 1 }
const b = a;
console.log('b1', b)
a['a'] = 10
console.log('b2', b)  // const

// 冻结对象
let c = { c: 1 }
Object.freeze(c)
// c['c'] = 10 // 严格模式会报错

console.log('============6')

/**
 * es5 声明变量 var fucntion
 * es6 声明变量 var function let const import class
 */

console.log('============7')

for (let jj = 0; jj < 4; jj++) {
  setTimeout(() => {
    console.log(jj)
  }, 1000)
}

for (var i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log(i); // 每隔1s，输出一个6，一共输出6次
  }, 1000)
}
console.log(i); //立刻输出一个6


for (var i = 0; i < 6; i++) {

  (function (i) {
    setTimeout(() => {
      console.log(i); // 一秒后，瞬间输出6个6
    }, 1000)
  })(i)
}
console.log(i); // 立刻输出一个 6

console.log('==========变量提升')
'use strict'
function varUp() {
  'use strict'
  console.log(a);
  var a = 1;
  console.log(a);
}
varUp()

var a = 10;
function fun() {
  console.log(a); // 10
  var a = 1;
  console.log(a); // 1
}
fun();

{
  a = 11;
  let a = 1;
  console.log(a)
}

{
  a = 1;
  let a = 22;
  console.log(a)
}
{
  let a = 1;
  a = 22;
  console.log(a)
}
console.log(a)

a = 233;
console.log(a)
var a = 222;
{
  let a = 1;
  console.log(a)
}
console.log(global.a)

function func(){
  a = 233;
  var a = 123;
  console.log(a)
}
func()
console.log(a)

function f() { console.log('I am outside!'); }
(function () {
  if (false) {
    function f() { console.log('I am inside!'); }
  }

  f();
}());

var b = {
  a:1,
  b:2
};
const a = b;

var b = {
  a:1,
  b:2
};
const a = b;
Object.freeze(a)
Object.freeze(b)
console.log(a);
console.log(b);
b['a'] = 120;
console.log(a);
console.log(b);

