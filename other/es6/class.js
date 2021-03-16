class Animals {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Cat extends Animals {
}

const cat = new Cat('huahua', 'male')
console.log(cat)