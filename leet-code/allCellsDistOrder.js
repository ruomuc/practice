/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  const matrix = []
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      matrix.push([i, j])
    }
  }
  var distance = function (d) {
    return Math.abs(d[0] - r0) + Math.abs(d[1] - c0)
  }

  matrix.sort((a, b) => {
    return distance(a) - distance(b)
  })
  return matrix
}

console.log(allCellsDistOrder(2, 3, 1, 2))
