/**
 * 导出全局变量
 * @return {object} $CONFIG 全局变量
 * @return {object} $CONFIG.test 测试服务地址
 */

// eslint-disable-next-line no-unused-vars
var $CONFIG = (function () {
  var rootHost = 'http://xxx.com/api/v1'

  return {
    test: rootHost + '/test'
  }
})()
