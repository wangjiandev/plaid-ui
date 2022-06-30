import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'uno.css'
import '@unocss/reset/antfu.css'

import './assets/fontawesome/scss/fontawesome.scss'
import './assets/fontawesome/scss/duotone.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
