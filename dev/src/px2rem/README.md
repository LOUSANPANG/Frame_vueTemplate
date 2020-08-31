### 使用

#### 添加`flexible.js`

#### main.js
```
import '@/config/flexible'
```

#### variables.less
```
@designWidth: 1920;
@initRem: @designWidth/10rem;

.px2rem (@type, @px) {
  @{type}: @px/@initRem
}
```