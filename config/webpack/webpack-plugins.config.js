const webpack = require('webpack') 

const plugins = options => ({
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
})

module.exports = {
  plugins
}
