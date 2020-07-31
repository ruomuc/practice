/**
 * 二叉树的前中后序遍历的栈的实现
 */

class Stack {
  constructor() {
    this.top = -1;
    this.bott = 0;
    this.stack = [];
    this.len = 0;
  }
  enStack(element) {
    this.top++;
    this.len++;
    this.stack[this.top] = element;
  }
  deStack() {
    if (this.top < 0) {
      console.log('栈已空~');
      return;
    }
    const element = this.stack[this.top];
    this.stack[this.top] = undefined;
    this.top--;
    this.len--;
    return element;
  }
}

const tree = [1, 2, 3, 4, 5, 6, 7]

/**
 * 前序遍历
 * @param {*} tree 
 */
function preOrderTraverse(tree) {
  const stack = new Stack();
  // 因为这个数是数组存储的,所以存下标以便获取左右子节点
  stack.enStack(0);
  // 如果栈不为空循环
  while (stack.top > -1) {
    // 出栈，输出该节点的值
    const index = stack.deStack()
    const element = tree[index];
    console.log(`前序遍历，${element}`);

    // 先将右子节点入栈，再将左子节点入栈
    if (tree[index * 2 + 2] != null) {
      stack.enStack(index * 2 + 2);
    }
    if (tree[index * 2 + 1] != null) {
      stack.enStack(index * 2 + 1);
    }
  }
}
preOrderTraverse(tree);

/**
 * 中序遍历
 * @param {*} tree 
 */
function midOrderTraverse(tree) {
  
}