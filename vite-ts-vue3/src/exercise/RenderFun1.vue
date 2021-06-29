<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'RenderFun1',

  setup() {
    return () => h('div',
      {
        class: 'aaa'
      },
      [
        'render h',
        h('p', 'render h render children h')
      ]
    )
  }
})
</script>

<style scoped></style>
