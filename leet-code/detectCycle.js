/**
 * 节点构造函数
 * @param {*} element
 */
function listNode (element) {
  this.element = element //当前节点的元素
  this.next = null //下一个节点链接
}
/**
 * 查找链表的最后一个节点
 * @param {*} list
 */
function findLast (list) {
  var currNode = list
  while (currNode.next != null) {
    currNode = currNode.next
  }
  return currNode
}
/**
 * 查找指定节点
 * @param {*} list
 * @param {*} element
 */
function findNode (list, element) {
  let curr = list
  while (curr.element !== element) {
    curr = curr.next
  }
  if (element === curr.element) {
    return curr
  }
}
/**
 * 插入一个新元素到链表中
 * @param {*} newElement
 * @param {*} list
 */
function insert (newElement, list) {
  let lastNode = findLast(list)
  let newNode = new listNode(newElement)
  lastNode.next = newNode
  return list
}
/**
 * 打印链表
 * @param {*} list
 */
function display (list) {
  let curr = list
  let str = ''
  while (curr) {
    str += curr.element + '->'
    curr = curr.next
  }
  str += 'null'
  console.log(str)
}

/**
 * 初始化一个有环的单链表
 */
const array = [1]
function initRoundLink (array) {
  let linkList = null
  for (let index = 0; index < array.length; index++) {
    if (!linkList) {
      linkList = new listNode(array[index])
    } else {
      insert(array[index], linkList)
    }
  }
  // 给链表套上环，9->5
  // const head = findNode(linkList, -5)
  // const tail = findNode(linkList, -5)
  // tail.next = head
  return linkList
}
const linkList = initRoundLink(array)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head == null) {
    return null
  }
  let fast = head
  let slow = head
  while (fast != null) {
    if (fast != null && fast.next != null && fast.next.next != null) {
      slow = slow.next
      fast = fast.next.next
    } else {
      return null
    }

    if (fast === slow) {
      break
    }
  }
  let p = head
  while (p !== slow) {
    p = p.next
    slow = slow.next
  }
  return p
}

console.log(detectCycle(linkList))
