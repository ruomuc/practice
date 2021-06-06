class linkQueue {
  constructor() {
    this.front = new listNode(null);
    this.tail = this.front;
  }
  enQueue(element) {
    const newNode = new listNode(element);
    // 把新元素放到尾结点的下一节点,队尾
    this.tail.next = newNode;
    // tail队尾指针下移
    this.tail = newNode;
  }
  deQueue() {
    if (this.front === this.tail && this.front.next == null) {
      throw new Error('队列为空，无法出队~~')
    }
    // 把头指针的next指向的节点返回，头指针的next指向其原来next指向节点的next节点。 emm...
    const element = this.front.next.element;
    this.front.next = this.front.next.next;
    if (this.front.next == null) {
      // 如果出队的是最后一个节点，那么把他指向头结点
      this.tail = this.front;
    }
    return element;
  }
}

function listNode(element) {
  this.element = element;   //当前节点的元素
  this.next = null;         //下一个节点链接
}

const queue = new linkQueue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
console.log(queue.deQueue())
console.log(queue.deQueue())
console.log(queue.deQueue())
console.log(queue.deQueue())

console.log(JSON.stringify(queue));
