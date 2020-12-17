/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  const strN = N.toString()
    .split('')
    .map(v => +v)
  let i = 1
  while (i < strN.length && strN[i - 1] <= strN[i]) {
    i++
  }
  console.log(i)
  if (i < strN.length) {
    while (i > 0 && strN[i - 1] > strN[i]) {
      strN[i - 1]--
      i--
    }
    console.log('@222', i, strN)
    for (i += 1; i < strN.length; ++i) {
      strN[i] = 9
    }
  }
  return parseInt(strN.join(''))
}
console.log(monotoneIncreasingDigits(668841))
