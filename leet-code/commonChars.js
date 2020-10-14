/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let ans = []
  let minFreq = new Array(26).fill(Number.MAX_SAFE_INTEGER)

  for (const element of A) {
    let freq = new Array(26).fill(0)
    for (let i = 0; i < element.length; i++) {
      let code = element[i].charCodeAt()
      freq[code - 97]++
    }

    for (let i = 0; i < freq.length; i++) {
      if (freq[i] < minFreq[i]) {
        minFreq[i] = freq[i]
      }
    }
  }

  for (let i = 0; i < minFreq.length; i++) {
    for (let j = 0; j < minFreq[i]; j++) {
      console.log(i, j)
      let c = String.fromCharCode(i + 97)
      ans.push(c)
    }
  }
  return ans
}

var str = ['bella', 'label', 'roller']

console.log(commonChars(str))
