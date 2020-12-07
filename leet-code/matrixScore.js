/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
  const len = A.length
  const column = A[0].length
  // 第一位必须全部为1
  for (let i = 0; i < len; i++) {
    if (A[i][0] === 0) {
      for (let j = 0, len = A[i].length; j < len; j++) {
        A[i][j] = A[i][j] === 0 ? 1 : 0
      }
    }
  }
  // 记录每一列0出现的次数
  const zeroCount = new Array(column).fill(0)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < column; j++) {
      if (A[i][j] === 0) {
        zeroCount[j]++
      }
    }
  }
  // 除了第一列，遇到0多的列就翻转
  const halfRow = len / 2
  for (let i = 1; i < column; i++) {
    if (zeroCount[i] > halfRow) {
      for (let j = 0; j < len; j++) {
        A[j][i] = A[j][i] === 0 ? 1 : 0
      }
    }
  }

  let ans = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < column; j++) {
      if (A[i][j] === 1) {
        // console.log(i, j, column, column - j)
        ans += Math.pow(2, column - j - 1)
      }
    }
  }
  return ans
}

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0]
  ])
)

console.log(matrixScore([[0]]))
