/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  let l1 = nums1.length
  let l2 = nums2.length
  var getMaxNumbers = function (nums, k) {
    const n = nums.length
    const stack = []
    for (let i = 0; i < n; i++) {
      while (k > 0 && stack.length > 0 && stack[stack.length - 1] < nums[i]) {
        stack.pop()
        k--
      }
      stack.push(nums[i])
    }
    k > 0 ? stack.splice(-k) : stack
    return stack
  }

  let res = []
  for (let i = 0; i <= k; i++) {
    rest1 = l1 - i
    rest2 = l2 - k + i
    if (rest1 >= 0 && rest2 >= 0 && rest1 <= l1 && rest2 <= l2) {
      res = arrmax(
        res,
        merge(getMaxNumbers(nums1, l1 - i), getMaxNumbers(nums2, l2 - k + i))
      )
    }
  }
  return res
}

function arrmax (arr1, arr2) {
  const l1 = arr1.length
  const l2 = arr2.length
  if (l1 > l2) {
    return arr1
  }
  if (l1 < l2) {
    return arr2
  }
  for (let i = 0; i < l1; i++) {
    if (arr1[i] > arr2[i]) {
      return arr1
    }
    if (arr2[i] > arr1[i]) {
      return arr2
    }
  }
  // 全部相等,随便返回一个
  return arr1
}

function merge (subsequence1, subsequence2) {
  const x = subsequence1.length,
    y = subsequence2.length
  if (x === 0) {
    return subsequence2
  }
  if (y === 0) {
    return subsequence1
  }
  const mergeLength = x + y
  const merged = new Array(mergeLength).fill(0)
  let index1 = 0,
    index2 = 0
  for (let i = 0; i < mergeLength; i++) {
    if (compare(subsequence1, index1, subsequence2, index2) > 0) {
      merged[i] = subsequence1[index1++]
    } else {
      merged[i] = subsequence2[index2++]
    }
  }
  return merged
}

function compare (subsequence1, index1, subsequence2, index2) {
  const x = subsequence1.length,
    y = subsequence2.length
  while (index1 < x && index2 < y) {
    const difference = subsequence1[index1] - subsequence2[index2]
    if (difference !== 0) {
      return difference
    }
    index1++
    index2++
  }
  return x - index1 - (y - index2)
}

console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5))
console.log(maxNumber([6, 7], [6, 0, 4], 5))
console.log(maxNumber([3, 9], [8, 9], 3))
console.log(maxNumber([8, 6, 9], [1, 7, 5], 3))
console.log(maxNumber([6, 7], [6, 0, 4], 5))
