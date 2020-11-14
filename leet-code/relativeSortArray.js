/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  return arr1.sort((a, b) => {
    if (!arr2.includes(a) && !arr2.includes(b)) {
      return a - b
    }
    if (!arr2.includes(a) && arr2.includes(b)) {
      return 1
    }
    if (!arr2.includes(b) && arr2.includes(a)) {
      return -1
    }
    if (arr2.includes(a) && arr2.includes(b)) {
      return arr2.indexOf(a) - arr2.indexOf(b)
    }
  })
}

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
)
