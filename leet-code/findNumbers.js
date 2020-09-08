/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0
  for (const val of nums) {
    if (String(val).length % 2 === 0) {
      count++
    }
  }
  return count
}

var findNumbers = function (nums) {
  let count = 0
  for (let val of nums) {
    let c = 0
    while (val > 0) {
      val = parseInt(val / 10)
      c++
    }
    if (c % 2 == 0) {
      count++
    }
  }
  return count
}
