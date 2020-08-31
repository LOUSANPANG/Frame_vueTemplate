
## 一、结构

```
在`src/`文件下

├─services // 请求文件
|    ├─base-axiosconfig.js axios封装（请求拦截、响应拦截、错误统一处理）
|    ├─base-statuscode.js request请求状态码
|    ├─service-list
|    |  ├─service-test // 对应组件下的请求服务地址
|    |  └index.js // api接口的统一出口
├─static // 配置文件 (对于微服务，多对多服务)
```

## 二、使用

### 依赖环境
```
axios vuex ant-design-vue

npm i -D axios
```

### 为了方便api的调用，我们需要将其挂载到vue的原型上。在main.js中

```
// main.js
import $API from '@/services/service-list' // 导入
Vue.prototype.$API = $API // 挂载到vue的原型上

// index.vue
this.$API.getTestService({
  userName: 'xxx',
  password: 'xxx'
}).then(res => {
  // ...
})
```

### 引入 `static` 文件

```
// index.html
<script src="./static/config_dev.js"></script>
<script src="./static/config_master.js"></script>
<script src="./static/config.js"></script>

// main.js
window.$CONFIG = $CONFIG
```


## 三、关于配置问题`axios_config.js`

### 3.1 错误信息提示

* 使用`ant-design-vue`作为错误信息提示

### 3.2 vuex
* 使用vuex作为存储登录、无网络、状态管理
* 检查`token`是否过期，重新赋值vuex状态`loginSuccess` 、`token`
* 检测网络状态，重新赋值vuex状态`changeNetwork`

### 3.3 添加无网络页面组件提示

### 3.4 在微服务多路由环境下的`staic`的配置环境路由
