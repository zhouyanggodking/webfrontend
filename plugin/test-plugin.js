const pluginName = 'test-plugin';

class MyCustPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('test plugin');
    });
  }
}

module.exports = MyCustPlugin;
