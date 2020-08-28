const arr = [-1, 3, 3, 7, 10, 14, 14]
const target = 9
function search (arr, target) {
  let left = 0
  let right = arr.length - 1
  while (right >= left) {
    console.log(right, left)
    const middle = (right + left) / 2
    if (arr[middle] > target && (middle == 0 || arr[middle - 1] <= target)) {
      console.log(`第一个比${target}大的数下标为${middle}`)
    }
    if (arr[middle] > target) {
      right = middle - 1
    }
    if (arr[middle] < target) {
      left = middle + 1
    }
  }
}

search(arr, target)
