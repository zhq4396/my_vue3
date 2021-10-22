import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/layout/config.css'

createApp(App).use(router).mount('#app')
