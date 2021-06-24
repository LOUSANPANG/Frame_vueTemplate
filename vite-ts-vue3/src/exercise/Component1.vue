<template>
  <div>
    <Component2 v-model="searchText" />
    <h2>{{searchText}}</h2>

    <component3 v-model="searchSelect" />
    <h2>{{searchSelect}}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Component2 from './Component2.vue'
import Component3 from './Component3.vue'

export default defineComponent({
  name: 'Component1',
  components: {
    Component2,
    Component3,
  },
  data() {
    return {
      searchText: '',
      searchSelect: ''
    }
  }
})
</script>

<style scoped></style>
