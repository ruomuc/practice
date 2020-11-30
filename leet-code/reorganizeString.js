/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  const letterDict = new Array(26).fill(0)
  const len = S.length
  for (let i = 0; i < len; i++) {
    letterDict[S[i].charCodeAt() - 97]++
  }
  const max = Math.max(...letterDict)
  if (max > Math.floor((len + 1) / 2)) {
    return ''
  }
  let even = 0
  let odd = 1
  const halfLength = Math.floor(len / 2)
  const res = []
  for (let i = 0; i <= 25; i++) {
    const c = String.fromCharCode(97 + i)
    while (letterDict[i] > 0 && letterDict[i] <= halfLength && odd < len) {
      res[odd] = c
      letterDict[i]--
      odd += 2
    }
    while (letterDict[i] > 0) {
      res[even] = c
      letterDict[i]--
      even += 2
    }
  }
  return res.join('')
}

console.log(reorganizeString('zhmyo'))
