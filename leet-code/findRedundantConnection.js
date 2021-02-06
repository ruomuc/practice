/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const n = edges.length
  // n条边，最多有n+1个节点
  const parent = new Array(n + 1).fill(0).map((v, i) => i)
  for (let i = 0; i < n; i++) {
    const ed = edges[i]
    const [node1, node2] = ed
    console.log('parent=', parent)
    if (find(parent, node1) !== find(parent, node2)) {
      // 如果没有找到相同的根节点，说明还没有环
      union(parent, node1, node2)
    } else {
      return ed
    }
  }
  return [0]
}

function union (parent, idx1, idx2) {
  parent[find(parent, idx1)] = find(parent, idx2)
}

function find (parent, idx) {
  if (parent[idx] !== idx) {
    parent[idx] = find(parent, parent[idx])
  }
  return parent[idx]
}

console.log(
  findRedundantConnection([
    [1, 2],
    [2, 3],
    [1, 3]
  ])
)
