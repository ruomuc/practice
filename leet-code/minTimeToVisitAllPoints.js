/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let total = 0
  for (let i = 1; i < points.length; i++) {
    let x = 0
    let y = 0
    x = Math.abs(points[i][0] - points[i - 1][0])
    y = Math.abs(points[i][1] - points[i - 1][1])
    total += x > y ? x : y
  }
  return total
}
