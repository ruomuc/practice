/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let sum = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // 判断1的上下左右，为0就给sum+1
      if (grid[i][j] === 1) {
        if (i - 1 < 0) {
          sum++
        } else if (grid[i - 1][j] === 0) {
          sum++
        }
        if (j - 1 < 0) {
          sum++
        } else if (grid[i][j - 1] === 0) {
          sum++
        }
        if (i + 1 >= grid.length) {
          sum++
        } else if (grid[i + 1][j] === 0) {
          sum++
        }
        if (j + 1 >= grid[i].length) {
          sum++
        } else if (grid[i][j + 1] === 0) {
          sum++
        }
      }
    }
  }
  return sum
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
  ])
)
