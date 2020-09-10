
## 使用

### 依赖环境
```
npm i -D vuex
```

#### main.js引用
```
import store from '@/store'

new Vue({
  store
})
```

#### 在文件中使用
```
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