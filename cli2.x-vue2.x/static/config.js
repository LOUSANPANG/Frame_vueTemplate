/**
 * 导出全局变量
 * @return {object} $CONFIG 全局变量
 * @return {object} $CONFIG.SERVERAPI 服务地址列表
 * @return {string} $CONFIG.SERVERAPI.test 测试服务地址
 */

// eslint-disable-next-line no-unused-vars
var $CONFIG = (function () {
  var rootHost = 'http://xxx.com/api/v1'
  var SERVERAPI = {
    test: rootHost + '/test'
  }

  return {
    SERVERAPI: SERVERAPI
  }
})()
