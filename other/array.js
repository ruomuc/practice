// for...in
function A () {
  this.a = 1
}
A.prototype.b = 2

var a = new A()

for (const iterator of a) {
  console.log(iterator)
}

var arr = [11, 22]
arr.name = 12313
for (const key in arr) {
  console.log(key)
}
for (const iterator of Object.keys(arr)) {
  console.log(iterator)
}

for (const iterator of arr) {
  console.log(iterator)
}

// forEach
let list = ['a', 'b', 'c', 'd']

list.forEach((item, idx) => {
  if (item === 'a') {
    list.splice(1, 0, 'e')
  }
  console.log(item)
})

//reduce

let list = [
  { id: 1, parentId: '' },
  { id: 2, parentId: '' },
  { id: 3, parentId: '1' },
  { id: 4, parentId: '2' },
  { id: 5, parentId: '3' }
]

function listToTree (list) {
  let nodeInfo = list.reduce((data, node) => {
    node.children = []
    data[node.id] = node
    return data
  }, {})
  let result = []
  for (const v of list) {
    if (!v.parentId) {
      result.push(nodeInfo[v.id])
      continue
    }
    nodeInfo[v.parentId].children.push(nodeInfo[v.id])
  }

  return result
}
console.log(JSON.stringify(listToTree(list)))

const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
}

const dogName = adventurer.dog?.name
console.log(dogName)
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.())

// use strict
var obj = {}
console.log(obj.a.a)
console.log(obj.a?.a)

var obj = { }
console.log(obj.a ? obj.a.a : 0)
