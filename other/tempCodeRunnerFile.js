
const aaa =[{a:1},{b:2}]
const set = new Set(aaa)
const unique = [...set]
console.log(aaa[0] == unique[0])