const path = require('path')
const R    = require('ramda')

const WebpackConfig = require('./config/webpack')

const defaultConfig = {
  devtool: 'eval',
  context: path.resolve(__dirname, 'app'),
  entry: {
    app: './index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/app/dist')
  }
}

const config = options => R.mergeAll([
  defaultConfig,
  WebpackConfig.loaders(options),
  WebpackConfig.devServer(options),
  WebpackConfig.plugins(options)
])

module.exports = env => {
  _options = {
    devServer: {
      port: 3000,
      hot: true
    }
  }

  return (env === 'development') ? config(_options) : config()
}
