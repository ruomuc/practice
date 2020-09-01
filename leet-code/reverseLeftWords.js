/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  let str = ''
  for (let i = n; i < s.length; i = (i + 1) % s.length) {
    console.log(i,s[i],s.length)
    if (str.length == s.length) {
      return str
    }
    str += s[i]
  }
  return str
}

console.log(reverseLeftWords('asdfgqwe', 2))
