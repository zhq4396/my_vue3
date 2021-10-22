import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/layout/config.css'
import 'lib-flexible/flexible'

createApp(App).use(router).use(Vant).mount('#app')
