/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode (val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  temp = new ListNode(null, head)
  let slow = temp
  let fast = temp
  for (let i = 0; i < n + 1; i++) {
    if (fast == null) {
      return fast
    }
    fast = fast.next
  }
  console.log(fast)
  while (fast != null) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return temp.next
}

var list = { val: 1, next: { val: 2, next: null } }

console.log(removeNthFromEnd(list, 2))
