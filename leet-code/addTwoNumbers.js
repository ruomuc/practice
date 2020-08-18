/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let node = new ListNode('head')
  let temp = node
  let add = 0
  let sum = 0
  while (l1 || l2) {
    // 求和,add是上一次计算的进位
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add
    temp.next = new ListNode(sum % 10)
    temp = temp.next
    add = sum >= 10 ? 1 : 0
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  // 处理最后一位的进位
  if (add > 0) {
    temp.next = new ListNode(add)
  }
  return node.next
}

function ListNode (val) {
  this.val = val
  this.next = null
}

// 测试数据
let l1, l2
l1 = new ListNode(9)
l1.next = new ListNode(2)
l1.next.next = new ListNode(9)
l2 = new ListNode(2)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

console.log(addTwoNumbers(l1, l2))
