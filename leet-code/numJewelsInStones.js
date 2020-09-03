/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const map = new Map()
  for (let i = 0; i < J.length; i++) {
    map.set(J[i], i)
  }
  let count = 0
  for (let i = 0; i < S.length; i++) {
    if(map.has(S[i])){
      count++
    }    
  }
  return count
}
