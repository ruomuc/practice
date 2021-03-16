// 函数借用

// 全局变量 data
var data = [
    { name: "Samantha", age: 12 },
    { name: "Alexis", age: 14 }
]
var user = {
    name: 'zm',
    // 局部变量 data
    data: [
        { name: "T. Woods", age: 37 },
        { name: "P. Mickelson", age: 43 }
    ],
    showData: function (event) {
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // random number between 0 and 1​
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    },
    showName: function (event) {
        console.log(this.name)
    }
}

var cars = {
    name: 'ruomu',
    data: [
        { name: "Honda Accord", age: 14 },
        { name: "Tesla Model S", age: 2 }
    ]
}
// 我们从之前定义的 user 对象借用 showData 方法
// 这里我们将 user.showData 方法绑定到刚刚新建的 cars 对象上​
cars.showData = user.showName.bind(cars);
cars.showData(); // Honda Accord 14​



// 柯里化
function greet(gender, age, name) {
    // if a male, use Mr., else use Ms.​
    var salutation = gender === "male" ? "Mr. " : "Ms. ";

    if (age > 25) {
        return "Hello, " + salutation + name + ".";
    }
    else {
        return "Hey, " + name + ".";
    }
}

var greetAnAdultMale = greet.bind(null, "male");
// console.log(greetAnAdultMale(1,'zm'))s