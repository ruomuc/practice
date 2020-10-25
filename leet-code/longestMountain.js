/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
  let n = A.length
  let max = 0
  let left = 0

  while (left + 2 < n) {
    let right = left + 1
    if (A[left] < A[left + 1]) {
      while (right + 1 < n && A[right] < A[right + 1]) {
        right++
      }
      if (right < n - 1 && A[right] > A[right + 1]) {
        console.log(right, left)
        while (right + 1 < n && A[right] > A[right + 1]) {
          right++
        }
        console.log(right, left)
        if (right - left + 1 > max) {
          max = right - left + 1
        }
      } else {
        right++
      }
    }
    left = right
  }
  return max
}

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]))
