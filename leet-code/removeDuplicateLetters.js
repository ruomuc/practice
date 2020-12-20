/**
 * @param {string}
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  // 用于记录字母是否已经在栈里
  const dict = new Array(26).fill(0)
  const stack = []
  const cMap = _.countBy(s)
  const len = s.length
  for (let i = 0; i < len; i++) {
    const currNum = s[i].codePointAt()
    if (!dict[currNum - 97]) {
      while (
        stack.length > 0 &&
        stack[stack.length - 1].codePointAt() > currNum
      ) {
        if (cMap[stack[stack.length - 1]] > 0) {
          dict[stack[stack.length - 1].codePointAt() - 97] = 0
          stack.pop()
        } else {
          break
        }
      }
      dict[s[i].codePointAt() - 97] = 1
      stack.push(s[i])
    }
    cMap[s[i]]--
  }
  return stack.join('')
}

console.log(removeDuplicateLetters('cdadabcc'))

var removeDuplicateLetters = function (s) {
  const vis = new Array(26).fill(0)
  const num = _.countBy(s)

  const sb = new Array()
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (!vis[ch.charCodeAt() - 'a'.charCodeAt()]) {
      while (sb.length > 0 && sb[sb.length - 1] > ch) {
        if (num[sb[sb.length - 1]] > 0) {
          vis[sb[sb.length - 1].charCodeAt() - 'a'.charCodeAt()] = 0
          sb.pop()
        } else {
          break
        }
      }
      vis[ch.charCodeAt() - 'a'.charCodeAt()] = 1
      sb.push(ch)
    }
    num[ch]--
  }
  return sb.join('')
}
