/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  let arr = new Array(26).fill(0)
  let res = []
  let codeA = 'a'.codePointAt()

  for (let i = 0; i < S.length; i++) {
    arr[S[i].codePointAt() - codeA] = i
  }

  let start = 0
  let end = 0

  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, arr[S[i].codePointAt() - codeA])
    if (i == end) {
      res.push(end - start + 1)
      start = end + 1
    }
  }
  return res
}
