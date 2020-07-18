
class Singleton {
  name = ''
  constructor(name) {
      this.name = name
  }
  static getInstance(name) {
      // 判断是否已经new过1个实例
      if (!Singleton.instance) {
          // 若这个唯一的实例不存在，那么先创建它
          Singleton.instance = new Singleton(name)
      }
      // 如果这个唯一的实例已经存在，则直接返回
      return Singleton.instance
  }
}


const s1 = Singleton.getInstance('s1')
const s2 = Singleton.getInstance('s2')

console.log(s1.name) //s1
console.log(s2.name) // s1