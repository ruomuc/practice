const { map } = require("lodash")

const m = new Map()
m.set('a', 1).set(1, "a")
console.log(m)

const a = { 'a': 1, 'a': 2 }
console.log(a)