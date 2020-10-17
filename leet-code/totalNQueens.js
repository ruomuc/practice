/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const clomuns = new Set()
  const dia1 = new Set()
  const dia2 = new Set()

  return backTrack(n, 0, clomuns, dia1, dia2)
}

function backTrack (n, row, clomuns, dia1, dia2) {
  if (n === row) {
    return 1
  } else {
    let count = 0
    for (let i = 0; i < n; i++) {
      if (clomuns.has(i)) {
        continue
      }
      const d1 = row - i
      if (dia1.has(d1)) {
        continue
      }
      const d2 = row + i
      if (dia2.has(d2)) {
        continue
      }
      clomuns.add(i)
      dia1.add(d1)
      dia2.add(d2)
      count += backTrack(n, row + 1, clomuns, dia1, dia2)
      clomuns.delete(i)
      dia1.delete(d1)
      dia2.delete(d2)
    }
    return count
  }
}
