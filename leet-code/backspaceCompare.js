/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  return back(S) === back(T)
}

function back (str) {
  let stack = []

  for (let i = 0; i < str.length; i++) {
    const element = str[i]
    if (element === '#') {
      stack.pop()
      continue
    }
    stack.push(element)
  }
  return stack.join('')
}

console.log(backspaceCompare('a#b#c', 'a#d#c'))
