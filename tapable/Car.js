const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
 } = require("tapable");

class Car {
  constructor() {
    this.hooks = {
      start: new SyncHook(),
      accelerate: new SyncHook(['newSpeed']),
      brake: new SyncHook(['newSpeed']),
      stop: new SyncHook()
    }
  }

  start() {
    this.hooks.start.call();
  }

  accelerateTo(newSpeed) {
    this.hooks.accelerate.call(newSpeed);
  }

  brakeTo(newSpeed) {
    this.hooks.brake.call(newSpeed);
  }

  stop() {
    this.hooks.stop.call();
  }
}

module.exports = Car;