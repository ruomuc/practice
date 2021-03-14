package main

import "container/list"

const base = 111

type MyHashSet struct {
	data []list.List
}

/** Initialize your data structure here. */
func Constructor() MyHashSet {
	return MyHashSet{make([]list.List, base)}
}

func (this *MyHashSet) hash(key int) int {
	return key % base
}

func (this *MyHashSet) Add(key int) {
	if !this.Contains(key) {
		h := this.hash(key)
		this.data[h].PushBack(key)
	}
}

func (this *MyHashSet) Remove(key int) {
	h := this.hash(key)
	for d := this.data[h].Front(); d != nil; d = d.Next() {
		if d.Value.(int) == key {
			this.data[h].Remove(d)
		}
	}
}

/** Returns true if this set contains the specified element */
func (this *MyHashSet) Contains(key int) bool {
	h := this.hash(key)
	for d := this.data[h].Front(); d != nil; d = d.Next() {
		if d.Value.(int) == key {
			return true
		}
	}
	return false
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(key);
 * obj.Remove(key);
 * param_3 := obj.Contains(key);
 */
