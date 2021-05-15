
class Singleton {
  constructor(name) {
    console.log('xxxx1', Singleton.instance)
    if (!Singleton.instance) {
      this.name = name;
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const s1 = new Singleton('s1')
const s2 = new Singleton('s2')
console.log(s1.name)
console.log(s2.name)


