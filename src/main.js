import 'normalize.css'
import './assets/styles/main.css'
import VueTheMask from 'vue-the-mask'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(VueTheMask)

app.mount('#app')
