/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  if (nums.length > 1000 || nums.length < 1) {
    return []
  }
  if (nums[0] < -Math.pow(10, 6) || nums[nums.length - 1] > Math.pow(10, 6)) {
    return []
  }
  let total = 0
  let result = []
  for (let index = 0 ,len = nums.length; index < len; index++) {
    const element = nums[index]
    total += element
    result.push(total)
  }
  return result
}

var runningSum = function (nums) {
  if (nums.length > 1000 || nums.length < 1) {
    return []
  }
  if (nums[0] < -Math.pow(10, 6) || nums[nums.length - 1] > Math.pow(10, 6)) {
    return []
  }
  // 从第二个元素开始，因为第一个元素不变
  for (let index = 1 ,len = nums.length; index < len; index++) {
    nums[index] = nums[index] + nums[index - 1]
  }
  return nums
}

console.log(runningSum([1, 2, 4, 5, 11]))
