<template>
  <div>
    <h2>1111111111</h2>

    <h2>{{msg}}</h2>

    <button class="hook" @click="handleMsg">className Hook</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CycleHook',

  data() {
    return {
      msg: '2222'
    }
  },

  beforeCreate() {
    console.log('beforeCreate', this)
    console.log('beforeCreate', document.getElementsByClassName('hook')[0])
  },

  created() {
    // this => vm
    console.log('create', this)
    console.log('create', document.getElementsByClassName('hook')[0])
  },

  beforeMount() {
    console.log('beforeMount', this)
    console.log('beforeMount', document.getElementsByClassName('hook')[0])
  },

  mounted() {
    // el render
    console.log('mounted', this)
    console.log('mounted', document.getElementsByClassName('hook')[0])
  },

  beforeUpdate() {
    // data changed
    console.log('beforeUpdate', this)
    console.log('beforeUpdate', document.getElementsByClassName('hook')[0])
  },

  updated() {
    // el changed
    console.log('updated', this)
    console.log('updated', document.getElementsByClassName('hook')[0])
  },

  beforeUnmount() {
    // data ... unmount
    console.log('beforeUnmount', this)
    console.log('beforeUnmount', document.getElementsByClassName('hook')[0])
  },

  unmounted() {
    // el ... unmount
    console.log('unmounted', this)
    console.log('unmounted', document.getElementsByClassName('hook')[0])
  },


  methods: {
    handleMsg() {
      this.msg = '3333'
    }
  }


})
</script>

<style>
</style>
