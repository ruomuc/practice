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
  findChild(node, element) {
    // 找不到，返回空
    if (node.children.length === 0) {
      return null;
    }
    for (let index = 0; index < node.children.length; index++) {
      const e = node.children[index].element;
      if (element === e) {
        return node.children[index];
      }
    }
    return null;
  }
}

const strArray = ['cat', 'car', 'cover', 'city', 'driver', 'dog', 'door', 'deep']
const str = 'ca';
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

  // 逐个匹配字符串的字节，看是否能完全匹配，且最后一个字节在叶子节点
  const tempArray = [...str];
  let lastNode = dictTree.head;
  for (let index = 0; index < tempArray.length; index++) {
    lastNode = dictTree.findChild(lastNode, tempArray[index]);
    if (lastNode != null && index === tempArray.length - 1 && lastNode.children.length === 0) {
      // 如果找到了并且是最后一个节点，返回true
      return true;
    }
  }
  return false;
}
console.log(isAppear(str, strArray))