/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  if (key.length === 0) {
    return 0
  }
  const ringMap = new Map()
  for (i = 0; i < ring.length; i++) {
    if (ringMap.has(ring[i])) {
      ringMap.get(ring[i]).add(i)
      continue
    }
    ringMap.set(ring[i], new Set([i]))
  }
  console.log(ringMap)
  let center = 0
  for (i = 0; i < key.length; i++) {}

  var findNearest = function (element, ringSet) {}
}

console.log(findRotateSteps('godding', 'gd'))
