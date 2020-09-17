/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 0) {
    return 0
  } else if (n === 0) {
    return 1
  }
  return climbStairs(n - 1) + climbStairs(n - 2)
}

var climbStairs = function (n) {
  let p1 = 0,
    p2 = 0,
    curr = 1

  for (let i = 0; i < n; i++) {
    p2 = p1
    p1 = curr
    curr = p1 + p2
  }
  return curr
}

console.log(climbStairs(0))
