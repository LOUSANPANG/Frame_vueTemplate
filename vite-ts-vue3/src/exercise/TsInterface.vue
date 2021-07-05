<template>
  <div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'TsInterface',

  setup() {
    onMounted(() => {
      let list: Array<number> = [1, 2]
      let list2: number[] = [1, 2]

      interface Point {
        color?: string,
        readonly size: number,
        list: ReadonlyArray<number>,
        [propName: string]: any
      }

      interface Fun {
        (color: string, size: number): boolean
      }

      interface NumberArray {
        [index: number]: string
      }

      interface FunClock {
        currentTime: Date,
        setTimer(d: Date): void
      }
      class Clock implements FunClock {
        currentTime: Date
        setTimer(d: Date) {
          this.currentTime = d
        }
        constructor() {}
      }

      interface A {
        color: string
      }
      interface B {
        size: number
      }
      interface C extends A, B {
        popular: string
      }
      let c = <C>{}
    })
  }
})
</script>

<style scoped></style>
