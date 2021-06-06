/**
 * 层序遍历
 */

class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class BTree {
  constructor(elements) {
    if (elements == null) {
      this.head = null;
    } else {
      const treeNodes = []
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        treeNodes.push(new Node(element))
      }

      const queue = [];
      queue.push(treeNodes[0]);
      for (let index = 0; index < treeNodes.length;) {
        const node = queue.shift()
        index++;
        queue.push(treeNodes[index]);
        node.left = treeNodes[index];
        index++;
        queue.push(treeNodes[index]);
        node.right = treeNodes[index];
      }
      this.head = treeNodes[0];
    }
  }
  // 队列实现
  sequenceTraverseStack() {
    const queue = [];
    queue.push(this.head);
    while (queue.length > 0) {
      const node = queue.shift();
      console.log(`层序遍历:${node.element}`)
      if (node.left != null) {
        queue.push(node.left)
      }
      if (node.right != null) {
        queue.push(node.right)
      }
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const tree = new BTree(arr);
console.log(JSON.stringify(tree.head))
tree.sequenceTraverseStack();