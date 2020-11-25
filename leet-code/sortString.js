/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  if (s.length === 0) {
    return ''
  }
  const res = []
  // 字典
  const bucket = new Array(26).fill(0)
  for (let i = 0, len = s.length; i < len; i++) {
    bucket[s[i].codePointAt() - 'a'.codePointAt()]++
  }
  // 来回遍历,因为一定会排完，所以终止条件用res.length < s.length应该没啥问题。。
  while (res.length < s.length) {
    for (let i = 0; i <= 25; i++) {
      if (bucket[i] <= 0) {
        continue
      }
      res.push(String.fromCharCode(i + 97))
      bucket[i]--
    }
    for (let i = 25; i >= 0; i--) {
      if (bucket[i] <= 0) {
        continue
      }
      res.push(String.fromCharCode(i + 97))
      bucket[i]--
    }
  }
  return res.join('')
}

console.log(sortString('rat'))
