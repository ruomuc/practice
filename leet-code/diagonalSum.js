/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let result = 0
  for (let i = 0; i < mat.length; i++) {
    if (i === mat.length - 1 - i) {
      result += mat[i][i]
    } else {
      result += mat[i][i] + mat[i][mat.length - 1 - i]
    }
  }
  return result
}

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)
