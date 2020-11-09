/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  points = points.sort((a, b) => {
    const tempA = Math.pow(a[0], 2) + Math.pow(a[1], 2)
    const tempB = Math.pow(b[0], 2) + Math.pow(b[1], 2)
    return tempA - tempB
  })
  return points.slice(0, K)
}

// console.log(
//   kClosest(
//     [
//       [3, 3],
//       [5, -1],
//       [-2, 4]
//     ],
//     2
//   )
// )

// 用快排看看会不会更快

var kClosest = function (points, K) {
  points = quickSort(points, 0, points.length - 1)
  return points.slice(0, K)
}

function quickSort (points, left, right) {
  if (left >= right) {
    return
  }
  let i = left
  let j = right
  let flag = points[left]
  while (i < j) {
    while (i < j && definePow(points[j]) >= definePow(flag)) {
      j--
    }
    while (i < j && definePow(points[i]) <= definePow(flag)) {
      i++
    }
    let temp = points[i]
    points[i] = points[j]
    points[j] = temp
  }
  points[left] = points[j]
  points[j] = flag
  quickSort(points, left, j - 1)
  quickSort(points, j + 1, right)
  return points
}

function definePow (arr) {
  return Math.pow(arr[0], 2) + Math.pow(arr[1], 2)
}
console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4]
    ],
    2
  )
)
