(async () => {
    let getPromise = (key) => new Promise(resolve => {
        setTimeout(() => {
            console.log('reduce item:', key ** 2)
            resolve(key ** 2)
        }, 1000)
    })

    console.log('reduce start')
    console.log('reduce result:', await [1, 2, 3, 4].reduce((result, cursor) => {
        return async () => {
            return await result() + await getPromise(cursor)
        }
    }, async () => 0)())
    console.log('reduce end')
})()

