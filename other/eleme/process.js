const http = require('http')

http.createServer(function (req, res) {
    res.end('hello')
    setTimeout(function () {
        res.end('hello')
    }, 1000)
}).listen(9090, () => {
    process.title = '单进程测试';
    console.log(`process.pid=${process.pid}`)
})

console.log(process.cwd())

const dns = require('dns')

console.log(dns.lookup('www.baidu.com', function (err) {
    console.log(err)
}))