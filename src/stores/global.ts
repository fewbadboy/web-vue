import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useGlobalStore = defineStore('global', () => {
  // state
  const count = ref(0)

  // getter
  const doubleCount = computed(() => count.value * 2)

  // action
  function increment() {
    count.value++
  }

  return {
    count,
    doubleCount,
    increment
  }
})