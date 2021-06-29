<template>
  <div>
    <p ref="root">get ref ele</p>
    <p ref="root1">get ref1 ele</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch, watchEffect } from 'vue'

export default defineComponent({
  name: 'Setup6',

  setup() {
    const root = ref(null)
    const root1 = ref(null)

    onMounted(() => {
      console.log(root.value)
    })

    watchEffect(() => console.log(root1.value),
      { flush: 'post' }
    )

    return {
      root,
      root1
    }
  }
})
</script>

<style scoped></style>
