/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((x, y) => {
    return '' + y + x - ('' + x + y)
  })
  if (nums[0] == '0') {
    return '0'
  }
  return nums.join('')
}
