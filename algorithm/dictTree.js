/**
 * 输入一个字符串，判断它在已有的字符串集合中是否出现过?（假设集合中没有某个字符串与另一个字符串拥有共同前缀且完全包含的特殊情况，
 * 例如 deep 和 dee。）如，已有字符串集合包含 6 个字符串分别为，cat, car, city, dog,door, deep。
 * 输入 cat，输出 true；输入 home，输出 false。
 */

/**
 * 用链表来实现
 * 因为字典树的子节点不一定是两个，所以用一个数组来存储吧
 */
class Node {
  constructor(element) {
    this.element = element;
    this.children = [];
  }
}

class DictTree {
  constructor() {
    // 根结点存一个非字母元素
    this.head = new Node('#');
  }
  add(node, element) {
    if (node.children.length === 0) {
      // 添加子节点，返回这个节点
      const newNode = new Node(element);
      node.children.push(newNode);
      return newNode;
    }
    for (let index = 0; index < node.children.length; index++) {
      const e = node.children[index].element;
      if (e === element) {
        // 如果元素已存在，返回这个节点
        return node.children[index];
      } else if (index === node.children.length - 1) {
        // 添加子节点，返回这个节点
        const newNode = new Node(element);
        node.children.push(newNode);
        return newNode;
      }
    }
  }
  search(node, element) {

  }
}

const strArray = ['cat', 'car', 'city', 'dog', 'door', 'deep']
const str = 'cat';
function isAppear(str, strArray) {
  // 首先生成字典树
  const dictTree = new DictTree();
  for (let index = 0; index < strArray.length; index++) {
    const element = strArray[index];
    let tempNode = dictTree.head;
    for (const v of element) {
      tempNode = dictTree.add(tempNode, v);
    }
  }
  console.log(JSON.stringify(dictTree));
}
isAppear(str, strArray)