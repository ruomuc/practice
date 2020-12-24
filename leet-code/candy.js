/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const len = ratings.length
  const childQueue = new Array(len).fill(1)
  for (let i = 0; i < len - 1; i++) {
    // 如果左边分数大于右边，并且饼干小于等于右边
    if (ratings[i + 1] > ratings[i] && childQueue[i + 1] <= childQueue[i]) {
      childQueue[i + 1] = childQueue[i] + 1
    }
  }

  for (let i = len - 2; i >= 0; i--) {
    // 如果左边分数大于右边，并且饼干小于等于右边
    if (ratings[i] > ratings[i + 1] && childQueue[i] <= childQueue[i + 1]) {
      childQueue[i] = childQueue[i + 1] + 1
    }
  }

  return childQueue.reduce((pre, curr) => {
    return (pre += curr)
  }, 0)
}

// console.log(candy([1, 0, 2]))
// console.log(candy([1, 2, 2]))
console.log(candy([1, 2, 87, 87, 87, 2, 1]))
