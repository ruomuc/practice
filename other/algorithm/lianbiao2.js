// 奇数单链表寻找中间节点
/**
 * 节点构造函数
 * @param {*} element 
 */
function listNode(element) {
  this.element = element;   //当前节点的元素
  this.next = null;         //下一个节点链接
}
/**
 * 查找链表的最后一个节点
 * @param {*} list 
 */
function findLast(list) {
  var currNode = list
  while (currNode.next != null) {
    currNode = currNode.next
  }
  return currNode
}
/**
 * 插入一个新元素到链表中
 * @param {*} newElement 
 * @param {*} list 
 */
function insert(newElement, list) {
  let lastNode = findLast(list);
  let newNode = new listNode(newElement)
  lastNode.next = newNode
  return list
}
/**
 * 打印链表
 * @param {*} list 
 */
function display(list) {
  let curr = list
  let str = ''
  while (curr) {
    str += curr.element + '->'
    curr = curr.next;
  }
  str += 'null'
  console.log(str);
}

function getMiddleNode(list) {
  // 定义快慢两个指针
  let fast = list;
  let slow = list;

  // 如果快指针的后两个节点都不为空的话，继续后移
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // 最后慢指针的位置就是链表的中间节点
  return slow;
}

var list = new listNode(1)
insert(2, list)
insert(3, list)
insert(4, list)
insert(5, list)
display(list)
let middleNode = getMiddleNode(list)
console.log(middleNode)
/**
1->2->3->4->5->null
listNode {
  element: 3,
  next:
   listNode { element: 4, next: listNode { element: 5, next: null } } }
 */