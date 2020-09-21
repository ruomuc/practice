/**
 * 空间O(1)解法，用索引代表值，索引对应值的正负代表该值是否出现过
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let n = nums.length
  const result = []
  for (let i = 0; i < n; i++) {
    const val = Math.abs(nums[i])
    nums[val - 1] = nums[val - 1] > 0 ? -nums[val - 1] : nums[val - 1]
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }
  return result
}

var findDisappearedNumbers = function (nums) {
  const vMap = new Map()
  const result = []
  for (let i = 0; i < nums.length; i++) {
    vMap.set(nums[i], true)
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!vMap.get(i)) {
      result.push(i)
    }
  }
  return result
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
