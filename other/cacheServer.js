const http = require('http')

http.createServer(function (req, res) {
  res.setHeader('expires', new Date())
  res.setHeader('Cache-Control', 'max-age=3000')
  res.end('hello world!\n')
})
  .listen(3333)