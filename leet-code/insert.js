/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const res = []
  let i = 0
  // 右边界小于新区间的左边界
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i])
    i++
  }

  // 重合区域
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    i++
  }
  res.push(newInterval)

  // 右边区域
  while (i < intervals.length) {
    res.push(intervals[i])
    i++
  }
  return res
}

console.log(insert([], [0, 0]))
