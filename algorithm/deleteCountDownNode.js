/**
 * 删除链表倒数第n个结点
 * @param {*} head 头指针
 * @param {*} n 倒数第n个结点
 */
function deleteCountDownNode (head, n) {
  // 初始化快慢指针
  let fast = head
  let slow = head

  // fast指针先行
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  console.log(fast)
  // 一起移动
  while (fast.next != null) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return head
}

const head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
  }
}

console.log(JSON.stringify(deleteCountDownNode(head, 2)))
