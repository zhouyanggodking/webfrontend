const pluginName = 'my-cust-plugin';

class MyCustPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('my cust plugin');
    });

    compiler.hooks.emit.tap(pluginName, compilation =>{
      console.log('about to output assets')
    })
  }
}

module.exports = MyCustPlugin;
