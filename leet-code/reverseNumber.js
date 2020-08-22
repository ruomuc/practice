/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const max = Math.pow(2, 31) - 1
  const min = -Math.pow(2, 31)
  let rn = 0
  while (x) {
    rn = rn * 10 + (x % 10)
    x = parseInt(x / 10)
  }
  return rn > max || rn < min ? 0 : rn
}

console.log(reverse(-123))
