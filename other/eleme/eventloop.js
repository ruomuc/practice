setTimeout(() => {
	console.log('timeout')
}, 0)

let interval = setInterval(() => {
	console.log('interval')
	clearInterval(interval)
}, 1)



setImmediate(() => {
	console.log('immediate')
})

process.nextTick(() => { console.log('nextTick') })

let promiseFun = new Promise(resolve => {
	resolve(true)
})
promiseFun
	.then(() => {
		console.log('promise')
	})