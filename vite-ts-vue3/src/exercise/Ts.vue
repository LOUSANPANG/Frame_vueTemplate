<template>
  <div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Ts',

  setup() {
    onMounted(() => {
      const list: Array<number> = [1, 2]
      console.log(list)

      enum Color {
        Red,
        Green
      }
      const color: string = Color[1]
      console.log(color)
    })
  }
})
</script>

<style scoped></style>
