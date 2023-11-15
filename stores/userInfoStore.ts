import { defineStore } from 'pinia'

export const userInfoStore = defineStore(
  'user-info-store',
  () => {
    const USER_INFO_REF = ref({})
    return {
      USER_INFO_REF,
    }
  },
  // 開啟持久化
  {
    persist: true,
  },
)
