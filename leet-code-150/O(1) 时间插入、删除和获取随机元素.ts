// https://leetcode.cn/problems/insert-delete-getrandom-o1/?envType=study-plan-v2&envId=top-interview-150

class RandomizedSet {
    private memo: Map<number, number>
    private nums: number[]

    constructor() {
        this.memo = new Map<number, number>()
        this.nums = []
    }

    insert(val: number): boolean {
        if (this.memo.has(val)) {
            return false
        }

        this.memo.set(val, this.nums.length)
        this.nums.push(val)
        return true
    }

    remove(val: number): boolean {
        if (!this.memo.has(val)) {
            return false
        }

        const idx: number = this.memo.get(val) as number
        const lastVal : number = this.nums[this.nums.length - 1]
        this.memo.set(lastVal, idx)
        this.nums[idx] = lastVal
        this.memo.delete(val)
        this.nums.pop()

        return true
    }

    getRandom(): number {
        const randomIdx : number = Math.floor(Math.random() * this.nums.length)
        return this.nums[randomIdx]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */