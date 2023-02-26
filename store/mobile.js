import { defineStore } from 'pinia'

export const useMobileStore = defineStore('mobile', {
  state: () => ({ 
    isMobile: true
  }),
  actions: {
    checkWidth() {
      if(!window) {
        this.isMobile = false 
        return
      }

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