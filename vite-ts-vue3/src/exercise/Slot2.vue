<template>
  <div>
    <h1>i am slot component</h1>

    <slot name="header" />
    <slot name="body" />
    <slot name="foot" />

    <slot name="scopeSlot" value="i am scope slot" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Slot2'
})
</script>

<style scoped></style>
