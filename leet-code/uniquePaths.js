/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map(item => new Array(n).fill(0))
  // 开始点为0,0 终点为m-1,n-1
  var dfs = function (x, y) {
    if (x === 0 && y === 0) {
      return 1
    }
    // 第一行不会被从上面进入，第一列不会被从左边进入
    if (x === 0) {
      return dfs(x, y - 1)
    } else if (y === 0) {
      return dfs(x - 1, y)
    } else {
      return dfs(x - 1, y) + dfs(x, y - 1)
    }
  }
  return dfs(m - 1, n - 1)
}

console.log(uniquePaths(3, 3))

// 记忆化搜索优化
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map(item => new Array(n).fill(0))
  const memo = new Array(m).fill(0).map(item => new Array(n).fill(0))
  let ans = 0
  // 开始点为0,0 终点为m-1,n-1
  var dfs = function (x, y) {
    if (x === 0 && y === 0) {
      return 1
    }

    if (memo[x][y]) {
      return memo[x][y]
    }
    // 第一行不会被从上面进入，第一列不会被从左边进入
    if (x === 0) {
      ans = dfs(x, y - 1)
    } else if (y === 0) {
      ans = dfs(x - 1, y)
    } else {
      ans = dfs(x - 1, y) + dfs(x, y - 1)
    }
    memo[x][y] = ans
    return ans
  }
  return dfs(m - 1, n - 1)
}
console.log(uniquePaths(3, 3))
