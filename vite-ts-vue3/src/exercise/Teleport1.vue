<template>
  <div class="teleport1">
    <Teleport to="body">
      <p>1111111</p>
    </Teleport>
    <p>2222222</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Teleport1'
})
</script>

<style scoped></style>
