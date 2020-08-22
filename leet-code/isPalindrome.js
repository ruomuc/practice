/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x === 0) {
    return true
  }
  // 负数肯定不是吧
  if (x < 0 || x % 10 === 0) {
    return false
  }
  let res = 0
  let tempx = x
  while (tempx) {
    res = res * 10 + (tempx % 10)
    tempx = parseInt(tempx / 10)
  }
  if (res === x) {
    return true
  }
  return false
}

console.log(isPalindrome(121))

// 看了下题解，判断一半就行了，妙啊。
var isPalindrome = function (x) {
  if (x === 0) {
    return true
  }
  // 负数肯定不是吧,最后一位是0也不是
  if (x < 0 || x % 10 == 0) {
    return false
  }
  let res = 0
  // 这里只需要判断一半
  while (res < x) {
    res = res * 10 + (x % 10)
    x = parseInt(x / 10)
  }
  // 这里如果两个半边相等（偶数），或者后半边除掉最后一位之后相等（奇数）都说明是回文的
  // 这个在数字很长的时候，效率应该会高一点的
  if (res === x || parseInt(res / 10) === x) {
    return true
  }
  return false
}
console.log(isPalindrome(10))
