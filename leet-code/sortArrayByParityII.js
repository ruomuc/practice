/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  // 拆分一下
  const even = []
  const odd = []

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) {
      even.push(A[i])
    } else {
      odd.push(A[i])
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      A[i] = even.pop()
    } else {
      A[i] = odd.pop()
    }
  }
  return A
}

console.log(sortArrayByParityII([1, 2, 3, 4, 5, 6]))

// 指针：常数空间复杂度
var sortArrayByParityII = function (A) {
  // 一个偶数指针，一个奇数指针
  let i = 0
  let j = 1
  while (i < A.length) {
    if (A[i] % 2 !== 0) {
      while (A[j] % 2 !== 0) {
        j += 2
      }
      const temp = A[j]
      A[j] = A[i]
      A[i] = temp
    }
    i += 2
  }
  return A
}
console.log(sortArrayByParityII([1, 2, 3, 4, 5, 6]))
