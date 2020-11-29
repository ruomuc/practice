/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
  if (A.length < 3) {
    return 0
  }
  A = A.sort((a, b) => b - a)

  for (let i = 0, len = A.length; i < len - 2; i++) {
    if (A[i] < A[i + 1] + A[i + 2]) {
      return A[i] + A[i + 1] + A[i + 2]
    }
  }
  return 0
}

console.log(largestPerimeter([1, 2, 1]))
