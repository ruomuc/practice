const _ = require('lodash')

const arr = _.chunk([1, 2, 3, 4], 1, [1, 2])
console.log(arr)
for (var k of arr) {
  console.log(k)
}