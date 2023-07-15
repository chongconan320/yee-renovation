import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGoogleMaps from '@fawmi/vue-google-maps'

// Plugins
import i18n from '@/plugins/i18n'
import vuetify from '@/plugins/vuetify'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(i18n)
app.use(vuetify)
app.use(createPinia())
app.use(VueGoogleMaps, {
  load: {
    key: import.meta.env.VITE_GOOGLE_API_KEY
  }
})
app.use(router)

app.mount('#app')
