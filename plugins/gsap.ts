import { gsap } from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'

declare module '#app' {
  interface NuxtApp {
    $gsap: typeof gsap
  }
}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('gsap', gsap)
})
