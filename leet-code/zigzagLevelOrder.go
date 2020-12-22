package main
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func zigzagLevelOrder(root *TreeNode) [][]int {
	var queue []*TreeNode 
	var level int
	var res [][]int
	if root == nil{
			return res
	}

	queue = append(queue,root)
	for len(queue) > 0 {
		size := len(queue)
		tempRes := make([]int,0)
		for i:=0;i<size;i++{
			temp := queue[i]
			tempRes = append(tempRes,temp.Val)
			if temp.Right != nil{
				queue = append(queue,temp.Right)
			}
			if temp.Left != nil{
				queue = append(queue,temp.Left)
			}
		}
				fmt.Println(tempRes,level & 1)
		if level & 1 == 0 {
			ReverseSlice(tempRes)
		}
		res = append(res,tempRes)
		queue = queue[size:]
		level+=1
	}
	return res
}

func ReverseSlice(s interface{}) {
	size := reflect.ValueOf(s).Len()
	swap := reflect.Swapper(s)
	for i, j := 0, size-1; i < j; i, j = i+1, j-1 {
			swap(i, j)
	}
}