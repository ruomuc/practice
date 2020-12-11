/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const r = []
  const d = []
  const len = senate.length
  for (let i = 0; i < len; i++) {
    if (senate[i] === 'R') {
      r.push(i)
    } else {
      d.push(i)
    }
  }

  // 直到把一边全部干掉为止
  while (r.length !== 0 && d.length !== 0) {
    if (r[0] < d[0]) {
      // 干掉一个d，r放入末尾下一轮继续
      r.push(r[0] + len)
    } else {
      // 干掉一个r，d放入末尾下一轮继续
      d.push(d[0] + len)
    }
    // 放入下一轮也需要干掉，写一起吧
    r.shift()
    d.shift()
  }

  return r.length === 0 ? 'Dire' : 'Radiant'
}

console.log(predictPartyVictory('DDRRR'))
