
/**
 * 层序遍历
 * @param {*} tree 
 * @param {*} index 
 */
function floorOrderTraverse(tree) {
  for (let index = 0; index < tree.length; index++) {
    console.log(tree[index]);
    console.log(tree[index * 2 + 1]);
    console.log(tree[index * 2 + 2]);
  }
}
floorOrderTraverse(tree)