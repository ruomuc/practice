/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length === 0) {
    return ''
  }
  let tempStr = ''
  strs = strs.sort()
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] === strs[strs.length - 1][i]) {
      tempStr += strs[0][i]
    } else {
      return tempStr
    }
  }
  return tempStr
}

var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length === 0) {
    return ''
  }
  let str = strs[0]
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] !== strs[i][j]) {
        if (j === 0) {
          return ''
        } else {
          str = str.slice(0, j)
        }
      }
    }
  }
  return str
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
