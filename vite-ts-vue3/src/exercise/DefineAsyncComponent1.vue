<template>
  <div>
    <DefineAsyncComponent2 />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'DefineAsyncComponent1',
  components: {
    DefineAsyncComponent2: defineAsyncComponent(() =>
      import('./DefineAsyncComponent2.vue')
    )
  }
})
</script>

<style>
</style>
