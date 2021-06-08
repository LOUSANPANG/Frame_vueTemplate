// 生产环境
const prodPlugin = []
if (process.env.NODE_ENV === 'production') {
  prodPlugin.push([
    'transform-remove-console',
    {
      exclude: ['error', 'warn']
    }
  ])
}

module.exports = {
  "presets": [
    '@vue/cli-plugin-babel/preset'
  ],

  "plugins": [
    // element ui 按需加载
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],

    ...prodPlugin
  ]
}
