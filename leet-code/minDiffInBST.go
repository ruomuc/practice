package main

import (
	"fmt"
	"math"
)

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func minDiffInBST(root *TreeNode) int {
	var stack []*TreeNode
	lastNum := -1
	ans := math.MaxInt64
	stack = append(stack, root)

	for len(stack) > 0 {
		tempNode := stack[len(stack)-1]
		if tempNode.Left != nil {
			stack = append(stack, tempNode.Left)
		} else {
			for len(stack) > 0 {
				tempNode := stack[len(stack)-1]
				stack = stack[0 : len(stack)-1]
				val := tempNode.Val
				fmt.Println(lastNum, val, ans)
				if lastNum != -1 && val-lastNum < ans {
					ans = val - lastNum
				}
				lastNum = val
				if tempNode.Right != nil {
					stack = append(stack, tempNode.Right)
					break
				}
			}
		}
	}
	return ans
}
