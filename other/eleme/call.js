// 全局变量​
var avgScore = "global avgScore";
var name = 'ruomu'

// 全局函数
function avg(arrayOfScores) {
    var avgScore = 10;
    // 分数相加并返回结果
    var sumOfScores = arrayOfScores.reduce(function (prev, cur, index, array) {
        return prev + cur;
    });

    // 这里的 "this" 会被绑定到全局对象上, 除非使用 Call 或者 Apply 明确指定 this 的指向
    this.avgScore = sumOfScores / arrayOfScores.length;
    this.name = 'ruomucc';
}

var gameController = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null
}

// // 调用 avg 函数, this 指向 window 对象​
// avg(gameController.scores);
// // 证明 avgScore 已经被设置为 window 对象的属性​
// console.log(global.avgScore); // 46.4​
// console.log(global.name); // 46.4​
// console.log(gameController.avgScore); // null​

// // 借用函数

// var anArrayLikeObj = { 0: "Martin", 1: 78, 2: 67, 3: ["Letta", "Marieta", "Pauline"], length: 4 };
// console.log(Array.prototype.pop.call(anArrayLikeObj));

// var obj = { 0: 'a', 1: 'b', 2: 'e', 3: 'c', length: 4 }

// console.log(Array.prototype.pop.call(obj))
// console.log(Array.prototype.pop.call(obj2))

// function transitionTo() {
//     // 因为 arguments 是一个类数组对象, 所以我们可以使用 slice()来处理它
//     // 参数 "1" 表示我们返回一个从下标为1到结尾元素的数组
//     console.log(JSON.stringify(arguments))
//     var args = Array.prototype.slice.call(arguments, 1);

//     // 添加该行代码用于查看 args 的值
//     console.log(args);

//     // 注释本例不需要使用到的代码
//     //doTransition(this, name, this.updateURL, args);​
// }

// // 使用案例
// transitionTo("contact", "Today", "20"); // ["Today", "20"]​

// var a = {}
// a[0] = 1;
// a[1] = 11;
// a[2] = 111;
// console.log(a.length)
// var people = {
//     values: ["Dean Edwards", "Alex Russell", "Dean Tom"]
// };
// console.log(people['find'])


// function caca() {
//     console.log(`arguments=${arguments},length=${arguments.length},type=${typeof arguments}`)
// }

// caca(1, 2, 3, 4, 'asa')