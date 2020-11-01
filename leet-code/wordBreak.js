/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const map = new Map()

  let dfs = function (s, len, wordSet, index, map) {
    console.log(index, map)
    if (map.has(index)) {
      return map.get(index)
    }
    const wordBreaks = []
    if (index === len) {
      wordBreaks.push([])
    }

    for (let i = index + 1; i <= len; i++) {
      const word = s.substring(index, i)
      if (wordSet.has(word)) {
        const nextWordBreaks = dfs(s, len, wordSet, i, map)
        for (const item of nextWordBreaks) {
          const wordBreak = [word, ...item]
          wordBreaks.push(wordBreak)
        }
      }
    }
    map.set(index, wordBreaks)
    return wordBreaks
  }

  const wordBreaks = dfs(s, s.length, new Set(wordDict), 0, map)
  const res = []
  for (const item of wordBreaks) {
    res.push(item.join(' '))
  }
  return res
}

console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']))
