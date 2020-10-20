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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head == null || head.next == null || head.next.next == null) {
    return head
  }
  let { top, tail } = findMidNode(head)
  tail = reverseLink(tail)
  return mergeLink(top, tail)
}

function findMidNode (head) {
  let fast = head
  let slow = head

  while (fast != null && fast.next != null && fast.next.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  let tail = slow.next
  slow.next = null
  return { top: head, tail }
}

function reverseLink (head) {
  let pre = null
  let curr = head
  let next = null

  while (curr != null) {
    next = curr.next
    curr.next = pre
    pre = curr
    curr = next
  }
  return pre
}

function mergeLink (l1, l2) {
  let head = new ListNode(-1)
  let temp = head
  while (l1 || l2) {
    if (l1 == null) {
      temp.next = l2
      break
    }
    if (l2 == null) {
      temp.next = l1
      break
    }

    temp.next = l1
    l1 = l1.next
    temp = temp.next

    temp.next = l2
    l2 = l2.next
    temp = temp.next
  }
  return head.next
}

console.log(
  reorderList({
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 4, next: null } } }
  })
)

// console.log(
//   findMidNode({ val: 1, next: { val: 2, next: { val: 3, next: null } } })
// )

// console.log(
//   JSON.stringify(
//     mergeLink(
//       { val: 1, next: { val: 2, next: { val: 3, next: null } } },
//       {
//         val: 4,
//         next: { val: 5, next: { val: 6, next: { val: 7, next: null } } }
//       }
//     )
//   )
// )
