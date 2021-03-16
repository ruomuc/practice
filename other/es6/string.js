
function tag(stringArr, value1, value2) {
  // ...
  console.log(stringArr, value1, value2)
}

let a = 5;
let b = 10;

tag`Hello ${a + b} world ${a * b}`;

console.log(`Hello ${a + b} world ${a * b}`)

let a = '\u20BB7';
console.log(a)

let a = '\uD842\uDFB7';
console.log(a);

let a = '\u{20BB7}';
console.log(a); // 𠮷

for (let c of 'hello') {
  console.log(c)
}

let str = String.fromCodePoint(0x20bb7);
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

for (let c of str) {
  console.log(c); //
}

/**
 * 模板字符串
 */

let str1 = `hello world!`;
console.log('单行字符串', str1);

let str2 = `hello
world!`
console.log('多行字符串', str2);

let name = 'world'
let str3 = `hello ${name}!`
console.log('带变量的模板字符串', str3);

function sayHello(name) {
  return `hello ${name}!`;
}
let str4 = `${sayHello('world')}`
console.log('带变量的模板字符串', str4);

let age = 18;
let name = 'zm';
let weight = '65';

function userInfo(a, ...data) {
  console.log(a, data)
  console.log(a[0])
}

userInfo`用户的基本信息为:\n年龄=${age}姓名=${name}体重${weight}kg`


function rawStr(stringArr) {
  console.log(stringArr[0], stringArr)
  console.log(stringArr.raw[0], stringArr.raw)
}

rawStr`第一行\n第二行`

console.log(String.fromCharCode(0x20bb7))
console.log(String.fromCodePoint(0x20bb7))

let str = String.raw`第一行\\\n第二行`
console.log(str)
let str2 = String.raw`${str}`
console.log(str2)

let str = '𠮷a';
console.log(str.length)
console.log(str.charAt(0), str.charAt(1), str.charAt(2))
console.log(str.charCodeAt(0).toString(16), str.charCodeAt(1).toString(16), str.charCodeAt(2).toString(16))
console.log(str.codePointAt(0).toString(16), str.codePointAt(1).toString(16), str.codePointAt(2).toString(16))

let s = '𠮷a';
for (let ch of s) {
  console.log(ch.codePointAt(0).toString(16));
}

let s1 = '𠮷';
let s2 = 'a';

function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF;
}

console.log(is32Bit(s1))
console.log(is32Bit(s2))

let s = 'Hello world!';
console.log(s.startsWith('Hello')) // true
console.log(s.endsWith('world!')) // true
console.log(s.includes('Hello'))// false


console.log('hello'.repeat(2)); // 
console.log('hello'.repeat(2.5))
console.log('hello'.repeat(NaN))


const str = 'a.jsasdb.jsdaac.js'
const reg = new RegExp('/*.js/')
console.log(str.matchAll(reg))