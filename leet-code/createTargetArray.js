/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  var result = []
  for (let i = 0; i < index.length; i++) {
    for (let j = result.length - 1; j >= index[i]; j--) {
      result[j + 1] = result[j]
    }
    result[index[i]] = nums[i]
  }
  return result
}

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]))
