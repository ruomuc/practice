/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head == null) {
    return head
  }
  let slow = head
  let fast = head
  while (fast != null && fast.next != null && fast.next.next != null) {
    slow = slow.next
    fast = fast.next.next
  }

  let tail = reverseLink(slow.next)
  slow.next = null

  let front = head
  let result = true
  while (front != null && tail != null) {
    if (front.val !== tail.val) {
      result = false
    }
    front = front.next
    tail = tail.next
  }
  return result
}

function reverseLink (head) {
  let pre = null
  let curr = head
  while (curr != null) {
    let next = curr.next
    curr.next = pre
    pre = curr
    curr = next
  }
  return pre
}
