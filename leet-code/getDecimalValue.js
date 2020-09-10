/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function ListNode (val) {
  this.val = val
  this.next = null
}

var getDecimalValue = function (head) {
  let newList = reverseList(head)
  let sum = 0
  let i = 0
  while (newList != null) {
    sum += newList.val * Math.pow(2, i)
    newList = newList.next
    i++
  }
  return sum
}

function reverseList (head) {
  let curr = head
  let prev = null
  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
