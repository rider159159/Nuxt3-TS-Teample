import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

declare module '#app' {
  interface NuxtApp {
    $dayjs: typeof dayjs
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('dayjs', dayjs)
})
