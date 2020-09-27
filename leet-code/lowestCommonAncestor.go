package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val   int
 *     Left  *TreeNode
 *     Right *TreeNode
 * }
 */

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}
	for root != nil {
		if root.Val > p.Val && root.Val > q.Val {
			root = root.Left
		} else if root.Val < p.Val && root.Val < q.Val {
			root = root.Right
		} else if (root.Val > q.Val && root.Val < p.Val) || (root.Val < q.Val && root.Val > p.Val) {
			return root
		} else if root.Val == q.Val {
			return q
		} else if root.Val == p.Val {
			return p
		}
	}
	return root
}
