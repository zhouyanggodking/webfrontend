const promiseRace = promiseArr => {
  return new Promise((resolve, reject) => {
    promiseArr.forEach(p => {
      Promise.resolve(p).then(resolve, reject)
    })
  })
}