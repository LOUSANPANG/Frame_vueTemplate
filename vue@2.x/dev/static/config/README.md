#### 1.1 使用`static config.js` 添加静态全局服务route（对应微服务、不同环境地址切换服务前缀）

#### 1.2 引入
```
index.html 引入
<script src="./static/config.js"></script>
```

#### 1.3 关闭检测
```
.eslintrc.js 关闭eslint检测
module.exports = {
  globals: {
    $CONFIG: false
  }
}
```

#### 1.4 使用
```
src/main.js 使用全局服务变量
window.$CONFIG = $CONFIG
```