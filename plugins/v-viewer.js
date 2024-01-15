import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Viewer, {
    defaultOptions: {
      zIndex: 9999,
    },
  })
})
