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
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head == null) {
    return head
  }

  const halfCut = function (link) {
    console.log('halfcut in--', link)
    let fast = link
    let slow = link
    while (fast && fast.next && fast.next.next) {
      fast = fast.next.next
      slow = slow.next
    }
    const lr = slow.next
    slow.next = null
    console.log('halfcut--', link, lr)
    return { ll: link, lr }
  }

  const merge = function (l1, l2) {
    console.log('merge in---', l1, l2)
    let prev = new ListNode()
    const head = prev

    while (l1 || l2) {
      if (l1 == null) {
        prev.next = l2
        break
      } else if (l2 == null) {
        prev.next = l1
        break
      }

      if (l1.val < l2.val) {
        prev.next = l1
        l1 = l1.next
      } else {
        prev.next = l2
        l2 = l2.next
      }
      prev = prev.next
    }
    console.log('merge out---', JSON.stringify(head.next))
    return head.next
  }

  const dfs = function (head) {
    // 如果长度是1，直接返回
    if (head.next == null) {
      return head
    }
    // 分割成左右两部分
    const { ll, lr } = halfCut(head)
    return merge(dfs(ll), dfs(lr))
  }
  const res = dfs(head)
  console.log(res)
}

var head = {
  val: 4,
  next: { val: 2, next: { val: 1, next: { val: 3, next: null } } }
}
console.log(sortList(head))
