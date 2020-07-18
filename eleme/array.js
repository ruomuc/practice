/**
 * 扁平化一个数组
 * @param {*} arr 
 */
function flatten(arr) {
  return arr.reduce((prev, item) => {
    console.log('prev', prev)
    return prev.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}

const arr = [1, 2, [3, 4, 5], [2, [1, 98, 21]]]
console.log(flatten(arr))
