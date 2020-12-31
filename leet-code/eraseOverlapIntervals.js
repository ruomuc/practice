/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  const n = intervals.length
  const ans = 0
  if (n === 0) {
    return ans
  }
  let i = 0
  while (i < n) {
    if (intervals[i][1] < intervals[i + 1][0]) {
      i++
    }
    if (intervals[i][1] > intervals[i + 1][0]) {
      ans++
      intervals
    }
  }
  return ans
}
