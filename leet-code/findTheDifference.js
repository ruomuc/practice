/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const dict = new Array(26).fill(0)
  for (let i = 0, len = s.length; i < len; i++) {
    dict[s[i].charCodeAt() - 97]++
  }
  for (let i = 0, len = t.length; i < len; i++) {
    dict[t[i].charCodeAt() - 97]--
  }
  for (let i = 0; i < 26; i++) {
    if (dict[i] < 0) {
      return String.fromCharCode(97 + i)
    }
  }
}
console.log(findTheDifference('abc', 'abce'))
