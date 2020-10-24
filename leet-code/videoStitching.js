/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function (clips, T) {
  let ans = 0
  const maxRange = new Array(T).fill(0)

  // 记录每个开始位置的最大结束位置
  for (const item of clips) {
    const [l, r] = item
    if (r > maxRange[l]) {
      maxRange[l] = r
    }
  }

  let pre = 0,
    last = 0
  for (let i = 0; i < maxRange.length; i++) {
    const val = maxRange[i]
    if (val > last) {
      last = val
    }

    if (i === last) {
      return -1
    }

    if (i === pre) {
      ans++
      pre = last
    }
  }
  return ans
}

console.log(
  videoStitching(
    [
      [0, 2],
      [4, 6],
      [8, 10],
      [1, 9],
      [1, 5],
      [5, 9]
    ],
    10
  )
)
