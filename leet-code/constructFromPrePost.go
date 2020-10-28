package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func constructFromPrePost(pre []int, post []int) *TreeNode {
	pLen := len(pre)
	if pLen == 0 {
		return nil
	}
	var root *TreeNode = new(TreeNode)
	root.Val = pre[0]
	if pLen == 1 {
		return root
	}

	N := -1
	for i := range post {
		if post[i] == pre[1] {
			N = i + 1
		}
	}

	root.Left = constructFromPrePost(pre[1:N+1], post[0:N])
	root.Right = constructFromPrePost(pre[N+1:pLen], post[N:len(post)-1])
	return root
}
