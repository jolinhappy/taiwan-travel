const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// // function outFilename(filename) {
// //   return filename;
// // }

module.exports = {
  publicPath: process.env.NODE_ENV === "production"
    ? '/taiwan-travel/'
    : '/',
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
}
