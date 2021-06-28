import { ref, onMounted } from 'vue'

const SetupJs = () => {
  const list = ref([])

  onMounted(() => {
    setTimeout(() => {
      list.value = [ 'aa', 'bb' ]
    })
  })

  return {
    list
  }
}

export default SetupJs
