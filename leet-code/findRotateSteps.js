/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  let m = ring.length
  let n = key.length
  const dp = new Array(n)
    .fill(0)
    .map(() => new Array(m).fill(Number.MAX_SAFE_INTEGER))

  const pos = new Array(26).fill(0).map(item => [])
  for (let i = 0; i < m; i++) {
    pos[getIdx(ring, i)].push(i)
  }
  for (const item of pos[getIdx(key, 0)]) {
    // +1 代表按下那一步
    dp[0][item] = Math.min(item, m - item) + 1
  }

  for (let i = 1; i < n; i++) {
    for (const j of pos[getIdx(key, i)]) {
      for (const k of pos[getIdx(key, i - 1)]) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i - 1][k] + Math.min(Math.abs(j - k), m - Math.abs(j - k)) + 1
        )
      }
    }
  }
  console.log(dp)
  return dp[n - 1].reduce((pre, curr) => {
    return Math.min(pre, curr)
  }, Number.MAX_SAFE_INTEGER)
}
function getIdx (str, v) {
  return str.codePointAt(v) - 'a'.codePointAt(0)
}

console.log(findRotateSteps('godding', 'gd'))
