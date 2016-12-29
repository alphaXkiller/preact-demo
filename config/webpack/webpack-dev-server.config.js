const { pathOr } = require('ramda')

const DEFAULT_PORT = 8080;

const devServer = options => ({
  devServer: {
    stats: 'errors-only',
    port: pathOr(DEFAULT_PORT, ['devServer', 'port'], options),
    hot: pathOr(false, ['devServer', 'hot'], options), 
    publicPath: '/app/dist/',
    historyApiFallback: true
  }
}) 

module.exports = {
  devServer
}
