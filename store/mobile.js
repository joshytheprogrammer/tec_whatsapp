import { defineStore } from 'pinia'

export const useCounterStore = defineStore('mobile', {
  state: () => ({ 
    isMobile: true
  }),
  actions: {
    checkWidth() {
      let w = window.innerWidth

      // If statement to check width
      w > 768 ? this.isMobile = false : this.isMobile = true

      return
    },
  },
  getters: {
    getDevice(state) {
      return state.isMobile
    },
  }
})