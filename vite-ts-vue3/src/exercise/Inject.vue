<template>
  <div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Inject',
  inject: ['provideVal'],
  created() {
    console.log(this.provideVal)
  }
})
</script>

<style scoped></style>
