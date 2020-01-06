// mimic Promise.All

const PromiseAll = promiseArr => {
  let resolvedCount = 0;
  let resolvedValues = [];
  return new Promise((resolve, reject) => {
    // for (let index = 0; index < promiseArr.length; ++index) {
    //   Promise.resolve(promiseArr[index]).then(res => {
    //     resolvedCount++;
    //     resolvedValues[index] = res;
    //     if (resolvedCount === promiseArr.length) {
    //       resolve(resolvedValues);
    //     }
    //   }, reason => {
    //     reject(reason)
    //   })
    // }
    promiseArr.forEach((p, index) => {
      Promise.resolve(p).then(res => {
        resolvedCount++;
        resolvedValues[index] = res;
        if (resolvedCount === promiseArr.length) {
          resolve(resolvedValues);
        }
      }, reason => {
        reject(reason)
      })
    })
  })
};

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject('failed')

PromiseAll([p1, p2, p3]).then(console.log).catch(console.log)

