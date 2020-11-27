/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  const countMap = new Map()
  const len = A.length
  let res = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const val = A[i] + B[j]
      if (countMap.has(val)) {
        countMap.set(val, countMap.get(val) + 1)
      } else {
        countMap.set(val, 1)
      }
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (countMap.has(-C[i] - D[j])) {
        res += countMap.get(-C[i] - D[j])
      }
    }
  }
  return res
}
