<template>
  <div>
    <select :value="modelValue" @change="changeSelect">
      <option value="aaa">aaa</option>
      <option value="bbb">bbb</option>
      <option value="ccc">ccc</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Component3',
  props: ['modelValue'],
  methods: {
    changeSelect(event) {
      console.log(event.target.value)
      this.$emit('update:modelValue', event.target.value)
    }
  }
})
</script>

<style scoped></style>
