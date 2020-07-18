//  let变量只在块中生效
//  var a = 10;
//  {
//      let a = 1;
//      console.log(a)
//  }
//  console.log(a)

//  console.log("================================")

//  console.log(foo);
//  var foo = 10;
//   console.log(foo2)
//  let foo2 = 11;

//  console.log("================================")
//  var tmp = 123;

//  if (true) {
//      tmp = 'abc';
//      let a;
//  }
//  console.log("================================")

// function func1() {
//     var a = 10;
//     var a = 100;
//     console.log(a)
// }

//  function func2() {
//      let a1 = 10;
//      var a1 = 1;
//  }

//  function func3() {
//      let a2 = 10;
//      let a2 = 1;
//  }

// func1();
// func2();
// func3();

// function func(arg) {
//     let arg;
// }
// func()

// function func(arg) {
//     {
//         let arg;
//     }
// }
// func()

// function func(arg) {
//     console.log(arg);
//     var arg = 100;
//     console.log(arg);
// }
// func(10)
// let a = 1
// function func() {
//     console.log(a);
//     {
//         let a = 5
//         console.log(a)
//         {
//             let a = 10;
//             console.log(a);
//         }
//         console.log(a);
//     }
//     console.log(a);
// }

// func()


// var tmp = new Date();

// function f() {
//   console.log(tmp);
//   if (true) {
//     var tmp = 'hello world';
//   }
// }

// f();

// var s = 'hello';

// for (var i = 0; i < s.length; i++) {
//     console.log(s[i]);
// }

// console.log(i); // 5

// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 0)
// }
// console.log(i)

// for (var i = 0; i < 10; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i)
//         }, 0)
//     })(i)
// }

// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i); // 输出10个10
//     }, 0)
// }

// const a = 1;
// console.log(a)
// a = 2

// const a = 10;
// function func() {
//     console.log(a);
//     {
//         // console.log(a);
//         const a = 5
//         {
//             const a = 1;
//             console.log(a)
//         }
//         console.log(a);

//     }
//     console.log(a);
// }

// func()

// const a = [];
// a.push('Hello'); // 可执行
// console.log(a, a.length)
// a.length = 0;    // 可执行
// console.log(a, a.length)
// a = ['Dave'];    // 报错


// function f1() {

//     var n = 999;

//     function f2() {
//         return n
//     }
//     return f2()
// }

// let b = f1();
// console.log(b);
// console.log(n)

// let obj = {
//     name: 'zm'
// }

// let obj2 = {
//     name: obj.name
// };

// obj2.name = 'ruomu';
// console.log(obj);
// let arr = [];
// while(true)
//   arr.push(1);

const v8 = require('v8')

console.log(process.memoryUsage())
console.log(v8.getHeapStatistics())
console.log(v8.getHeapSpaceStatistics())
