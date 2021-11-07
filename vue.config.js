const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// // function outFilename(filename) {
// //   return filename;
// // }

module.exports = {
  // publicPath: '/',
  // outputDir: '../wwwroot',
  // filenameHashing: true,
  // pages: {
  //   index: {
  //     // entry for the page
  //     entry: 'src/main.ts',
  //     // the source template
  //     template: 'public/index.html',
  //     // output as dist/index.html
  //     filename: outFilename('index.html'),
  //     // when using title option,
  //     // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'Customer Service',
  //     // chunks to include on this page, by default includes
  //     // extracted common chunks and vendor chunks.
  //     chunks: ['chunk-vendors', 'chunk-common', 'index'],
  //   },
  // },
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
}
