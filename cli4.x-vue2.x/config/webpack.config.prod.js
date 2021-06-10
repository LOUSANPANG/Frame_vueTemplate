const path = require('path')
const resolve = dir => path.resolve(__dirname, '../', dir)

module.exports = config => {
  // 压缩图片
  config.module
    .rule('images')
    .use('image-webpack-loader')
    .loader('image-webpack-loader')
    .options({
      mozjpeg: { progressive: true, quality: 65 },
      optipng: { enabled: false },
      pngquant: { quality: [0.65, 0.9], speed: 4 },
      gifsicle: { interlaced: false },
      webp: { quality: 75 }
    })

  config
    .plugin('ScriptExtHtmlWebpackPlugin')
    .after('html')
    .use('script-ext-html-webpack-plugin', [{
      // `runtime` 必须与 runtimeChunk 名称相同。默认是`运行时`
      inline: /runtime\..*\.js$/
    }])
    .end()

  // 分包
  config
    .optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        elementUI: {
          name: 'chunk-elementUI',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
          chunks: 'all',
          reuseExistingChunk: true,
          enforce: true
        },
        libs: {
          name: 'chunk-libs',
          priority: 10,
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial'
        },
        vendors: {
          name: 'chunk-vendors',
          priority: 2,
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          reuseExistingChunk: true,
          enforce: true
        },
        commons: {
          name: 'chunk-commons',
          priority: 5,
          test: resolve('./src/components'),
          chunks: 'initial',
          minChunks: 3,
          minSize: 0,
          maxInitialRequests: 5,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    })

  // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
  config.optimization.runtimeChunk('single')
}
