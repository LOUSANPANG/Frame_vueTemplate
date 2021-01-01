# cli2.x-vue2.x

* 基于`vue-cli 2.x`的`Vue2.x`项目模板

* 集成`vue(vuex、vue-router、axios)`

* 集成`antdesign-vue`

## 一、构建工具配置方面

### 1.1 部署`Angular` 团队Git的规范，用 `git cz` 代替 `git commit`，添加commitlint。

```bash
yarn add -g commitizen cz-conventional-changelog

echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc

yarn add -D commitizen cz-conventional-changelog

yarn add -D husky @commitlint/cli @commitlint/config-conventional
```

package.json中配置
```
"script": {
    "commit": "git-cz",
},
"config": {
  "commitizen": {
    "path": "node_modules/cz-conventional-changelog"
  }
},
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

新建.commitlintrc
```
module.exports = {
    extends: ['@commitlint/config-conventional']
};
```

自动生成CHANGELOG
```
yarn add -D standard-version
```

```
"script": {
  "release": "standard-version"
}
```

```
git add .
git cz
npm run release -- --dry-run // 检测提交日志是否正确
npm run release
git push --follow-tags origin dev
git push
```


### 1.2 `webpack`（build、config文件）

修改host
```
config/index.js

module.exports = {
  dev: {
    host: '0.0.0.0'
  }
}
```

### 1.3 修改`alias` （便捷的路径访问）

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

### 1.4 配置`prettier` `eslint` `editorConfig`
- 安装vscode插件
`prettier` `eslint` `EditorConfig for VS Code`

- 安装依赖
```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier @vue/eslint-config-prettier
```

- 配置`.editorconfig`
```bash
# http://editorconfig.org
root = true

# 说明
## 设置文件编码为 UTF-8；
## 用两个空格代替制表符；
## 在保存时删除尾部的空白字符；
## 在文件结尾添加一个空白行；
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```

- 配置`.eslintrc`
```js
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'standard',
    'plugin:vue/essential',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true, // 单引号
        'trailingComma': 'none', // 尾逗号
        'semi': false, // 尾分号
      },
    ],
    'generator-star-spacing': 'off',
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-new": 'off'
  },
  globals: {
    $CONFIG: false,
    $API: false,
  }
}
```

- 配置`.prettierrc`
```json
{
  "endOfLine": "auto" ,
  "printWidth": 100,
  "tabWidth": 2
}
```

- Tips [Delete `␍`eslint(prettier/prettier) ](https://juejin.cn/post/6844904069304156168)
  - 第一种方法：
    - yarn run lint --fix
  - 第二种方法：
    - 配置.prettierrc文件 "endOfLine": "auto"
  - 第三种方法：
    - git config --global core.autocrlf false
    - git全局配置之后，你需要重新拉取代码

- 集成`prettier`
```json
// .vscode/settings.json
{
    "workbench.colorTheme": "Atom One Dark",
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "workbench.iconTheme": "vscode-icons",
    "vsicons.dontShowNewVersionMessage": true,
    "editor.tabSize": 2,
    "editor.fontWeight": "normal",
    "editor.lineHeight": 24,
    "diffEditor.ignoreTrimWhitespace": false,
    "terminal.integrated.shell.windows": "D:\\Git\\Git\\bin\\bash.exe",
    "window.zoomLevel": 0,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
    },
    "explorer.confirmDragAndDrop": false,
    "launch": {
        "configurations": [],
        "compounds": []
    }
}
```



## 二、添加常用文件

### 2.1 `static/config.js` 添加静态全局服务`route`（对应微服务、不同环境地址切换服务前缀）

### 2.2 static/lib 添加静态资源（`min.css` `min.js` `min.json`）

### 2.3 `src/style` 样式文件

* `normalize.css` 样式初始化1 (解决各浏览器初始化兼容问题)
* `base.css` 基础样式(滚动条等)

###  2.4 `src utils` 工具文件

### 2.5 组件方面

* `src components loading` 组件
* `src pages 404` 404页面

### 2.6 基础源代码更改 `instances`

* `antdesign.js`


## 三、依赖构建方面

### 3.1 `src services` axios二次封装、状态码、全局错误拦截。

文件目录

```
在`src/`文件下

├─services // 请求文件
|    ├─base-axiosconfig.js axios封装（请求拦截、响应拦截、错误统一处理）
|    ├─base-statuscode.js request请求状态码
|    ├─service-list
|    |  ├─service-test // 对应组件下的请求服务地址
|    |  └index.js // api接口的统一出口
├─static // 配置文件
```

依赖环境

```
yarn add -D axios ant-design-vue
```

使用

``` js
// index.html
<script src="./static/config.js"></script>

// main.js
import $API from '@/services/service-list'
Vue.prototype.$API = $API
window.$CONFIG = $CONFIG

// .vue
this.$API.getTestService({})
.then(res => { })
.catch(err => { })
.finally(() => { })
```

### 3.2 `src store` vuex二次封装

安装

```bash
yarn add -D vuex
```

使用

```js
// main.js
import store from '@/store'
new Vue({
  store
})

// .vue
import { mapState, mapMutations } from 'vuex'
computed: {
  ...mapState({
    staTest: state => state.Test.staTest
  })
},
methods: {
  ...mapMutations({
    mutTest: 'Test/mutTest'
  })
}
// this.staTest 取值
// this.mutTest('') 设置值
```

### 3.2 `less` css模块包（与ui框的保持一致）

```
yarn add less@2.7.2 less-loader@4.1.0 sass-resources-loader -D
```

build/webpack.base.conf.js
```js
{
  test: /\.less$/,
  loader: 'style-loader!css-loader!less-loader'
}
```

build/utils
```js
return {
    less: generateLoaders('less', { javascriptEnabled: true }).concat({
      loader: 'sass-resources-loader',
      options: {
        resources: [
          path.resolve(__dirname, '../src/style/mixin.less')
        ]
      }
    }),
}
```

.vue
```js
<style lang="less">
</style>
```

### 3.3  `babel`

>低版本兼容

```
yarn add babel-polyfill -D
```

main.js
```js
import 'babel-polyfill';
```

.babelrc
```
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      },
      "useBuiltIns": "entry"
    }],
    "stage-2"
  ],
  "plugins": ["transform-vue-jsx", "transform-runtime"]
}
```

> antd 按需加载组件代码和样式的 babel 插件
```
yarn add babel-plugin-import --dev
```

修改.babelrc文件，配置 babel-plugin-import
```
  {
    "presets": [
      ["env", {
        "modules": false,
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        }
      }],
      "stage-2"
    ],
-   "plugins": ["transform-vue-jsx", "transform-runtime"]
+   "plugins": [
+     "transform-vue-jsx",
+     "transform-runtime",
+     ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }]
+   ]
  }
```

## 四、关于打包的额外配置

### 4.1 使用`hash`打包
```
// /build/utils.js

if (options.extract) {
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader',
    + publicPath: '../../' // hash 打包
    // publicPath: '/' // history 打包
  })
}
```

```
// config/index.js

build: {

  + assetsPublicPath: './', // hash 打包
  // assetsPublicPath: '/', // history 打包

}
```

## [风格指南](https://cn.vuejs.org/v2/style-guide/)
