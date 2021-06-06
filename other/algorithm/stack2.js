/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。有效字符串需满足：左括号必须与相同类型的右括号匹配，左括号必须以正确的顺序匹配。
 * 例如，{ [ ( ) ( ) ] } 是合法的，而 { ( [ ) ] } 是非法的。
 */

const str = '{[()]()[]{}()90[]{([[[[]]]((()))])}}';
const str2 = '{\a;.;{}[as](.*&%&)()90)[{sas\}]([121]31)}}';

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

function verifyStr(str) {
  if (str.length === 0) {
    return false;
  }
  const stack = new orderStack();
  for (const ch of str) {
    if (ch === '[' || ch === '{' || ch === '(') {
      // 遇到左括号进栈
      stack.enStack(ch);
    }
    if (ch === ']' || ch === '}' || ch === ')') {
      // 遇到右括号出栈,并且判断是否对应
      const selement = stack.outStack();
      if ((ch === ']' && selement === '[') || (ch === '}' && selement === '{') || (ch === ')' && selement === '(')) {
        continue;
      }
      console.log(ch, selement)
      return false;
    }
  }
  return true;
}

console.log(verifyStr(str))
