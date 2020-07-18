
const s = new Set([1, 2, 'a', 4, 4, 5, 6, 6])
console.log(s)
// console.log([...s])s
// console.log(s)

// for (var i of s.keys()) {
//   console.log(i)
// }

// for (var v of s.values()) {
//   console.log(v)
// }

for (const e of s.entries()) {
  console.log(e)
}

// set的key是完全等于value的
s.forEach((v, k) => {
  console.log(k + '=' + v)
})

// 数组的key是从0开始的
[1, 2, 3, 4, 5, 6].forEach((v, k) => {
  console.log(k + '=' + v)
})

function flatten(array) {
  return array.reduce((pre, curr) => {
    return pre.concat(Array.isArray(curr) ? flatten(curr) : curr)
  }, [])
}

console.log(flatten([1, 2, [3, 4, 5], 6, 6]))

