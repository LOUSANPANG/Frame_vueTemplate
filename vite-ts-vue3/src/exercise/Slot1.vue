<template>

  <SlotCom>
    <template #header>
      <h2>hi this is header</h2>
    </template>

    <template #body>
      <h2>hi this is body</h2>
    </template>

    <template #foot>
      <h2>hi this is foot</h2>
    </template>

    <template #scopeSlot="scopeObj">
      <h3>{{scopeObj.value}}</h3>
    </template>
  </SlotCom>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlotCom from './Slot2.vue'

export default defineComponent({
  name: 'Slot1',
  components: {
    SlotCom
  }
})
</script>

<style>
</style>
