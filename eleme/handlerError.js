process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
  });
  
  Promise.resolve(true).then((res) => {
    return reportToUser(JSON.pasre(res)); // note the typo (`pasre`)
  }); // no `.catch` or `.then`