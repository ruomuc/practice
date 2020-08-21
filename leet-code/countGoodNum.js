/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++
      }
    }
  }
  return count
}

console.log(numIdenticalPairs([1, 1, 1, 1]))

var numIdenticalPairs = function (nums) {
  let tempMap = new Map()
  let count = 0
  for (const v of nums) {
    tempMap.has(v) ? tempMap.set(v, tempMap.get(v) + 1) : tempMap.set(v, 1)
  }
  for (const [k, v] of tempMap) {
    count += (v * (v - 1)) / 2
  }
  return count
}

console.log(numIdenticalPairs([1, 1, 1, 1]))
