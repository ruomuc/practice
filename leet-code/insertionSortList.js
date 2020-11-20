/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  // 加一个虚拟节点指向头节点
  const fake = new ListNode(-Number.MAX_SAFE_INTEGER)
  fake.next = head

  let curr = head
  while (curr && curr.next) {
    if (curr.val <= curr.next.val) {
      curr = curr.next
      continue
    }
    let rm = curr.next
    curr.next = curr.next.next
    let pre = fake
    while (pre.next.val <= rm.val) {
      pre = pre.next
    }
    rm.next = pre.next
    pre.next = rm
  }
  return fake.next
}

console.log(
  insertionSortList({
    val: 4,
    next: { val: 2, next: { val: 1, next: { val: 3, next: null } } }
  })
)
