/**
 * 公开课算法导论-mit6.046
 * 课堂笔记的算法代码实现一下
 */

// 插入排序
function insertSort (A) {
  for (let i = 1, n = A.length; i < n; i++) {
    let key = A[i]
    let j = i - 1
    while (j >= 0 && A[j] > key) {
      A[j + 1] = A[j]
      j--
    }
    A[j + 1] = key
    console.log('Step=', A)
  }
  return A
}

console.log(insertSort([8, 2, 4, 9, 3, 6]))

// 归并排序
function mergeSort (A) {
  var sort = function (A, left, right) {
    if (left >= right) {
      return
    }
    const mid = parseInt((left + right) / 2)
    console.log('mid=', left, right, mid)
    sort(A, left, mid)
    sort(A, mid + 1, right)

    const temp = []
    let p1 = left
    let p2 = mid + 1
    while (p1 <= mid && p2 <= right) {
      if (A[p1] <= A[p2]) {
        temp.push(A[p1])
        p1++
      } else {
        temp.push(A[p2])
        p2++
      }
    }
    while (p1 <= mid) {
      temp.push(A[p1])
      p1++
    }
    while (p2 <= right) {
      temp.push(A[p2])
      p2++
    }
    console.log('temp=', p1, p2, temp)
    let k = 0
    for (let i = left; i <= right; i++, k++) {
      A[i] = temp[k]
    }
  }
  sort(A, 0, A.length - 1)
  return A
}
console.log(mergeSort([8, 2, 4, 9, 3, 6]))
