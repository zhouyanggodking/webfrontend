// const p = new Promise(resolve => {
//   console.log('p')
//   setTimeout(() => resolve(200), 4000)
// })

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('p1')
//     reject('rejected')
//   }, 2000)
// })

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('p2')
//     resolve('good')
//   }, 3000)
// })

// p.then(data => {
//   // return Promise.reject('rejected')
// }).then(data => {
//   console.log(e)
// }).then(data => {
//   return Promise.reject('rejected2')
// }).catch(r => {
//   console.log(r)
// })

// Promise.all([p, p1, p2]).then(data => {
//   console.log(data)
// }).catch(e => {
//   console.log(e)
// })

// Promise.race([p, p1, p2]).then(data => {
//   console.log(data)
// }).catch(e => {
//   console.log(e)
// })


///////////////////////
const p3 = new Promise(resolve => {
  // throw new Error('error');
  resolve('king');
  console.log('after king')
}).then(console.log).catch((e) => console.log(e))

// setTimeout(console.log, 1000, 'test')

// throw new Error('king'); //此处抛出异常后，已经产生的异步会继续执行,  promise.then, promise.catch, setTimeout会接着执行

// p3.then(data => console.log('data')).catch(e => console.log(e))
