package main

var hignBit = 30

type Trie struct {
	left, right *Trie
}

func (t *Trie) add(num int) {
	cur := t
	for i := hignBit; i >= 0; i-- {
		bit := num >> i & 1
		if bit == 0 {
			if cur.left == nil {
				cur.left = &Trie{}
			}
			cur = cur.left
		} else {
			if cur.right == nil {
				cur.right = &Trie{}
			}
			cur = cur.right
		}
	}
}

func (t *Trie) check(num int) (ans int) {
	cur := t
	for i := hignBit; i >= 0; i-- {
		bit := num >> i & 1
		if bit == 0 {
			if cur.right != nil {
				cur = cur.right
				ans = ans*2 + 1
			} else {
				cur = cur.left
				ans = ans * 2
			}
		} else {
			if cur.left != nil {
				cur = cur.left
				ans = ans*2 + 1
			} else {
				cur = cur.right
				ans = ans * 2
			}
		}
	}
	return
}

func findMaximumXOR(nums []int) (ans int) {
	root := &Trie{}
	for i := 1; i < len(nums); i++ {
		root.add(nums[i-1])
		ans = max(ans, root.check(nums[i]))
	}
	return
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
