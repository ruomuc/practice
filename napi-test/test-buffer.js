const buffer = require('bindings')('buffer-test')

// 创建Node.js Buffer
const nb = Buffer.from([1, 2, 3, 4, 5]);

// 调用C++函数并将Buffer传递给它
console.log(nb)
buffer.useBuffer(nb, 12);
console.log(nb)
