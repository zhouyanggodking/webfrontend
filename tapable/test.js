const Car = require('./Car');

const myCar = new Car();
myCar.hooks.start.tap({
  name: 'test',
  context: true   // set context
}, (context) => {
  console.log(`car running status: ${context.running}`)
  console.log('car started')
});

myCar.hooks.accelerate.tap('test', (newSpeed) => {
  console.log(`accelerate to ${newSpeed}`)
});

myCar.hooks.accelerateWaterfall.tap('test', (newSpeed) => {
  console.log(`accelerate to ${newSpeed} in waterfall`)
  return 1000;
});

myCar.hooks.accelerateWaterfall.tap('test', (newSpeed) => {
  console.log(`accelerate to ${newSpeed} in waterfall2`)
});

myCar.hooks.accelerateBail.tap('test', (newSpeed) => {
  console.log(`accelerate to ${newSpeed} in bail1`)
  return '';
});

myCar.hooks.accelerateBail.tap('test', (newSpeed) => {
  console.log(`accelerate to ${newSpeed} in bail2`)  
});

myCar.hooks.accelerateLoop.tap('test', (newSpeed) => {
  console.log(`accelerate to ${newSpeed} in loop1`)
  if (newSpeed < 200) {
    return 300;
  }
});

myCar.hooks.accelerateLoop.tap('test', (newSpeed) => {
  console.log(`accelerate to ${newSpeed} in loop2`)
});

myCar.hooks.brake.tap('test', (newSpeed) => {
  console.log(`brake to ${newSpeed}`)
});

myCar.hooks.stop.tap('test', () => {
  console.log('car stopped')
});

myCar.hooks.start.intercept({
  context: true,
  call(context) {
    console.log(context)
    console.log('start interceptor')
  },
  tap(context, tapInfo) {
    console.log(tapInfo)
    if (context) {
      context.running = true;
    }
  },
  register(tapInfo) { // no context as tested
    console.log(`start interceptor register - ${tapInfo.name}`)
    return tapInfo;
  }
})


myCar.start();

myCar.accelerateTo(100);

myCar.brakeTo(50);

myCar.stop();
