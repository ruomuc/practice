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

// console.log(findRotateSteps('godding', 'gd'))

// 降维打击失败。。。
// var findRotateSteps = function (ring, key) {
//   let m = ring.length
//   let n = key.length
//   const dp = new Array(m).fill(Number.MAX_SAFE_INTEGER)

//   const pos = new Array(26).fill(0).map(item => [])
//   for (let i = 0; i < m; i++) {
//     pos[getIdx(ring, i)].push(i)
//   }
//   for (const item of pos[getIdx(key, 0)]) {
//     // +1 代表按下那一步
//     dp[item] = Math.min(item, m - item) + 1
//   }

//   for (let i = 1; i < n; i++) {
//     for (let j = pos[getIdx(key, i)].length - 1; j >= 0; j--) {
//       const jv = pos[getIdx(key, i)][j]
//       for (let k = pos[getIdx(key, i - 1)].length - 1; k >= 0; k--) {
//         const kv = pos[getIdx(key, i - 1)][k]
//         console.log(dp)

//         dp[jv] =
//           dp[kv] + Math.min(Math.abs(jv - kv), m - Math.abs(jv - kv)) + 1
//       }
//     }
//   }
//   console.log(dp)
//   let min = Number.MAX_SAFE_INTEGER
//   for (let i = 0; i < m; i++) {
//     if (ring[i] === key[n - 1] && dp[i] < min) {
//       min = dp[i]
//     }
//   }
//   return min
// }
// console.log(findRotateSteps('godding', 'godding'))

var findRotateSteps = function (ring, key) {
  let ringMap = new Map()
  for (let i = 0; i < ring.length; i++) {
    if (ringMap.has(ring[i])) {
      ringMap.set(ring[i], ringMap.get(ring[i]).concat([i]))
    } else {
      ringMap.set(ring[i], [i])
    }
  }

  // 记忆化搜索
  const memo = new Array(ring.length).fill(0).map(item => {
    return new Array(key.length).fill(-1)
  })

  const dfs = function (ringIdx, keyIdx) {
    if (keyIdx >= key.length) {
      return 0
    }
    if (memo[ringIdx][keyIdx] > 0) {
      return memo[ringIdx][keyIdx]
    }
    let curr = key[keyIdx]
    let res = Number.MAX_SAFE_INTEGER
    for (const targerIdx of ringMap.get(curr)) {
      console.log(targerIdx)
      const d1 = Math.abs(ringIdx - targerIdx)
      const d2 = ring.length - d1
      res = Math.min(res, Math.min(d1, d2) + dfs(targerIdx, keyIdx + 1))
    }
    memo[ringIdx][keyIdx] = res
    return res
  }
  // 为什么要加上key.length呢。key.length是按按钮的次数
  return key.length + dfs(0, 0)
}
console.log(findRotateSteps('godding', 'gd'))
