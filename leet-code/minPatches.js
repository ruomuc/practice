/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
  let [p, x, index] = [0, 1, 0]
  const len = nums.length

  while (x <= n) {
    console.log('x==', x, index, len)
    if (index < len && nums[index] <= x) {
      x += nums[index]
      index++
    } else {
      x *= 2
      p++
    }
  }
  return p
}

console.log(minPatches([1, 3], 111))
