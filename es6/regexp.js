var regex = new RegExp('xyz', 'i');
console.log(regex)
// 等价于
var regex2 = /xyz/i;
console.log(regex2)


var reg = new RegExp(/abc/ig, 'i')
console.log(reg)

var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r2.exec(s) // null

const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj[1]; // 1999
const month = matchObj[2]; // 12
const day = matchObj[3]; // 31
console.log(matchObj)

const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31
console.log(matchObj)

const RE_TWICE = /^(?<word>[a-z]+)!(\1)!\2$/;
console.log(RE_TWICE.test('abc!abc!abc')) // true
console.log(RE_TWICE.test('abc!abc!ab')) // false


// 非严格模式
(function(){
  console.log(011 === 011);
})() // true

// 严格模式
(function(){
  'use strict';
  console.log(0o21 === 17);
})() // Uncaught SyntaxError: Octal literals are not 
