# cli4.x-vue2.x

* 基于 `vue-cli 4.x`的`Vue2.x`项目模板

* 集成 `vue(vuex、vue-router、axios)`

* 基于 ESlint + Prettier 代码书写规范

* 遵从 `Angular Style Commit Message Conventions` 代码提交规范

* 集成 `element ui` + `scss`


## prettier
### 依赖
```bash
yarn add -D prettier eslint-plugin-prettier @vue/eslint-config-prettier
```


## 部署`Angular` 团队Git的规范，用 `git cz` 代替 `git commit`，添加commitlint。
### 依赖
```bash
yarn global add commitizen cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
yarn add -D commitizen cz-conventional-changelog
yarn add -D husky @commitlint/cli @commitlint/config-conventional

yarn add -D standard-version
```

### package.json
```json
"script": {
    "commit": "git-cz",
    "release": "standard-version"
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

### .commitlintrc
```js
module.exports = {
    extends: ['@commitlint/config-conventional']
}
```


## babel
### remove console plugin
```js
module.exports = {
  "plugins": [
    [
      'transform-remove-console',
      {
        exclude: ['error', 'warn']
      }
    ]
  ]
}
```


## vue.config.js
 