class Stack {
  constructor() {
    // 定义栈顶和栈底指针
    this.top = -1;
    this.bott = 0;
    // 定义栈和栈内元素的个数
    this.stack = [];
    this.len = 0;
  }
  // 进栈
  enStack(element) {
    // top的初始值是-1，所以要先++，再赋值
    this.top++;
    this.stack[this.top] = element;
    this.len++;
  }
  // 出栈
  deStack() {
    if (this.top < 0) {
      console.log('栈已经空了！')
      return;
    }
    const element = this.stack[this.top];
    this.top--;
    this.len--;
    return element;
  }
}

/**
 * 翻转一个句子中的单词
 * @param {*} words 
 */
function reverseWords(words) {
  // 先根据空格拆分一下
  const wordArr = [...words];
  const tempStack = new Stack();
  const wordStack = new Stack();
  let resultStr = '';

  for (let index = 0; index < wordArr.length; index++) {
    const element = wordArr[index];
    // 遇到空格，临时栈出栈，压进另一个栈中
    if (element === " ") {
      while (tempStack.top > -1) {
        wordStack.enStack(tempStack.deStack());
      }
      // 压一个空格进栈
      wordStack.enStack(" ");
    } else {
      // 压入一个临时栈中
      tempStack.enStack(element);
    }
  }
  // 把最后一个单词压栈
  while (tempStack.top > -1) {
    wordStack.enStack(tempStack.deStack());
  }

  // 把结果出栈
  while (wordStack.top > -1) {
    resultStr += wordStack.deStack()
  }
  return resultStr;
}

const words = 'google is the best';
console.log(reverseWords(words))