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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) {
    return l2
  } else if (l2 == null) {
    return l1
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(-1)
  let pre = head
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      pre.next = l1
      l1 = l1.next
      pre
    } else {
      pre.next = l2
      l2 = l2.next
    }
    console.log(JSON.stringify(pre))
    pre = pre.next
  }
  if (l1 == null) {
    pre.next = l2
  } else {
    pre.next = l1
  }
  return head.next
}

var l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } }
var l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } }

console.log(mergeTwoLists(l1, l2))
