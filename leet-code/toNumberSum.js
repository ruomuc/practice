
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var toNumberSum = function (nums, target) {
  if (nums.length === 0) {
    return []
  }
  const map = new Map()

  for (let index = 0; index < nums.length; index++) {
    const value = nums[index]
    const remainder = target - value
    if (map.has(remainder)) {
      return [index, map.get(remainder)]
    }
    map.set(value, index)
  }
  throw new Error('no two number')
}

console.log(twoSum([3, 2, 4], 6))
