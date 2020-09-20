/**
 * 位运算法
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ans = []
  for (let i = 0; i < 1 << nums.length; i++) {
    let temp = []
    for (let j = 0; j < nums.length; j++) {
      if (i & (1 << j)) {
        temp.push(nums[j])
      }
    }
    ans.push(temp)
  }
  return ans
}

// 回溯递归的方法
var subsets = function (nums) {
  const ans = []
  let temp = []
  let dfs = function (curr) {
    if (curr === nums.length) {
      /**
         * slice 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：
          1. 如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
          2. 对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。
        */
      // 这里使用拷贝的原因是，如果直接push(temp), ans的每一个元素指向的都是一个temp引用，最后值会被改变
      ans.push(temp.slice())
      return
    }
    temp.push(nums[curr])
    dfs(curr + 1)
    temp.pop()
    dfs(curr + 1)
  }
  dfs(0)
  return ans
}

console.log(subsets([1, 2, 3]))
