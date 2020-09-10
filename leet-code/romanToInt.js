/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let result = 0
  let prev = map[s[0]]
  for (let i = 1; i < s.length; i++) {
    let currv = map[s[i]]
    if (prev < currv) {
      result -= prev
    } else {
      result += prev
    }
    prev = currv
  }
  result += prev
  return result
}
