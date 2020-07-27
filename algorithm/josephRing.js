class loopQueue {
  constructor(len) {
    // 定义头和尾
    this.front = 0;
    this.tail = 0;
    // 定义数组
    this.queue = new Array(len);
    // 存一下队内元素个数
    this.len = 0;
  }
  enQueue(element) {
    if ((this.tail + 1) % this.queue.length == this.front) {
      throw new Error('队列已经满了！');
    }
    // 队尾进队
    this.queue[this.tail] = element;
    // 队尾指针后移
    this.tail = (this.tail + 1) % this.queue.length;
    this.len++;
  }
  deQueue() {
    if (this.front === this.element) {
      throw new Error('队列为空，不能出队！');
    }
    const element = this.queue[this.front];
    //出队元素置空 队头后移
    this.queue[this.front] = undefined;
    this.front = (this.front + 1) % this.queue.length;
    this.len--;
    return element;
  }
}

const array = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
const m = 3;

function josephRing(arr, m) {
  const queue = new loopQueue(arr.length + 1);
  // 先把数组的人全部放入队列中
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    queue.enQueue(element);
  }

  // 定义一个计数器
  let count = 0;
  // 定一个一个数组用于保存出队顺序
  const josepArr = [];
  while (queue.len > 0) {
    // 先出队
    const element = queue.deQueue();
    count++;
    if (count === m) {
      // 如果报数是m
      josepArr.push(element);
      count = 0;
    } else {
      // 如果不是再进队
      queue.enQueue(element);
    }
  }
  return josepArr;
}

console.log(josephRing(array, m));