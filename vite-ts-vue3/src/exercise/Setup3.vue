<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, toRef, reactive, h } from 'vue'

export default defineComponent({
  name: 'Setup3',
  props: {
    info: {
      type: String
    },
    user: {
      type: String,
      require: true,
      default: 'LOUSANPANG'
    }
  },

  setup(props, { attrs, slots, emit }) {
    const info = toRef(props, 'info')
    const { user } = toRefs(props)
    console.log(info.value)
    console.log(user.value)

    console.log(attrs, slots, emit)

    const book = reactive({ title: 'Book Title' })
    console.log(book)

    return () => h('div', ['h: ', book.title])
  }
})
</script>

<style scoped></style>
