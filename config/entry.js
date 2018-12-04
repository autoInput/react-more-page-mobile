const paths = require('./paths')

var webpackHotDevClient = require.resolve('react-dev-utils/webpackHotDevClient')
var entry = {
  index: [paths.appIndexJs],
  about: [paths.appSrc + '/pages/about/about.js']
}
if (process.env.NODE_ENV === 'development') {
  for (var item in entry) {
    entry[item].unshift(webpackHotDevClient)
  }
}
module.exports.entry = entry
