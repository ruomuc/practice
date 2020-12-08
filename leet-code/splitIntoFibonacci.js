
var splitIntoFibonacci = function (S) {
  const list = []
  backtrack(list, S, 0)
  return list
}

const backtrack = (list, S, index) => {
  const length = S.length
  if (index === length) {
    return list.length >= 3
  }
  for (let i = index; i < length; i++) {
    if (i > index && S[index] === '0') {
      break
    }
    let num = getNum(S, index, i + 1)
    if (num > Math.pow(2, 31) - 1) {
      break
    }
    const size = list.length
    if (list.length >= 2) {
      const sum = list[size - 1] + list[size - 2]
      if (num < sum) {
        continue
      } else if (num > sum) {
        break
      }
    }
    list.push(num)
    if (backtrack(list, S, i + 1)) {
      return true
    }
    list.pop()
  }
  return false
}

function getNum (S, start, end) {
  let res = 0
  for (let i = start; i < end; i++) {
    res = res * 10 + S[i].charCodeAt() - '0'.charCodeAt()
  }
  return res
}

console.log(splitIntoFibonacci('123456579'))
