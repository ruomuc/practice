/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  let countBit = function (num) {
    console.log('num', num)
    let count = 0
    while (num != 0) {
      if (num % 2 === 1) {
        count++
      }
      num = Math.floor(num / 2)
    }
    console.log('count', count)
    return count
  }
  return arr.sort((a, b) => {
    return countBit(a) - countBit(b) || a - b
  })
}

console.log(sortByBits([4401, 8641,377]))
