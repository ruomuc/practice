/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const len = gas.length
  let sq = 0
  let minIdx = 0
  let minSq = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < len; i++) {
    sq += gas[i] - cost[i]
    if (sq < minSq) {
      minSq = sq
      minIdx = i
    }
  }
  return sq < 0 ? -1 : (minIdx + 1) % len
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))