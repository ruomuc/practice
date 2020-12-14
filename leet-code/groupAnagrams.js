/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {}
  const res = []
  for (let i = 0, len = strs.length; i < len; i++) {
    const number = strToNumber(strs[i])
    if (map[number]) {
      map[number].push(strs[i])
    } else {
      map[number] = [strs[i]]
    }
  }

  for (const item of Object.values(map)) {
    res.push(item)
  }
  return res
}

function strToNumber (str) {
  const temp = new Array(26).fill(0)
  for (let i = 0, len = str.length; i < len; i++) {
    temp[str[i].charCodeAt() - 97]++
  }
  return temp.join('-')
}

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
console.log(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc']))
