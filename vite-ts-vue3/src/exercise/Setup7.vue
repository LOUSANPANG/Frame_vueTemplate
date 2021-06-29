<template>
  <div>
    <input type="text" v-focus>
    <h2 v-hh:[aa]="100">directives</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Setup7',

  directives: {
    focus: {
      mounted(el) {
        console.log(el)
        el.focus()
      }
    },
    hh: {
      mounted(el, { arg, value }) {
        console.log(el, arg, value)
      }
    }
  },

  setup() {
    const aa = ref('aa')

    return {
      aa
    }
  }
})
</script>

<style scoped></style>
