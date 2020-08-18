/**
 * config note not managed by webpack
 * @param {object} $CONFIG 全局变量
 * @param {object} $CONFIG.SERVERAPI 服务地址列表
 * @param {string} $CONFIG.SERVERAPI.test 测试服务
 */

var $CONFIG = (function () {
  var rootHost = 'http://xxx.com/api/v1'
  var SERVERAPI = {
    test: rootHost + '/test'
  }

  return {
    SERVERAPI: SERVERAPI
  }
})()
