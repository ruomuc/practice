const fs = require('fs')

// 第一种
const readStream = fs.createReadStream(__dirname + '/a.txt', {
  highWaterMark: 11
})
let data = ''
readStream.on('data', chunk => {
  data += chunk
})
readStream.on('end', () => {
  console.log('有问题的数据:', data)
})

// // 第二种
const readStream2 = fs.createReadStream(__dirname + '/a.txt', {
  highWaterMark: 11
})
readStream2.setEncoding('utf-8')
let data2 = ''
readStream2.on('data', chunk => {
  // typeof chunk === 'string' 这里是utf-8格式的字符串了
  data2 += chunk
})
readStream2.on('end', () => {
  console.log('数据没问题,但是没有解决根本问题:', data2)
})

// 第三种

const readStream3 = fs.createReadStream(__dirname + '/a.txt', {
  highWaterMark: 11
})
let data3 = []
let size = 0
readStream3.on('data', chunk => {
  data3.push(chunk)
  size += chunk.length
})
readStream3.on('end', () => {
  const str = Buffer.concat(data3, size).toString('utf-8')
  console.log('最好的解决方案:', str)
})
