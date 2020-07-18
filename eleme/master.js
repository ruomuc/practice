const fork = require('child_process').fork;
const cpus = require('os').cpus()
const http = require('http')

const server = http.createServer().listen(8000, () => {
    process.title = 'node主进程';
})

const workers = {};

const creatWorkers = () => {
    const worker = fork('worker.js');
    worker.on('message', function (message) {
        console.log('master message', message)
        if (message.act === 'suicide') {
            creatWorkers();
        }
    })

    worker.on('exit', function (code, signal) {
        console.log(`worker process exit,code=${code},signal=${signal}`);
        delete workers[worker.pid];
    })

    worker.send('server', server)
    workers[worker.pid] = worker;
    console.log(`worker process created,pid=${worker.pid},ppid=${process.pid}`)
}


const close = (code) => {
    console.log(`进程退出,code=${code}`);
    if (code !== 0) {
        for (let pid in workers) {
            console.log(`master process exit,kill worker pid=${pid}`);
            workers[pid].kill('SIGINT');
        }
    }
    process.exit(0);
}

// process.once('exit', close.bind(this));

for (let i = 0; i < cpus.length; i++) {
    creatWorkers()
}



// for (let i = 0; i < cpus.length; i++) {
//     const worker = fork('worker.js');
//     console.log('worker process created, pid: %s ppid: %s', worker.pid, process.pid);
// }
