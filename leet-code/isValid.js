/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
      // 进栈
      stack.push(s[i])
    }
    if (s[i] === '}' || s[i] === ']' || s[i] === ')') {
      let element = stack.pop()
      if (
        (s[i] === '}' && element !== '{') ||
        (s[i] === ']' && element !== '[') ||
        (s[i] === ')' && element !== '(')
      ) {
        return false
      }
    }
  }
  return stack.length > 0 ? false : true
}

console.log(isValid('('))
