/**
 * 节点构造函数
 * @param {*} element 
 */
function listNode(element) {
  this.element = element;   //当前节点的元素
  this.next = null;         //下一个节点链接
}

// 单链表翻转
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

/**
 * 链表翻转
 * @param {*} list 
 */
function reverseList(list) {
  let prev = null, next; // 初始化前一个节点为 null
  // let curr = JSON.parse(JSON.stringify(list)); // current 当前节点
  let curr = list; // current 当前节点
  while (curr) {
    next = curr.next; // 记录下一个节点
    curr.next = prev; // 把当前节点指向 前一个节点
    prev = curr; // 移动prev
    curr = next;  // 移动当前节点
  }
  return prev;
}

var list = new listNode(1)
insert(2, list)
insert(3, list)
insert(4, list)
insert(5, list)
console.log('原链表')
display(list)
let prev = reverseList(list)
console.log('翻转后的链表')
display(prev)


/** 输出-----
原链表
1->2->3->4->5->null
翻转后的链表
5->4->3->2->1->null
-------- */


