/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 题目说要在lgn的时间复杂度，那第一时间想到的就是二分查找嘛
var searchRange = function (nums, target) {
  const res = [Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER]
  var bSearch = function (nums, left, right) {
    let mid = left + Math.floor(right - left + 1 / 2)
    if (nums[mid] === target) {
      if (mid > res[1]) {
        res[1] = mid
      }
      if (mid < res[0]) {
        res[0] = mid
      }
    }

    if (mid - 1 >= left) {
      bSearch(nums, left, mid - 1)
    }
    if (mid + 1 <= right) {
      bSearch(nums, mid + 1, right)
    }
  }
  bSearch(nums, 0, nums.length - 1)
  return res[0] === Number.MAX_SAFE_INTEGER ? [-1, -1] : res
}

// 二分查找，优化版？
var searchRange = function (nums, target) {
  const res = [Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER]
  var bSearch = function (nums, left, right) {
    if (left > right) {
      return
    }
    let mid = left + Math.floor(right - left + 1 / 2)
    if (nums[mid] === target) {
      // 找到了之后，往两边找
      let i = mid
      let j = mid
      while (nums[i] === target || nums[j] === target) {
        if (nums[i] === target && i < res[0]) {
          res[0] = i
          i--
        }
        if (nums[j] === target && i > res[1]) {
          res[1] = j
          j++
        }
      }
    }
    if (nums[mid] > target) {
      bSearch(nums, left, mid - 1)
    } else if (nums[mid] < target) {
      bSearch(nums, mid + 1, right)
    }
  }
  bSearch(nums, 0, nums.length - 1)
  return res[0] === Number.MAX_SAFE_INTEGER ? [-1, -1] : res
}
console.log(searchRange([1], 1))
