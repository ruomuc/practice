
function treeNode(element) {
  this.element = element;
  this.left = null;
  this.right = null;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function initLinkTree(arr) {
  const treeNodes = []
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    treeNodes.push(new treeNode(element))
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
  return treeNodes[0]
}

console.log(initLinkTree(arr))
