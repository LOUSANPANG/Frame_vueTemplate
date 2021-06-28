<template>
  <div>
    <button @click="show = !show">click me！</button>

    <transition
      :duration="{ enter: 500, leave: 800 }"
      appear
      mode="out-in"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <h1 v-if="show">An animated element</h1>
    </transition>
  </div>
</template>

<script lang="ts">
import './TransitionAnimate.css'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Transition3',
  data() {
    return {
      show: true
    }
  }
})
</script>

<style scoped>
</style>
