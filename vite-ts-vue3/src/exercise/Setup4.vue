<template>
  <div>
    <Setup5 />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, readonly, reactive } from 'vue'
import Setup5 from './Setup5.vue'

export default defineComponent({
  name: 'setup4',
  components: { Setup5 },

  setup() {
    onMounted(() => console.log('onMounted'))

    provide('provide1', 11111)
    provide('provide2', { name: 'lgh' })

    provide('provide3', readonly('33333'))

    const provide4 = reactive({ key: 44444 })
    provide('provide4', provide4)

    const updateProvide4 = () => {
      provide4.key = 4
    }
    provide('provide5', updateProvide4)

  }
})
</script>

<style scoped></style>
