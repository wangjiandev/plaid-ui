import { defineStore } from 'pinia'

export const useMenuStore = defineStore({
  id: 'menu',
  state: () => ({
    isVisible: false,
  }),
  actions: {
    toggleMenuVisible() {
      this.isVisible = !this.isVisible
    },
  },
})
