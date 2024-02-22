import 'normalize.css'
import './assets/styles/main.css'
import VueTheMask from 'vue-the-mask'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createYmaps } from 'vue-yandex-maps';

const app = createApp(App)

app.use(router).use(VueTheMask).use(createYmaps({ apikey: 'your-api-key', }))

app.mount('#app')
