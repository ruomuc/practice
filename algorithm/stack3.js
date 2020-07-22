/**
 * 用栈实现浏览器的前进后退功能
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

class browserHistory {
  constructor() {
    // 当前页面
    this.now = null;
    // 后退栈
    this.backStack = new orderStack();
    // 前进栈
    this.aheadStack = new orderStack();
  }
  back() {
    if (this.backStack.top < 0) {
      throw new Error('后退栈为空!')
    }
    this.aheadStack.enStack(this.now);
    this.now = this.backStack.outStack()
    return this.now;
  }
  ahead() {
    if (this.aheadStack.top < 0) {
      throw new Error('前进栈为空!')
    }
    this.backStack.enStack(this.now);
    this.now = this.aheadStack.outStack();
    return this.now;
  }
  open(element) {
    // 进入一个新的网页
    if (this.now) {
      this.backStack.enStack(this.now);
      this.now = element;
    } else {

      this.now = element;
    }
    return this.now;
  }
}

const browser = new browserHistory();
browser.open('www.google.com');
browser.open('www.baidu.com');
browser.back()

browser.ahead()
browser.open('www.a.com');
browser.open('www.b.com');
console.log(browser);
