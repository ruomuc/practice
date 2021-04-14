package main

type Trie struct {
	children [26]*Trie
	isWord   bool
}

/** Initialize your data structure here. */
func Constructor() Trie {
	return Trie{}
}

/** Inserts a word into the trie. */
func (this *Trie) Insert(word string) {
	tempNode := this
	for _, c := range word {
		idx := c - 'a'
		// 如果当前位置为空，直接插入一个新的节点
		if tempNode.children[idx] == nil {
			tempNode.children[idx] = &Trie{}
		}
		// 接着当前节点往下插入
		tempNode = tempNode.children[idx]
	}
	// 每个字符串结束节点，isWord置为true
	tempNode.isWord = true
}

/** Returns if the word is in the trie. */
func (this *Trie) Search(word string) bool {
	tempNode := this
	for _, c := range word {
		idx := c - 'a'
		// 如果有一个为空的节点，直接返回false
		if tempNode.children[idx] == nil {
			return false
		}
		tempNode = tempNode.children[idx]
	}
	return tempNode.isWord == true
}

/** Returns if there is any word in the trie that starts with the given prefix. */
func (this *Trie) StartsWith(prefix string) bool {
	tempNode := this
	for _, c := range prefix {
		idx := c - 'a'
		// 如果有一个为空的节点，直接返回false
		if tempNode.children[idx] == nil {
			return false
		}
		tempNode = tempNode.children[idx]
	}
	return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Insert(word);
 * param_2 := obj.Search(word);
 * param_3 := obj.StartsWith(prefix);
 */
