package main

import "strings"

func isValidSerialization(preorder string) bool {
	if preorder == "#" {
		return true
	}
	// 拆分为节点数组
	nodes := strings.Split(preorder, ",")
	// 定义入度和出度
	inDegree, outDegree := 0, 0
	for i, n := range nodes {
		if i == 0 {
			if n == '#' {
				return false
			}
			outDegree += 2
			continue
		}
		if n != '#' {
			outDegree += 2
		}
		inDegree++
		if i != len(nodes)-1 && inDegree >= outDegree {
			return false
		}
	}
	return inDegree == outDegree
}
