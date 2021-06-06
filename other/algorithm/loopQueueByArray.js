// 数组实现循环队列

let queue = [];
let queueLen = 10;
let head = 0, tail = 0;

function enQueue() {
  if (arguments.length === 0) {
    return
  }
  for (let key in arguments) {
    if ((tail + 1) % queueLen === head) {
      // 因为尾部要留一个位置，所以容量是 length-1
      throw Error('队列已满！')
    }
    queue[tail] = arguments[key]; // 元素放入尾部
    tail = (tail + 1) % queueLen; // 尾部后移一位
    console.log(`下标为${tail}的元素${arguments[key]}入队`)
  }
  console.log(`当前队列为${queue}`)
}

/**
 * @returns {element} 返回一个元素
 */
function deQueue() {
  // 头部后移一位
  console.log(`下标为${head}的元素${queue[head]}出队`)
  console.log(`当前队列为${queue}`)
  let element = queue[head];
  head = (head + 1) % queueLen;
  return element
}

enQueue(1, 2, 3, 4, 5, 6, 7, 8, 9)
deQueue()
enQueue(110)
deQueue()
enQueue(120)
deQueue()
enQueue(114)