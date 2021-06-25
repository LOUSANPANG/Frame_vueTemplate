<template>
  <div>
    <InjectCom />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InjectCom from './Inject.vue'

export default defineComponent({
  name: 'Provide',
  components: {
    InjectCom
  },
  data() {
    return {
      todos: [1, 2, 3, 4, 5]
    }
  },
  provide() {
    return {
      provideVal: this.todos.length
    }
  }
})
</script>

<style scoped></style>
