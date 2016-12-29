const { plugins } = require('./webpack-plugins.config.js') 
const { loaders } = require('./webpack-module.config.js') 
const { devServer } = require('./webpack-dev-server.config.js') 

module.exports = {
  plugins, loaders, devServer
}
