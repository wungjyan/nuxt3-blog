// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@unocss/nuxt', '@nuxtjs/color-mode'],
  css: ['@unocss/reset/tailwind.css', '@/assets/style/global.css'],
  colorMode: {
    classSuffix: '',
  },
})
