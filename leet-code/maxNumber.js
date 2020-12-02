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
    // console.log('nums,k=', stack, nums, k, n - k)
    k > 0 ? stack.splice(-k) : stack
    return stack
  }

  var merge = function (n1, n2) {
    // console.log('merge=', n1, n2)
    let temp = []
    while (n1.length != 0 || n2.length != 0) {
      if (n1[0] >= n2[0]) {
        temp.push(n1[0])
        n1.shift()
      } else {
        temp.push(n2[0])
        n2.shift()
      }
      // console.log('n1,n2=', temp, n1, n2)
      if (n2.length === 0) {
        temp = temp.concat(n1)
        break
      }
      if (n1.length === 0) {
        temp = temp.concat(n2)
        break
      }
    }
    console.log('temp=', temp)
    return temp
  }

  var arrmax = function (arr1, arr2) {
    console.log(arr1, arr2)
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

  let res = []
  for (let i = 0; i <= k; i++) {
    if (i <= l1 && k - i <= l2) {
      // console.log('i,k=', i, k - i, res)
      res = arrmax(
        res,
        merge(getMaxNumbers(nums1, i), getMaxNumbers(nums2, k - i))
      )
      console.log('res=', res)
    }
  }
  return res
}

console.log(maxNumber([6, 7], [6, 0, 4], 5))
