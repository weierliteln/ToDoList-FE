import { createApp } from 'vue'
import pinia from '@/stores/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.scss'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
