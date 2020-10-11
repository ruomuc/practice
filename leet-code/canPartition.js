/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let len = nums.length
  // 不足两个元素返回false
  if (len < 2) {
    return false
  }

  let sum = 0
  for (const v of nums) {
    sum += v
  }

  if (sum % 2 != 0) {
    return false
  }

  let target = sum / 2

  let arr = new Array(target + 1).fill(false)
  arr[0] = true

  for (const v of nums) {
    for (let i = target; i >= v; i--) {
      arr[i] = arr[i] || arr[i - v]
    }
  }
  return arr[target]
}
