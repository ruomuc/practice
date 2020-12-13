const { set } = require("lodash")

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  return nums.length === [...new Set(nums)].length
}