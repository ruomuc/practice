/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const len = tasks.length
  // 一个数组记录每个任务出现的次数，另一个记录最后执行的时间
  const countTask = new Array(26).fill(0)

  for (let i = 0; i < len; i++) {
    countTask[tasks[i].codePointAt() - 65]++
  }
  const maxCount = Math.max(...countTask)
  let maxTimes = 0
  for (let i = 0; i < len; i++) {
    if (countTask[i] === maxCount) {
      maxTimes++
    }
  }
  return Math.max(maxTimes + (maxCount - 1) * (n + 1), tasks.length)
}

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2))
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0))
console.log(
  leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2)
)
