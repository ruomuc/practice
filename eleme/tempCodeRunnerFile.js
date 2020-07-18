const dns = require('dns')

console.log(dns.lookup('www.baidu.com', function (err) {
    console.log(err)
}))