/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

  for (let k = 0; k < strs.length; k++) {
    let zero = getZeroNum(strs[k])
    let one = getOneNum(strs[k])
    for (let i = m; i >= 0; i--) {
      for (let j = n; j >= 0; j--) {
        if (zero > i || one > j) {
          dp[i][j] = dp[i][j]
        } else {
          dp[i][j] = Math.max(1 + dp[i - zero][j - one], dp[i][j])
        }
      }
    }
  }
  return dp[m][n]
}

function getZeroNum (str) {
  let count = 0
  for (const char of str) {
    if (Number(char) === 0) {
      count++
    }
  }
  return count
}
function getOneNum (str) {
  let count = 0
  for (const char of str) {
    if (Number(char) === 1) {
      count++
    }
  }
  return count
}

console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3))
