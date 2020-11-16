/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  const m = people.length
  const res = new Array(m)
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })
  console.log(people)
  for (let i = 0; i < m; i++) {
    let size = people[i][1]
    for (let j = 0; j < m; j++) {
      if (res[j] == null) {
        if (size === 0) {
          res[j] = people[i]
          console.log(res[j], j)
          break
        }
        size--
      }
    }
  }
  console.log(res)
  return res
}

console.log(
  reconstructQueue([
    [9, 0],
    [7, 0],
    [1, 9],
    [3, 0],
    [2, 7],
    [5, 3],
    [6, 0],
    [3, 4],
    [6, 2],
    [5, 2]
  ])
)
