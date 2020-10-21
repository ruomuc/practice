/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let p1 = 0
  let p2 = 0
  while (p2 < typed.length) {
    if (p1 < name.length && name[p1] === typed[p2]) {
      p1++
      p2++
    } else if (typed[p2] === typed[p2 - 1]) {
      p2++
    } else {
      return false
    }
  }
  return p1 === name.length
}

var name = 'saeed'
var typed = 'ssaaedd'

console.log(isLongPressedName(name, typed))
