// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  nitro: {
    static: true,
  },
  modules: ['@nuxt/content', '@unocss/nuxt', '@nuxtjs/color-mode'],
  css: ['@unocss/reset/tailwind.css', '@/assets/style/global.css', '@/assets/style/markdown.less'],
  colorMode: {
    classSuffix: '',
  },
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
    },
  },
  // plugins: [
  //   './plugins/v-viewer.js',
  // ],
})
