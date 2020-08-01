/**
 * 二叉树的前中后序遍历的栈的实现
 * ps: 用数组实现栈，代码比较难读。
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
 * 1. 如果栈不为空，栈顶元素出栈并输出；如果右子节点存在，进栈，如果左子节点存在，进栈；重复该过程。
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
 * 1. 如果栈非空并且栈顶元素左节点非空，将其入栈，重复。如果左节点为空进行第二步。
 * 2. 如果栈非空，栈顶元素出栈并输出；如果其右子节点非空，入栈返回第一步；否则重复第二步。
 * @param {*} tree 
 */
function midOrderTraverse(tree) {
  const stack = new Stack();
  stack.enStack(0);
  let i = 0;
  while (stack.top > -1) {
    // 如果栈顶元素左节点存在，将其入栈
    if (tree[stack.stack[stack.top] * 2 + 1] != null) {
      stack.enStack(stack.stack[stack.top] * 2 + 1);
    } else {
      while (stack.top > -1) {
        const index = stack.deStack();
        console.log(`中序遍历,${tree[index]}`);
        if (tree[index * 2 + 2] != null) {
          // 如果右元素存在，入栈
          stack.enStack(index * 2 + 2);
          break;
        }
      }
    }
  }
}
midOrderTraverse(tree);

/**
 * 后序遍历
 * 1. 如果栈不为空，并且栈顶元素左子节点不为空，左子节点入栈。如果左子节点为空，执行第二步。
 * 2. 如果栈顶元素右子节点为空或者上一次出栈的元素是他的右子节点，那么出栈并输出；反之将右子节点入栈，执行第一步。
 * @param {*} tree 
 */
function backOrderTraverse(tree) {
  const stack = new Stack();
  stack.enStack(0);
  let lastOutIndex;
  while (stack.top > -1) {
    while (tree[stack.stack[stack.top] * 2 + 1] != null) {
      stack.enStack(stack.stack[stack.top] * 2 + 1);
    }
    while (stack.top > -1) {
      // 如果当前节点没有有子节点 或者 上一次出栈的节点为当前节点的右子节点，输出
      if (tree[stack.stack[stack.top] * 2 + 2] == null || stack.stack[stack.top] * 2 + 2 === lastOutIndex) {
        lastOutIndex = stack.deStack()
        const element = tree[lastOutIndex];
        console.log(`后序遍历,${element}`);
      } else {
        stack.enStack(stack.stack[stack.top] * 2 + 2);
        break;
      }
    }
  }
  console.log(stack);
}
backOrderTraverse(tree);