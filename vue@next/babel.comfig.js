module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@vue/app', {
      ployfills: [
        'es.promise',
        'es.symbol'
      ]
    }]
  ]
}
