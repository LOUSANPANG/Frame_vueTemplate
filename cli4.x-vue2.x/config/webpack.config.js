const path = require('path')
const resolve = dir => path.resolve(__dirname, '../', dir)

module.exports = config => {
  // 根据环境不同，执行不同的配置
  if (process.env.NODE_ENV === 'production') {
    require('./webpack.config.prod.js')(config)
  } else {
    require('./webpack.config.dev.js')(config)
  }

  // 通用配置
  // 项目标题
  config.plugin('html').tap(args => {
    args[0].title = 'cli4-vue2'
    return args
  })

  // 设置路径别名
  config.resolve.alias
    .set('@', resolve('./src'))

  // 当页面很多时，会造成太多无意义的请求
  config.plugins.delete('prefetch')

  // 提高首屏速度，建议开启预加载
  config.plugin('preload').tap(() => [
    {
      rel: 'preload',
      fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
      include: 'initial'
    }
  ])
}
