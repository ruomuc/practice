class LinkNode {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkList {
  constructor () {
    // 定义头结点
    this.head = null
    // 定义尾节点
    this.tail = null
  }
  add (element) {
    if (this.head == null) {
      this.head = new LinkNode(element)
      this.tail = this.head
    } else {
      this.tail.next = new LinkNode(element)
      this.tail = this.tail.next
    }
  }
  del (element) {
    let cur = this.head
    // 如果是头结点
    if (this.head.element === element) {
      this.head = this.head.next
    }
    // 否则
    while (cur.next != null) {
      if (cur.next.element === element) {
        cur.next = cur.next.next
      }
    }
  }
  search (element) {
    let cur = this.head
    while (cur.next != null) {
      if (cur.element === element) {
        return true
      }
      cur = cur.next
    }
    // 找不到返回false
    return false
  }
}

class HashTable {
  constructor () {
    this.table = []
  }
  hashFunc (key) {
    return key % 11
  }
  add (element) {
    const addre = this.hashFunc(element)
    if (this.table[addre] == null) {
      const linkList = new LinkList()
      linkList.add(element)
      this.table[addre] = linkList
    } else {
      const linkList = this.table[addre]
      linkList.add(element)
    }
  }
  search (element) {
    const addre = this.hashFunc(element)
    console.log('addre', addre)
    if (this.table[addre] == null) {
      return false
    }
    return this.table[addre].search(element)
  }
}

const arr = [7, 8, 30, 11, 18, 9, 14]
const hashTable = new HashTable()
function initHashTable (arr, hashTable) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    hashTable.add(element)
  }
}

initHashTable(arr, hashTable)
console.log(hashTable)
console.log(hashTable.search(3))
