import 'normalize.css'
import './assets/styles/main.css'
import VueTheMask from 'vue-the-mask'
import { createMetaManager } from 'vue-meta'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createYmaps } from 'vue-yandex-maps';

const app = createApp(App)

app.use(router).use(VueTheMask).use(createYmaps({ apikey: '3a9af56b-204b-4813-8d21-bf839ccffaf5', }))
app.use(createMetaManager()) // Используйте Meta Manager здесь
app.mount('#app')
