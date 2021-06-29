<template>
  <div>
    <Setup1 user="setup2" />

    <Setup3 info="1111" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Setup1 from './Setup1.vue'
import Setup3 from './Setup3.vue'

export default defineComponent({
  name: 'Setup2',
  components: { Setup1, Setup3 },

  setup() {
    return {
    }
  }
})
</script>

<style scoped></style>

