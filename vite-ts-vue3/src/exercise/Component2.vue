<template>
  <div>
    <input type="text" :value="modelValue" @input="changeValue">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Component2',
  props: ['modelValue'],
  methods: {
    changeValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
})
</script>

<style scoped></style>
