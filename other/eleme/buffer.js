
// const buf1 = Buffer.alloc(10);
// console.log(buf1);
// console.log(Array.prototype.indexOf.call(buf1, 0))

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
// 0 1 2 3 4 5 6 7 8 9 a  b  c  d  e  f


// const buf2 = Buffer.alloc(10, 1);
// console.log('buf2=', buf2, 'length=', buf2.length)

// const buf3 = Buffer.allocUnsafe(100).fill(0)
// buf3.write('www.baidu.com');
// console.log(buf3.toJSON())
// console.log(buf3.toString())
// console.log('buf3=', buf3, 'buf3.length', buf3.length)

// const buf4 = Buffer.allocUnsafe(26).fill(0);
// buf4.write('www.baidu.com')
// console.log('buf4', buf4)
// const buf5 = Buffer.from(buf4);
// console.log('buf5', buf5)
// buf5.write('www.google.com')
// console.log('buf5', buf5)
// console.log('buf4', buf4)
// const buf6 = Buffer.concat([buf4, buf5], 30)
// console.log('buf6', buf6)

// const buf7 = Buffer.from('www.baidu.com');
// console.log(buf7)

// console.log(Buffer.allocUnsafe(10).toString())


// const buf9 = Buffer.from('zmaaaassss')
// const buf10 = Buffer.from('ruomu')
// console.log(buf9)
// console.log(buf10)
// buf9.copy(buf10,3)
// console.log(buf10)
