/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // 根绝结束位置从小到大排序
  points = points.sort((a, b) => {
    return a[1] - b[1]
  })
  let res = 0
  while (points.length > 0) {
    // 箭射出的位置
    let arrow = points[0][1]
    let i = 0
    console.log('points=', points, i)
    while (points[i] && points[i][0] <= arrow && points[i][1] >= arrow) {
      i++
    }
    console.log(res, i, arrow)
    res++
    points = points.slice(i)
  }
  return res
}

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12]
  ])
)
