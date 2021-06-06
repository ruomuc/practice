/**
 * 顺序栈
 */
class orderStack {
  constructor() {
    this.stack = [];
    this.top = -1;
    this.bott = 0;
  }
  /**
   * 进栈
   * @param {*} element 进栈元素
   * @returns [] 返回新栈
   */
  enStack(element) {
    this.top++;
    this.stack[this.top] = element;
    return this.stack
  }
  /**
   * 出栈
   * @returns {any} 返回出栈的元素
   */
  outStack() {
    const element = this.stack[this.top];
    this.stack[this.top] = undefined;
    this.top--;
    return element;
  }
}

const stack = new orderStack();
stack.enStack(1);
stack.outStack();
stack.enStack(1);
stack.enStack(2);
stack.enStack(3);
stack.enStack(1);
stack.outStack();
stack.outStack();

console.log(stack)


/**
 * 链式栈
 */
class linkNode {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class linkStack {
  constructor() {
    this.top = null;
    this.curr = null;
  }

  /**
   * 进栈
   * @param {*} element 进栈元素
   * @returns [] 返回新栈
   */
  enStack(element) {
    if (!this.top) {
      this.curr = new linkNode(element);
      this.top = this.curr;
    }
    const newNode = new linkNode(element);
    newNode.next = this.curr;
    this.top = newNode;
    this.curr = this.top;
    return this.top
  }
  /**
   * 出栈
   * @returns {any} 返回出栈的元素
   */
  outStack() {
    const element = this.top.element;
    this.top = this.top.next;
    this.curr = this.curr;
    return element;
  }
}

const lStack = new linkStack();
lStack.enStack(1);
lStack.enStack(2);
lStack.enStack(3);
lStack.enStack(31);

lStack.outStack();

console.log(lStack.top);