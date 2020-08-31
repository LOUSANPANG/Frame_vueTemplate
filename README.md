### [来源](https://lousanpang.github.io/2019/10/11/frontend/vue/project-construction/)

### 描述
#### 关于vue，梳理了两篇文章，[一篇关于开发环境的搭建准备](https://lousanpang.github.io/2019/10/11/frontend/vue/project-construction/)，[另一篇关于生产环境的部署优化](https://lousanpang.github.io/2019/12/01/frontend/vue/project-optimization/)。

#### 这一篇是关于开发环境的搭建准备，主要是通过大纲和[代码库](https://github.com/LOUSANPANG/VueBuildTool)的方式进行列举参考。
<br>
<br>

### 一、构建工具配置方面
#### 1.1. [部署Angular 团队Git的规范，用 `git cz` 代替 `git commit`](https://lousanpang.github.io/2019/11/01/frontend/git/git/)

#### 1.2. [eslintc 全局变量、忽略规则配置](https://lousanpang.github.io/2018/07/05/other/use-eslint/)
```
.eslintrc.js

module.exports = {
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-new": 0,
    "no-unused-vars":0
  },
  globals: {
    $CONFIG: false,
    $API: false,
  }
}
```

#### 1.3. webpack（build、config文件）
<!-- - 构建工具打包图片、css路径问题 -->
- 修改host (便于访问、演示)
```
config/index.js

module.exports = {
  dev: {
    host: '0.0.0.0'
  }
}
```

- [webpack配置proxy (本地解决跨域，域名前缀问题)](https://webpack.docschina.org/configuration/dev-server/#devserverproxy)
- [如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。](https://cli.vuejs.org/zh/config/#devserver)
```
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '<url>', // 代理地址，这里设置的地址会代替axios中设置的baseURL
        ws: true, // proxy websockets
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: { // 重写url
          '^/api': '/api/v1' // target + /api/v1
          //pathRewrite: {'^/api': '/'} 重写之后url为 <url>/
          //pathRewrite: {'^/api': '/api'} 重写之后url为 <url>/api
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
```

- 修改alias （便捷的路径访问）
```
build/webpack.base.config.js

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
}
```
<br>
<br>


### 二、 添加常用文件方面
#### 2.1. [`static config.js` 添加静态全局服务route（对应微服务、不同环境地址切换服务前缀）](https://github.com/LOUSANPANG/VueBuildTool/tree/master/dev/static/config)

#### 2.2. `static lib` 添加静态资源（mapbox min.css min.js min.json）

#### 2.3. `src style` 样式文件
- [normalize.css 样式初始化1 (解决各浏览器初始化兼容问题)](https://github.com/LOUSANPANG/VueBuildTool/blob/master/dev/src/style/normalize.css) [参考资料 normalize.css](https://github.com/necolas/normalize.css)
- [reset.css 样式初始化2](https://github.com/LOUSANPANG/VueBuildTool/blob/master/dev/src/style/reset.css) [参考资料 base.css](https://github.com/kujian/simple-flexible/blob/master/base.css)
- [base.css 基础样式(滚动条等)](https://github.com/LOUSANPANG/VueBuildTool/blob/master/dev/src/style/base.css)
- font 字体
- mixin.less 功能样式(布局、方法、颜色)

#### 2.4. `src utils` 工具函数
- 常用方法工具函数

#### 2.5. 组件方面
- `src components` [loading组件](https://lousanpang.github.io/2019/05/01/frontend/css/common-css/#%E4%BA%8C%E3%80%81%E5%B8%B8%E7%94%A8%E7%9A%84css%E5%8A%A8%E7%94%BB)
- `src pages 404` [404页面](https://lousanpang.github.io/2019/05/01/frontend/css/common-css/#%E4%BA%94%E3%80%81404%E9%A1%B5%E9%9D%A2%E7%A4%BA%E4%BE%8B)
<br>
<br>


### 三 依赖、构建方面
#### 3.1. `src services`[axios二次封装、状态码、服务列表、全局错误提示](https://github.com/LOUSANPANG/VueBuildTool/tree/master/dev/src/services)
[component-taro-request](https://github.com/LOUSANPANG/component-taro-request)

#### 3.2. `src store` [vuex二次封装](https://github.com/LOUSANPANG/VueBuildTool/tree/master/dev/src/store)

#### 3.3. `less scss stylus`css模块包
- mixin.less
- variables.less

#### 3.4. ui库 + 二次封装
- [antdesign 目录树添加图标]((https://github.com/LOUSANPANG/VueBuildTool/tree/master/dev/src/custom-ui/ant-tree.vue))


#### 3.5. babel低版本兼容
- 1. 根目录下新建 .babelrc 文件
```
{
 "presets": ["@babel/preset-env"],
 "plugins": [
  "@babel/plugin-transform-runtime"
 ]
}
```

- 2. 修改 babel.config.js
```
const plugins = [];
if (['production', 'prod'].includes(process.env.NODE_ENV)) {
 plugins.push("transform-remove-console")
}
 
module.exports = {
 presets: [
  [
   "@vue/app",
   {
    "useBuiltIns": "entry",
    polyfills: [
     'es6.promise',
     'es6.symbol'
    ]
   }
  ]
 ],
 plugins: plugins
};
```

- 3. 修改 vue.config.js
```
module.exports = {
 transpileDependencies: ['webpack-dev-server/client'],
 chainWebpack: config => {
  config.entry.app = ['babel-polyfill', './src/main.js'];
 }
}
```

- 4. 修改 main.js 文件
```
import '@babel/polyfill';
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
```

- 5. 安装依赖
```
npm install --save-dev @babel/core @babel/plugin-transform-runtime @babel/preset-env es6-promise babel-polyfill babel-plugin-transform-remove-console
```

#### 3.6. `px2rem/vw` 适配方案
- px -> vw
```
1. npm i -D postcss-px-to-viewport

2. postcssrc.js
```

- [px -> rem](https://github.com/LOUSANPANG/VueBuildTool/tree/master/dev/src/px2rem)
```
1. 添加`flexible.js`

2. main.js
import '@/config/flexible'

3. variables.less
@designWidth: 1920;
@initRem: @designWidth/10rem;
.px2rem (@type, @px) {
  @{type}: @px/@initRem
}
```
<br>
<br>


### 四、规范方面
#### 4.1. [rule.vue vue规范文件示例]((https://github.com/LOUSANPANG/VueBuildTool/tree/master/dev/src/rules))

#### 4.2. [vue代码风格指南](https://cn.vuejs.org/v2/style-guide/)


<br>
<br>
<br>
