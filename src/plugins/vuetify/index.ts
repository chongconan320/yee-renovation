import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Theme
import { defaultTheme } from './theme'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'defaultTheme',
    themes: {
      defaultTheme
    }
  },
  icons: {
    defaultSet: 'mdi'
  },
  components,
  directives
})

export default vuetify
