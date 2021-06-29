<template>
  <div>
    <h2>{{inject1}}</h2>
    <h2>{{name}}</h2>
    <h2>{{inject4}}</h2>

    <button @click="inject5">update provide4</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'setup5',

  setup() {
    const inject1 = inject('provide1', 22222)
    const { name } = inject('provide2')

    const inject4 = inject('provide4')
    const inject5 = inject('provide5')

    return {
      inject1,
      name,
      inject4,
      inject5
    }
  }
})
</script>

<style scoped></style>
