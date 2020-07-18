// // function A() {
// //   var a = 11;
// //   var b = 22;
// //   console.log(this.a) // undefined
// //   console.log(this.b) // 2
// // }

// // var obj1 = {
// //   a: 123,
// //   b: 234,
// //   fn: A
// // }

// // var obj2 = {
// //   a: 666,
// //   b: 999,
// //   obj: obj1
// // }
// // this.a=1;
// // this.b=2;
// // var fn1 = obj1.fn
// // var fn2 = obj2.obj.fn
// // console.log(fn1)
// // console.log(fn2)
// // fn1()
// // fn2()

// // function A() {
// //   this.a = 1;
// // }

// // var obj = new A();
// // console.log(obj.a)

// // function A(a) {
// //   this.a = a
// // }

// // var obj1 = { a: 123 }
// // A.call(undefined, 1);
// // // console.log(this)
// // console.log(global.setTimeout(() => {
// //   console.log(global.a)
// // }, 1))

// // var foo = A.bind(obj1)
// // foo(1)
// // console.log(obj1)
// // var newFoo = new foo(12)
// // console.log(obj1.a)
// // console.log(newFoo.a)


// var obj = {
//   a: function () {
//     console.log(this)
//   },
//   b: () => console.log(this)
// }

// var obj1 = {
//   a: {
//     fna: function () {
//       console.log(this)
//     }
//   },
//   b: {
//     fnb: () => console.log(this)
//   },
//   c: function fnc() {
//     return () => console.log(this)
//   },
//   d: () => {
//     return () => console.log(this)
//   },
//   e: function a() {
//     var f1 = function () { console.log(this) }
//     f1()
//   },
//   f: function ff() {
//     console.log(this)
//     function fff() {
//       console.log(this)
//       var ffff = () => console.log(this);
//       ffff()
//     }
//     fff()
//   }
// }
// obj1.a.fna()
// obj1.b.fnb()
// obj1.c()()
// obj1.d()()
// obj1.e()()
// obj1.f()

// var obj3 = {
//   a: {
//     fn: function f1() {
//       console.log(this)
//     }
//   }
// }

// obj3.a.fn()

var obj4 = {
  a: () => {
    console.log(this)
  },
  b: function () {
    var f1 = () => console.log(this)
    f1()
  }
}
obj4.a()
obj4.b()
var obj5 = {}
obj4.a.call(obj5)
obj4.b.call(obj5)