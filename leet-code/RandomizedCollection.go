package main

import "math/rand"

// RandomizedCollection is ...
type RandomizedCollection struct {
	idxMap map[int]map[int]bool
	nums   []int
}

// Constructor is ...
func Constructor() RandomizedCollection {
	return RandomizedCollection{idxMap: map[int]map[int]bool{}}
}

/** Inserts a value to the collection. Returns true if the collection did not already contain the specified element. */
func (this *RandomizedCollection) Insert(val int) bool {
	ids, has := this.idxMap[val]
	if !has {
		ids = map[int]bool{}
		this.idxMap[val] = ids
	}
	ids[len(this.nums)] = true
	this.nums = append(this.nums, val)
	return !has
}

/** Removes a value from the collection. Returns true if the collection contained the specified element. */
func (this *RandomizedCollection) Remove(val int) bool {
	rIdx, has := this.idxMap[val]
	if !has {
		return false
	}

	var i int
	for id := range rIdx {
		i = id
		break
	}

	lastVal := this.nums[len(this.nums)-1]
	this.nums[i] = lastVal

	delete(this.idxMap[val], i)
	delete(this.idxMap[lastVal], len(this.nums)-1)

	if i < len(this.nums)-1 {
		this.idxMap[lastVal][i] = true
	}

	if len(rIdx) == 0 {
		delete(this.idxMap, val)
	}
	this.nums = this.nums[:len(this.nums)-1]
	return true
}

/** Get a random element from the collection. */
func (this *RandomizedCollection) GetRandom() int {
	return this.nums[rand.Intn(len(this.nums))]
}
