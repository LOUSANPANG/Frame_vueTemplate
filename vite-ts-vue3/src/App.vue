<template>
  <CycleHook />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CycleHook from './exercise/CycleHook.vue'
// import Setup from './exercise/setup.vue'

export default defineComponent({
  name: 'App',
  components: {
    CycleHook
  }
})
</script>

<style>
</style>
