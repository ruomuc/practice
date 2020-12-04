/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  const len = nums.length
  const cMap = new Array(nums[len - 1] + 1).fill(0)
  const tailMap = new Array(nums[len - 1] + 1).fill(0)
  for (let i = 0; i < len; i++) {
    cMap[nums[i]]++
  }

  for (let i = 0; i < len; i++) {
    const num = nums[i]
    if (cMap[num] === 0) {
      continue
    } else if (cMap[num] > 0 && tailMap[num - 1] > 0) {
      cMap[num]--
      tailMap[num - 1]--
      tailMap[num]++
    } else if (cMap[num] > 0 && cMap[num + 1] > 0 && cMap[num + 2] > 0) {
      cMap[num]--
      cMap[num + 1]--
      cMap[num + 2]--
      tailMap[num + 2]++
    } else {
      return false
    }
  }
  return true
}

console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5]))
