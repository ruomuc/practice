//addMethod
function addMethod(object, name, fn) {
    var old = object[name];
    object[name] = function () {
        if (fn.length === arguments.length) {
            return fn.apply(this, arguments);
        } else if (typeof old === "function") {
            console.log('err', old)
            return old.apply(this, arguments);
        }
    }
}


var people = {
    values: ["Dean Edwards", "Alex Russell", "Dean Tom"]
};

/* 下面开始通过addMethod来实现对people.find方法的重载 */

// 不传参数时，返回peopld.values里面的所有元素
addMethod(people, "find", function () {
    return this.values;
});

// 传一个参数时，按first-name的匹配进行返回
addMethod(people, "find", function (firstName) {
    var ret = [];
    for (var i = 0; i < this.values.length; i++) {
        if (this.values[i].indexOf(firstName) === 0) {
            ret.push(this.values[i]);
        }
    }
    return ret;
});

// 传两个参数时，返回first-name和last-name都匹配的元素
addMethod(people, "find", function (firstName, lastName) {
    var ret = [];
    for (var i = 0; i < this.values.length; i++) {
        if (this.values[i] === (firstName + " " + lastName)) {
            ret.push(this.values[i]);
        }
    }
    return ret;
});

addMethod(people, "find", function (firstName, lastName) {
    var ret = [];
    for (var i = 0; i < this.values.length; i++) {
        if (this.values[i] === (firstName + " " + lastName)) {
            ret.push(this.values[i]);
        }
    }
    return ret;
});

console.log('people---', people)
// 测试：
// console.log(people.find()); //["Dean Edwards", "Alex Russell", "Dean Tom"]
// console.log(people.find("Dean")); //["Dean Edwards", "Dean Tom"]
console.log(people.find("Dean", "Edwards", "asas")); //["Dean Edwards"]