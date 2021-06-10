'use strict'
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const webpackConfig = require('./config/webpack.config.js')

const port = process.env.port || process.env.npm_config_port || 8080 // dev port
const isProd = process.env.NODE_ENV === 'production'

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: !isProd,
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
    // '^/api': {
    //   target: $CONFIG.test,
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/api': '/api'
    //   }
    // }
  },

  configureWebpack: config => {
    if(isProd) {
      // 压缩
      const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
      const plugins = []
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )
      config.plugins = [...config.plugins, ...plugins]
    }
  },

  chainWebpack(config) {
    webpackConfig(config)
  }
}
