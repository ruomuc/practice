/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  const charMap = new Map()
  for (let i = s.length; i--; ) {
    if (charMap.has(s[i])) {
      charMap.set(s[i], charMap.get(s[i]) + 1)
    } else {
      charMap.set(s[i], 1)
    }
  }
  console.log(charMap)

  for (let i = t.length; i--; ) {
    if (charMap.has(s[i])) {
      charMap.set(s[i], charMap.get(s[i]) - 1)
    } else {
      return false
    }
  }

  for (const [k, v] of charMap) {
    if (v > 0) {
      return false
    }
  }
  return true
}

console.log(isAnagram('anagram', 'nagaram'))

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  sArr = [...s]
  tArr = [...t]
  ns = sArr.sort((a, b) => a.codePointAt() - b.codePointAt()).join('')
  nt = tArr.sort((a, b) => a.codePointAt() - b.codePointAt()).join('')
  return ns === nt
}
console.log(isAnagram('anagram', 'nagaram'))