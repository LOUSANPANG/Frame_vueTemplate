<template>
  <div>
    <h1>data: {{dataPro}}</h1>

    -------------------------------
    <h1>props: {{user1}}</h1>
    <h1>toRefs: {{user}}</h1>

    -------------------------------
    <h2 v-for="(item, index) in arr" :key="index">ref: {{item}}</h2>

    -------------------------------
    <h1>computed: {{countComputer}}</h1>

    -------------------------------
    <h2 v-for="(item, index) in list" :key="index">外部setup: {{item}}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch, computed, toRefs } from 'vue'
import SetupJs from './Setup1'

export default defineComponent({
  name: 'Setup1',
  props: {
    user: {
      type: String,
      require: true,
      default: 'LOUSANPANG'
    }
  },

  data() {
    return {
      dataPro: 111
    }
  },

  setup(props) {
    // ref
    const arr = ref([])
    // set data
    arr.value.push(1)
    const setArr = () => {
      setTimeout(() => arr.value.push(2), 2000)
    }
    // watch
    watch(arr, (newVal, oldVal) => console.log(newVal), { deep: true })

    // toRefs
    const { user } = toRefs(props)

    // computed
    const count = ref(0)
    const countComputer = computed(() => count.value * 2)
    count.value = 2

    // 生命周期
    onMounted(() => {
      setArr()
    })

    const { list } = SetupJs()

    return {
      user1: props.user,
      user,
      arr,
      countComputer,
      list
    }
  }
})
</script>

<style scoped></style>

