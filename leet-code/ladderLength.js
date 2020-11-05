/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let count = 0
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) {
    return count
  }

  // s1->s2 能否转换
  const canConvert = function (s1, s2) {
    if (s1.length != s2.length) {
      return false
    }
    let count = 0
    const s1Arr = [...s1]
    const s2Arr = [...s2]
    for (let i = 0; i < s1Arr.length; i++) {
      if (s1Arr[i] !== s2Arr[i]) {
        count++
      }
    }
    // 如果只有一个不同，那么可以转换
    return count === 1
  }

  const queue = []
  queue.push(beginWord)
  const visitSet = new Set()
  while (queue.length > 0) {
    const size = queue.length
    count++
    for (let i = 0; i < size; i++) {
      const tempWord = queue.shift()
      for (const item of wordSet) {
        if (visitSet.has(item)) {
          continue
        }
        if (!canConvert(tempWord, item)) {
          continue
        }
        if (item === endWord) {
          return ++count
        }
        visitSet.add(item)
        queue.push(item)
      }
    }
  }
  return 0
}

console.log(ladderLength('a', 'c', ['a', 'b', 'c']))

// 双向bfs
var ladderLength = function (beginWord, endWord, wordList) {
  let count1 = 0
  let count2 = 0

  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) {
    return 0
  }

  // s1->s2 能否转换
  const canConvert = function (s1, s2) {
    if (s1.length != s2.length) {
      return false
    }
    let count = 0
    const s1Arr = [...s1]
    const s2Arr = [...s2]
    for (let i = 0; i < s1Arr.length; i++) {
      if (s1Arr[i] !== s2Arr[i]) {
        count++
      }
    }
    // 如果只有一个不同，那么可以转换
    return count === 1
  }

  const queue = []
  const endQueue = []
  queue.push(beginWord)
  endQueue.push(endWord)
  const visitSet1 = new Set()
  const visitSet2 = new Set()
  visitSet1.add(beginWord)
  visitSet2.add(endWord)

  while (queue.length > 0 && endQueue.length > 0) {
    const size = queue.length
    count1++
    for (let i = 0; i < size; i++) {
      const tempWord = queue.shift()
      for (const item of wordSet) {
        if (visitSet1.has(item)) {
          continue
        }
        if (!canConvert(tempWord, item)) {
          continue
        }
        if (visitSet2.has(item)) {
          return count1 + count2 + 1
        }
        visitSet1.add(item)
        queue.push(item)
      }
    }
    const size2 = endQueue.length
    count2++
    for (let i = 0; i < size2; i++) {
      const tempEndWord = endQueue.shift()
      for (const item of wordSet) {
        if (visitSet2.has(item)) {
          continue
        }
        if (!canConvert(tempEndWord, item)) {
          continue
        }
        if (visitSet1.has(item)) {
          return count1 + count2 + 1
        }
        visitSet2.add(item)
        endQueue.push(item)
      }
    }
  }
  return 0
}
console.log(ladderLength("hit",
"cog",
["hot","dot","dog","lot","log"]))
