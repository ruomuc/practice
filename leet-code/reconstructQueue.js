/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  const emptyMap = new Map()
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })

  for (let i = 0; i < people.length; i++) {
    emptyMap.set(i, i)
  }
  console.log(people, emptyMap)
  for (let i = 0; i < people.length; i++) {
    const idx = emptyMap.get(people[i][1])
    let temp = people[i]
    people[i] = people[idx]
    people[idx] = temp
    // 更新一下空白位置
    for (const item of emptyMap) {
      
    }
  }
  console.log(people)
}

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2]
  ])
)
