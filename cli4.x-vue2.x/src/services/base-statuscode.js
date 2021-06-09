/**
 * 202 Accepted 已接受。已经接受请求，但未处理完成
 * 204 No Content 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
 * 400 Bad Request 客户端请求的语法错误，服务器无法理解
 * 401 Unauthorized 请求要求用户的身份认证
 * 403 Forbidden 服务器理解请求客户端的请求，但是拒绝执行此请求
 * 404 Not Found 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面
 * 408 Request Time-out 服务器等待客户端发送的请求时间过长，超时
 * 422 Unprocessable Entity ：客户端上传的附件无法处理，导致请求失败
 * 429 Too Many Requests：客户端的请求次数超过限额。
 * 500 Internal Server Error 服务器内部错误，无法完成请求
 * 502 Bad Gateway 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
 */

const statusCode = code => {
  const codes = {
    202: '202 Accepted',
    204: '204 No Content',
    400: '400 Bad Request',
    401: '401 Unauthorized',
    403: '403 Forbidden',
    404: '404 Not Found',
    408: '408 Request Time-out',
    422: '422 Unprocessable Entity',
    429: '429 Too Many Requests',
    500: '500 Internal Server Error',
    502: '502 Bad Gateway'
  }
  return codes[code]
}

export default statusCode
