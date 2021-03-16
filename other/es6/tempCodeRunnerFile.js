const b = {
  a: 1,
  c(count) {
    this.a = count
  }
}
b.c(10);
console.log(b);
const bb = Object.create(b);
console.log(bb);
console.log(bb.__proto__);
console.log(bb.a);
bb.c(100);
console.log(bb.a);
console.log(bb.__proto__);
