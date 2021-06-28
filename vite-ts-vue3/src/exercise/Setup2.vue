<template>
  <div>
    <Setup1 user="setup2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Setup1 from './Setup1.vue'

export default defineComponent({
  name: 'Setup2',
  components: { Setup1 },

  setup() {
    return {
    }
  }
})
</script>

<style scoped></style>

