/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let arr = A.sort((x, y) => {
    return Math.abs(x) - Math.abs(y)
  })
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], 2)
  }
  return arr
}

console.log(sortedSquares([-10, -2, 3, -5]))
