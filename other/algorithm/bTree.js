/**
 * 二叉树的前中后序遍历
 */

const tree = [1, 2, 3, 4, 5, 6, 7]

/**
 * 前序遍历，默认根节点在0号元素
 * @param {*} tree 
 */
function preOrderTraverse(tree, index) {
  if (index > tree.length - 1) {
    return;
  }
  // 打印树的节点
  console.log('前序遍历，当前节点', tree[index]);
  // 依次递归左子树和右子树
  preOrderTraverse(tree, 2 * index + 1)
  preOrderTraverse(tree, 2 * index + 2)
}
preOrderTraverse(tree, 0);

/**
 * 中序遍历 左->父->右
 * @param {*} tree 
 * @param {*} index 
 */
function midOrderTraverse(tree, index) {
  if (index > tree.length - 1) {
    return;
  }
  midOrderTraverse(tree, index * 2 + 1)
  // 打印树的节点
  console.log('中序遍历，当前节点', tree[index]);
  midOrderTraverse(tree, index * 2 + 2)
}
midOrderTraverse(tree, 0)

/**
 * 后序遍历 左->右->父
 * @param {*} tree 
 * @param {*} index 
 */
function backOrderTraverse(tree, index) {
  if (index > tree.length - 1) {
    return;
  }
  backOrderTraverse(tree, index * 2 + 1)
  backOrderTraverse(tree, index * 2 + 2)
  console.log('后序遍历，当前节点', tree[index]);
}
backOrderTraverse(tree, 0)